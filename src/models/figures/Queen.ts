import { Cell } from "../Cell";
import { Colors } from "../ColorsEnum";
import { Figure, FigureNames } from "./Figure";

import blackLogo from "../../assets/black-queen.png"
import whiteLogo from "../../assets/white-queen.png"

export class Queen extends Figure {
    constructor(color: Colors) {
        super(color)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.QUEEN
    }

    canMove(init: Cell, target: Cell): boolean {
        if (!super.canMove(init, target)) return false;
        if (init.isEmptyVertical(target)) return true;
        if (init.isEmptyHorizontal(target)) return true;
        if (init.isEmptyDiagonal(target)) return true;
        return false;
    }
}