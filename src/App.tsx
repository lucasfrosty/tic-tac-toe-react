import * as React from 'react';
import Game from './Game'

interface IState {
  gameStarted: boolean,
}

class App extends React.Component<any, IState> {
  state = {
    gameStarted: true,
  }

  startGame = (): void => {
    this.setState({
      gameStarted: true,
    });
  }

  getBackToTheMenu = (): void => {
    this.setState({
      gameStarted: false,
    });
  }

  render() {
    return (
      <div>
        {!this.state.gameStarted ? (
          <React.Fragment>
            <h1>Tic Tac Toe</h1>
            <button onClick={this.startGame}>Start Game</button>
          </React.Fragment>
        ) : (
            <Game getBackToTheMenu={this.getBackToTheMenu} />
          )}
      </div>
    );
  }
}

export default App;
