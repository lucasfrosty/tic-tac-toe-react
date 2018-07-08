import * as React from 'react';
import styled from 'react-emotion';

import Square from './Square'

const Container = styled('div')`
  max-width: 270px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

class Board extends React.Component {
  render() {
    const squares: JSX.Element[] = [];
    for (let i = 1; i < 10; i++) {
      squares.push(<Square key={i} index={i} />);
    }

    return (
      <Container>
        {squares}
      </Container>
    )
  }
}

export default Board;
