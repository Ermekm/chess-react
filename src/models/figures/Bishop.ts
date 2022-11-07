import { Cell } from "../Cell";
import { Colors } from "../ColorsEnum";
import { Figure, FigureNames } from "./Figure";

import blackLogo from "../../assets/black-bishop.png";
import whiteLogo from "../../assets/white-bishop.png";

export class Bishop extends Figure {
    constructor(color: Colors) {
        super(color)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.BISHOP
    }

    canMove(init: Cell, target: Cell): boolean {
        if (!super.canMove(init, target)) return false;
        if (init.isEmptyDiagonal(target)) return true;
        return false;
    }  
}