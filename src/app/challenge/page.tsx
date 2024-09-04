'use client';
import Gameboard from './components/gameboard';
import Workspace from './components/workspace';
import { useState, useEffect } from 'react';
import { DndContext } from '@dnd-kit/core';

export default function Page() {
  return (
    <div>
      <div>
        <h1>Challenge #2</h1>
        <Gameboard></Gameboard>
      </div>
      <div>
        <h1>Workspace</h1>
        <Workspace></Workspace>
      </div>
    </div>
  )
}