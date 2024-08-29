'use client';
import React, { useState, useEffect } from 'react';
import { DndContext } from '@dnd-kit/core';

export default function RepeatBlock() {
  const [iterations, setIterations] = useState(0);
  
  return (
    <div className='repeat-block' style={{ padding: '10px', border: '2px solid #FFFFFF', margin: '15px' }}>
        <span>Repeat </span>
        <input type='number' value={iterations} onChange={(e) => setIterations(e.target.valueAsNumber)} style={{ width: '50px', color: 'black' }}>
        </input>
        <span> times</span>
    </div>
  )
};