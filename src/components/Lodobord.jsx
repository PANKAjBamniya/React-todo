import React, { useState } from 'react';

const Lodobord = () => {
  const [move, setMove] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
  const [lastColor, setLastColor] = useState(null);

  const updateMove = (color) => {
    setMove((prevMoves) => ({
      ...prevMoves,
      [color]: prevMoves[color] + 1,
    }));
    setLastColor(color); 
  };

  return (
    <div className='w-full h-screen bg-zinc-100'>
      <h1 className={`w-full flex items-center justify-center p-4 text-3xl font-bold text-white 
                     ${lastColor === 'blue' ? 'bg-blue-700' : 
                       lastColor === 'red' ? 'bg-red-700' : 
                       lastColor === 'yellow' ? 'bg-yellow-600' : 
                       lastColor === 'green' ? 'bg-green-400' : 'bg-red-500'} `}>
        {lastColor ? `${lastColor.charAt(0).toUpperCase() + lastColor.slice(1)} Moves Updated` : 'Lodo-Board'}
      </h1>
      <div className='w-full p-5 flex items-center justify-center flex-col mt-20 gap-8'>
        <h2 className='text-2xl'>Game Begins</h2>
        <div className='flex gap-5'>
          <span className='bg-blue-700 rounded p-2 flex flex-col text-white'>
            <p>Blue Moves = {move.blue}</p>
            <button onClick={() => updateMove('blue')}>+1</button>
          </span>
          <span className='bg-red-700 rounded p-2 flex flex-col text-white'>
            <p>Red Moves = {move.red}</p>
            <button onClick={() => updateMove('red')}>+1</button>
          </span>
          <span className='bg-yellow-600 rounded p-2 flex flex-col text-white'>
            <p>Yellow Moves = {move.yellow}</p>
            <button onClick={() => updateMove('yellow')}>+1</button>
          </span>
          <span className='bg-green-400 rounded p-2 flex flex-col text-white'>
            <p>Green Moves = {move.green}</p>
            <button onClick={() => updateMove('green')}>+1</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Lodobord;
