import React from 'react';

const style =
  'bg-indigo-200 border-2 text-blue-800 shadow-inner font-mono text-5xl font-bold';

interface SquareProps {
  value: string;
  onClick: () => void;
}

const Square = ({ value, onClick }: SquareProps) => (
  <button className={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;
