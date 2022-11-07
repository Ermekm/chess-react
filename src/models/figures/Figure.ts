import logo from "../../assets/black-king.png"

import { Cell } from "../Cell";
import { Colors } from "../ColorsEnum";

export enum FigureNames {
    "FIGURE" = "Figure",
    "KING" = "King",
    "QUEEN" = "Queen",
    "BISHOP" = "Bishop",
    "KNIGHT" = "Knight",
    "ROOK" = "Rook",
    "PAWN" = "Pawn"
}

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    name: FigureNames;
    id: number;

    constructor (color: Colors) {
        this.color = color;
        // cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE
        this.id = Math.random()
    }

    canMove(init: Cell, target: Cell): boolean {
        if (target.figure?.color === init.color) return false;
        if (target.figure?.name === FigureNames.KING) return false; 
        return true;
    }

    moveFigure(target: Cell) {
        
    }

    public canTake(init: Cell, target: Cell): boolean {
        return this.canMove(init, target)
    }
}