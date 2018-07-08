import * as React from 'react';
import Board from './Board'

interface Props {
  getBackToTheMenu: () => void;
}

interface State {
  matrix: string[];
  playerTurn: number;
  winner: number | undefined
}

class Game extends React.Component<Props, State> {
  state = {
    matrix: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    playerTurn: 1,
    winner: undefined,
  }

  clickHandler = (index: number): void => {
    this.setState((prevState) => {
      const newMatrix = [...prevState.matrix];
      const player = prevState.playerTurn;
      newMatrix[index] = player === 1 ? 'X' : 'O';

      return ({
        matrix: newMatrix,
        playerTurn: player === 1 ? 2 : 1,
      })
    }, () => {
      const [one, two, three, four, five, six, seven, eight, nine] = this.state.matrix;
      this.checkIfLineHaveWinner([one, two, three]);
      this.checkIfLineHaveWinner([four, five, six]);
      this.checkIfLineHaveWinner([seven, eight, nine]);
      this.checkIfLineHaveWinner([one, four, seven]);
      this.checkIfLineHaveWinner([two, five, eight]);
      this.checkIfLineHaveWinner([three, six, nine]);
      this.checkIfLineHaveWinner([one, five, nine]);
      this.checkIfLineHaveWinner([three, five, seven]);

    });
  }

  setWinner = (winner: number) => {
    this.setState({ winner });
  }

  isLineComplete = (squares: string[]) => {
    const isLineComplete = (squares.filter(square => square !== ' ').length) === squares.length
    return isLineComplete;
  }

  checkIfLineHaveWinner = (squares: string[]) => {
    if (this.isLineComplete(squares)) {
      const allEqual = (arr: string[]) => arr.every(v => v === arr[0]);
      if (allEqual(squares)) {
        const winner = squares[0] === 'X' ? 1 : 2;
        this.setWinner(winner);
      }
    }

    return;
  }



  render() {
    const { matrix, playerTurn, winner } = this.state;
    return (
      <React.Fragment>
        <h1>Game started</h1>
        {winner === undefined
          ? (
            <h2>Player {playerTurn} turn</h2>
          ) : (
            <h2>Player {winner} WON!!</h2>
          )
        }

        <Board matrix={matrix} clickHandler={this.clickHandler} />

        <button onClick={this.props.getBackToTheMenu}>Go back to the menu</button>
      </React.Fragment>
    );
  }

}

export default Game;
