'use client';
import React, { useState, useEffect } from 'react';
import { DndContext } from '@dnd-kit/core';
import Draggable from '../utils/draggable';
import Droppable from '../utils/droppable';

export default function Workspace() {
  return (
    <DndContext>
    <div className='workspace' style={{}}>
      <p>Place your blocks here</p>
    </div>
    </DndContext>

  )
};