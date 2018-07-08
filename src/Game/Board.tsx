import * as React from 'react';
import styled from 'react-emotion';

import Square from './Square'

const Container = styled('div')`
  max-width: 270px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

interface Props {
  clickHandler: (index: number) => void;
  matrix: string[];
}
class Board extends React.Component<Props, {}> {

  render() {
    const { clickHandler, matrix } = this.props;

    const squares: JSX.Element[] = [];
    for (let i = 1; i < 10; i++) {
      squares.push(<Square key={i} onClick={clickHandler} value={matrix[i]} index={i} />);
    }

    return (
      <Container>
        {squares}
      </Container>
    )
  }
}

export default Board;
