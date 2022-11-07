import { Cell } from "./Cell";
import { Colors } from "./ColorsEnum";
import { Bishop } from "./figures/Bishop";
import { Figure } from "./figures/Figure";
import { King } from "./figures/King";
import { Knight } from "./figures/Knight";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";
import { Rook } from "./figures/Rook";

export class Board {
    cells: Cell[][] = []
    lostBlackFigures: Figure[] = []
    lostWhiteFigures: Figure[] = []

    public initCells() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = []
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 !== 0) {
                    row.push(new Cell(this, j, i, Colors.BLACK, null))
                } else {
                    row.push(new Cell(this, j, i, Colors.WHITE, null))
                }
            }
            this.cells.push(row)
        }
    }

    public getCopyBoard(): Board {
        const newBoard = new Board();
        newBoard.cells = this.cells;
        newBoard.lostWhiteFigures = this.lostWhiteFigures;
        newBoard.lostBlackFigures = this.lostBlackFigures;
        return newBoard

    }

    public highlightCells(selectedCell: Cell | null) {
        for (let i = 0; i < this.cells.length; i++) {
            const row = this.cells[i];
            for (let j = 0; j < row.length; j++) {
                const target = row[j];
                target.available = !!selectedCell?.figure?.canMove(selectedCell, target)
            }
        }
    }

    public getCell(x: number, y: number): Cell {
        return this.cells[y][x]
    }

    private addPawns() {
        for (let i = 0; i < 8; i++) {
            this.cells[1][i].figure = new Pawn(Colors.BLACK)
            this.cells[6][i].figure = new Pawn(Colors.WHITE)
        }
    }

    private addKings() {
        this.cells[0][4].figure = new King(Colors.BLACK)
        this.cells[7][4].figure = new King(Colors.WHITE)
    }

    private addQueens() {
        this.cells[0][3].figure = new Queen(Colors.BLACK)
        this.cells[7][3].figure = new Queen(Colors.WHITE)
    }

    private addBishops() {
        this.cells[0][2].figure = new Bishop(Colors.BLACK)
        this.cells[0][5].figure = new Bishop(Colors.BLACK)
        this.cells[7][2].figure = new Bishop(Colors.WHITE)
        this.cells[7][5].figure = new Bishop(Colors.WHITE)
    }

    private addKnights() {
        this.cells[0][1].figure = new Knight(Colors.BLACK)
        this.cells[0][6].figure = new Knight(Colors.BLACK)
        this.cells[7][1].figure = new Knight(Colors.WHITE)
        this.cells[7][6].figure = new Knight(Colors.WHITE)
    }

    private addRooks() {
        this.cells[0][0].figure = new Rook(Colors.BLACK)
        this.cells[0][7].figure = new Rook(Colors.BLACK)
        this.cells[7][0].figure = new Rook(Colors.WHITE)
        this.cells[7][7].figure = new Rook(Colors.WHITE)
    }

    public addFigures() {
        this.addPawns();
        this.addKings();
        this.addQueens();
        this.addBishops();
        this.addKnights();
        this.addRooks();
    }

    addLostFigure(figure: Figure): void {
        figure.color === Colors.BLACK
            ? this.lostBlackFigures.push(figure)
            : this.lostWhiteFigures.push(figure)
    }
}