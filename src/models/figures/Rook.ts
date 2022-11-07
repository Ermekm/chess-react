import { Cell } from "../Cell";
import { Colors } from "../ColorsEnum";
import { Figure, FigureNames } from "./Figure";

import blackLogo from "../../assets/black-rook.png"
import whiteLogo from "../../assets/white-rook.png"

export class Rook extends Figure {
    constructor(color: Colors) {
        super(color)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.ROOK
    }

    canMove(init: Cell, target: Cell): boolean {
        if (!super.canMove(init, target)) return false;
        if (init.isEmptyHorizontal(target)) return true;
        if (init.isEmptyVertical(target)) return true;
        return false;
    }
}