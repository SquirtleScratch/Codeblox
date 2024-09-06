'use client';
import { useState, useEffect } from 'react';

export default function Gameboard() {
  const [divClassName, setDivClassName] = useState('border-white border-2 h-11 w-11');
  let rows = [];
  
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      let key = `${j}${i}`
      rows.push(<div className={divClassName} key={key}></div>)
    }
  }

  return (
    <div className='flex justify-center'>
      <div className='grid grid-cols-10 h-max w-max'>
        {rows}
      </div>
    </div>
  );
}