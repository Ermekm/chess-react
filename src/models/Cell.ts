import { Board } from "./Board";
import { Colors } from "./ColorsEnum";
import { Figure } from "./figures/Figure";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;
    available: boolean;
    id: number;

    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.board = board;
        this.available = false;
        this.id = Math.random();
    }

    public isEnemy(target: Cell): boolean {
        if (target.figure) {
            return this.figure?.color !== target.figure?.color
        }
        return false;
    }

    public isEmpty(): boolean {
        if (this.figure) return false;
        else return true;
    }

    public isEmptyVertical(target: Cell): boolean {
        if (this.x !== target.x) return false;

        const min = Math.min(this.y, target.y);
        const max = Math.max(this.y, target.y);

        for (let i = min + 1; i < max; i++) {
            if (!this.board.getCell(this.x, i).isEmpty()) {
                return false;
            }
        }

        return true;
    }

    public isEmptyHorizontal(target: Cell): boolean {
        if (this.y !== target.y) return false;

        const min = Math.min(this.x, target.x);
        const max = Math.max(this.x, target.x);

        for (let i = min + 1; i < max; i++) {
            if (!this.board.getCell(i, this.y).isEmpty()) {
                return false;
            }
        }

        return true;
    }

    public isEmptyDiagonal(target: Cell): boolean {
        let difX = Math.abs(this.x - target.x);
        let difY = Math.abs(this.y - target.y);

        if (difX !== difY) return false;

        let dirY = this.y < target.y ? 1 : -1;
        let dirX = this.x < target.x ? 1 : -1;

        for (let i = 1; i < difX; i++) {
            let currCellX = this.x + i * dirX;
            let currCellY = this.y + i * dirY;
            let isNotEmpty = !this.board.getCell(currCellX, currCellY).isEmpty()

            if (isNotEmpty) return false;
        }

        return true;
    }

    moveFigure(target: Cell) {
        if (this.figure?.canMove(this, target)) {
            this.figure.moveFigure(target)
            if (target.figure) {
                this.board.addLostFigure(target.figure)
            }
            target.figure = this.figure;
            // this.figure.cell = target;
            this.figure = null
        }
    }
}