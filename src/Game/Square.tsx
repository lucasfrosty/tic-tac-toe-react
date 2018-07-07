import * as React from 'react';
import styled from 'react-emotion';

const SquareContainer = styled('button')`
  min-width: 90px;
  min-height: 90px;
  display: flex;
  border-top: ${(props: IProps) => (props.index === 1 || props.index === 2 || props.index === 3) ? 0 : '2px solid #000'};
  border-right: ${(props: IProps) => (props.index === 3 || props.index === 6 || props.index === 9) ? 0 : '2px solid #000'};
  border-bottom: ${(props: IProps) => (props.index === 7 || props.index === 8 || props.index === 9) ? 0 : '2px solid #000'};
  border-left: ${(props: IProps) => (props.index === 1 || props.index === 4 || props.index === 7) ? 0 : '2px solid #000'};
  box-sizing: border-box;


  span {
    align-items: center;
    justify-content: center;
    margin: auto;
    font-size: 50px;
  }
`;

interface IProps {
  index: number;
}

function Square({ index }: IProps) {
  return (
    <SquareContainer index={index}>
      <span>X</span>
    </SquareContainer>
  )
}

export default Square;
