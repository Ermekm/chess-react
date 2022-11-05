import React, { useEffect, useState } from 'react';
import './App.css';
import BoardComponent from './components/BoardComponent';
import { LostFigures } from './components/LostFigures';
import { Timer } from './components/Timer';
import { Board } from './models/Board';
import { Colors } from './models/Colors';
import { Player } from './models/Player';

function App() {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

  useEffect(() => {
    restart()
  }, [])


  function restart(): void {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures()
    setBoard(newBoard)
    setCurrentPlayer(whitePlayer)
  }

  function swapPlayer(): void {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  return (
    <div className="app">
      <Timer
        restart={restart}
        currentPlayer={currentPlayer}
      ></Timer>
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      ></BoardComponent>
      <LostFigures title="Lost White Figures: " figures={board.lostWhiteFigures}></LostFigures>
      <LostFigures title="Lost Black Figures: " figures={board.lostBlackFigures}></LostFigures>

    </div>

  );
}

export default App;
