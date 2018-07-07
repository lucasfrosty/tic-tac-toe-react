import * as React from 'react';
import Board from './Board'

interface IProps {
  getBackToTheMenu: () => void,
}

class Game extends React.Component<IProps, {}> {

  render() {
    return (
      <React.Fragment>
        <h1>Game started</h1>

        <Board />

        <button onClick={this.props.getBackToTheMenu}>Go back to the menu</button>
      </React.Fragment>
    );
  }

}

export default Game;
