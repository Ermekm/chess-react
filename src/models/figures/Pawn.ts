import { Cell } from "../Cell";
import { Colors } from "../ColorsEnum";
import { Figure, FigureNames } from "./Figure";

import blackLogo from "../../assets/black-pawn.png"
import whiteLogo from "../../assets/white-pawn.png"

export class Pawn extends Figure {
    isFirstMove: boolean
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.PAWN
        this.isFirstMove = true;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false;

        const yDir = this.color === Colors.WHITE ? -1 : 1
        const isMovingForward = (target.y - this.cell.y) * yDir > 0

        if (this.cell.x === target.x && isMovingForward && this.cell.board.getCell(target.x, target.y).isEmpty()) {
            if (this.isFirstMove && Math.abs(this.cell.y - target.y) <= 2) return true;
            if (!this.isFirstMove && Math.abs(this.cell.y - target.y) <= 1) return true;
        }

        if (target.y === this.cell.y + yDir &&
            (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
            this.cell.isEnemy(target)
        ) return true;

        return false;
    }

    public canTake(target: Cell): boolean {
        const yDir = this.color === Colors.WHITE ? -1 : 1

        if (target.y === this.cell.y + yDir &&
            (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
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