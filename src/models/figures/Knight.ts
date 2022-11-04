import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

import blackLogo from "../../assets/black-knight.png"
import whiteLogo from "../../assets/white-knight.png"

export class Knight extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.KNIGHT
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false;

        const difX = Math.abs(this.cell.x - target.x);
        const difY = Math.abs(this.cell.y - target.y);

        if ((difX === 2 && difY === 1) || (difX === 1 && difY === 2)) return true;

        return false;
    }
}