import * as React from 'react';
import styled from 'react-emotion';

import Square from './Square'

const Container = styled('div')`
  max-width: 270px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

interface State {
  matrix: string[]
}
class Board extends React.Component<any, State> {
  state = {
    matrix: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
  }

  clickHandler = (index: number): void => {
    this.setState((prevState) => {
      const oldMatrix = [...prevState.matrix];
      oldMatrix[index] = 'X';

      return ({
        matrix: oldMatrix,
      })
    });
  }

  render() {
    const squares: JSX.Element[] = [];
    for (let i = 1; i < 10; i++) {
      squares.push(<Square key={i} onClick={this.clickHandler} value={this.state.matrix[i]} index={i} />);
    }

    return (
      <Container>
        {squares}
      </Container>
    )
  }
}

export default Board;
