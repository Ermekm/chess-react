import { Cell } from "../Cell";
import { Colors } from "../ColorsEnum";
import { Figure, FigureNames } from "./Figure";

import blackLogo from "../../assets/black-king.png"
import whiteLogo from "../../assets/white-king.png"

export class King extends Figure {
    constructor(color: Colors) {
        super(color)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.KING
    }

    // public isCheck(target: Cell): boolean {
    //     const cells = this.cell.board.cells
    //     for (let i = 0; i < cells.length; i++) {
    //         const row = cells[i]
    //         for (let j = 0; j < row.length; j++) {
    //             if (cells[i][j].figure && cells[i][j].figure?.color !== this.color && cells[i][j].figure?.canTake(target)) return true;
    //         }
    //     }
    //     return false;
    // }

    canMove(init: Cell, target: Cell): boolean {
        if (!super.canMove(init, target)) return false;

        const difX = Math.abs(target.x - init.x);
        const difY = Math.abs(target.y - init.y);

        if (difX <= 1 && difY <= 1
            //  && !this.isCheck(target)
             ) return true;
        return false;
    }
}