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
    for (let i = 0; i < 9; i++) {
      squares.push(<Square key={i} onClick={clickHandler} value={matrix[i]} index={i + 1} />);
    }

    return (
      <Container>
        {squares}
      </Container>
    )
  }
}

export default Board;
