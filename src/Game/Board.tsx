import * as React from 'react';
import styled from 'react-emotion';

import Square from './Square'

const Container = styled('div')`
  max-width: 270px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

function Board() {
  return (
    <Container>
      <Square index={1} />
      <Square index={2} />
      <Square index={3} />
      <Square index={4} />
      <Square index={5} />
      <Square index={6} />
      <Square index={7} />
      <Square index={8} />
      <Square index={9} />
    </Container>
  )
}

export default Board;
