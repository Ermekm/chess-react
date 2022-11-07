import { Cell } from "../Cell";
import { Colors } from "../ColorsEnum";
import { Figure, FigureNames } from "./Figure";

import blackLogo from "../../assets/black-knight.png"
import whiteLogo from "../../assets/white-knight.png"

export class Knight extends Figure {
    constructor(color: Colors) {
        super(color)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.KNIGHT
    }

    canMove(init: Cell, target: Cell): boolean {
        if (!super.canMove(init, target)) return false;

        const difX = Math.abs(init.x - target.x);
        const difY = Math.abs(init.y - target.y);

        if ((difX === 2 && difY === 1) || (difX === 1 && difY === 2)) return true;

        return false;
    }
}