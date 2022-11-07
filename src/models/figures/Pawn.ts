import { Cell } from "../Cell";
import { Colors } from "../ColorsEnum";
import { Figure, FigureNames } from "./Figure";

import blackLogo from "../../assets/black-pawn.png"
import whiteLogo from "../../assets/white-pawn.png"

export class Pawn extends Figure {
    isFirstMove: boolean
    constructor(color: Colors) {
        super(color)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.PAWN
        this.isFirstMove = true;
    }

    canMove(init: Cell, target: Cell): boolean {
        if (!super.canMove(init, target)) return false;

        const yDir = this.color === Colors.WHITE ? -1 : 1
        const isMovingForward = (target.y - init.y) * yDir > 0

        if (init.x === target.x && isMovingForward && target.isEmpty()) {
            if (this.isFirstMove && Math.abs(init.y - target.y) <= 2) return true;
            if (!this.isFirstMove && Math.abs(init.y - target.y) <= 1) return true;
        }

        if (target.y === init.y + yDir &&
            (target.x === init.x + 1 || target.x === init.x - 1) &&
            init.isEnemy(target)
        ) return true;

        return false;
    }

    public canTake(init: Cell, target: Cell): boolean {
        const yDir = this.color === Colors.WHITE ? -1 : 1

        if (target.y === init.y + yDir &&
            (target.x === init.x + 1 || target.x === init.x - 1)
        ) {
            console.log(true)
            return true;
        } 

        console.log(target)
        return false;
    }

    moveFigure(target: Cell): void {
        super.moveFigure(target);
        this.isFirstMove = false;
    }
}