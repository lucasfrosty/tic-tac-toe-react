import * as React from 'react';
import styled from 'react-emotion';

const SquareContainer = styled('button')`
  min-width: 90px;
  min-height: 90px;
  display: flex;
  border-top: ${(props: Props) => (props.index === 1 || props.index === 2 || props.index === 3) ? 0 : '2px solid #000'};
  border-right: ${(props: Props) => (props.index === 3 || props.index === 6 || props.index === 9) ? 0 : '2px solid #000'};
  border-bottom: ${(props: Props) => (props.index === 7 || props.index === 8 || props.index === 9) ? 0 : '2px solid #000'};
  border-left: ${(props: Props) => (props.index === 1 || props.index === 4 || props.index === 7) ? 0 : '2px solid #000'};
  box-sizing: border-box;
  outline: none;
  cursor: pointer;


  span {
    align-items: center;
    justify-content: center;
    margin: auto;
    font-size: 50px;
  }
`;

interface Props {
  index: number;
}

function Square({ index }: Props) {
  return (
    <SquareContainer index={index}>
      <span>{' '}</span>
    </SquareContainer>
  )
}

export default Square;
