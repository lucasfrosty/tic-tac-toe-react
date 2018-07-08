import * as React from 'react';
import Board from './Board'

interface Props {
  getBackToTheMenu: () => void;
}

interface State {
  matrix: string[];
  playerTurn: number;
}

class Game extends React.Component<Props, State> {
  state = {
    matrix: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    playerTurn: 1,
  }

  clickHandler = (index: number): void => {
    this.setState((prevState) => {
      const oldMatrix = [...prevState.matrix];
      const player = prevState.playerTurn;
      oldMatrix[index] = player === 1 ? 'X' : 'O';

      return ({
        matrix: oldMatrix,
        playerTurn: player === 1 ? 2 : 1,
      })
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Game started</h1>
        <h2>Player {this.state.playerTurn} turn</h2>

        <Board matrix={this.state.matrix} clickHandler={this.clickHandler} />

        <button onClick={this.props.getBackToTheMenu}>Go back to the menu</button>
      </React.Fragment>
    );
  }

}

export default Game;
