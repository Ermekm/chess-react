import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

import blackLogo from "../../assets/black-king.png"
import whiteLogo from "../../assets/white-king.png"

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.KING
    }

    public isCheck(target: Cell): boolean {
        const cells = this.cell.board.cells
        for (let i = 0; i < cells.length; i++) {
            const row = cells[i]
            for (let j = 0; j < row.length; j++) {
                if (cells[i][j].figure && cells[i][j].figure?.color !== this.color && cells[i][j].figure?.canEat(target)) return true;
            }
        }
        return false;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false;

        const difX = Math.abs(target.x - this.cell.x);
        const difY = Math.abs(target.y - this.cell.y);

        if (difX <= 1 && difY <= 1 && !this.isCheck(target)) return true;
        return false;
    }
}