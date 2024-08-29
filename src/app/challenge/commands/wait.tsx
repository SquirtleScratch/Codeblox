'use client';
import React, { useState, useEffect } from 'react';

export default function WaitBlock() {
  const [time, setTime] = useState(1);

  return (
    <div className='wait-block' style={{ padding: '10px', border: '2px solid #FFFFFF', margin: '15px' }}>
      <span>Wait </span>
      <input type='number' value={time} onChange={(e) => setTime(e.target.valueAsNumber)} style={{width: '50px', color: 'black'}}></input>
      <span> seconds</span>
    </div>
  )
};