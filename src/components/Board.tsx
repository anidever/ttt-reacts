import React from 'react';
import Square from './Square';

const style =
  'border-4 rounded-md border-blue-800 w-96 h-96 m-auto mt-9 grid grid-rows-3 grid-cols-3 justify-center';

interface BoardProps {
  squares: string[];
  onClick: (i: number) => void;
}

const Board = ({ squares, onClick }: BoardProps) => (
  <div className={style}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
