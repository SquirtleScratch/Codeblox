'use client';
import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function Workspace() {
  return (
    <DndProvider backend={HTML5Backend}>
    <div className='workspace' style={{}}>
      <h3>Place your blocks here</h3>
    </div>
    </DndProvider>
  )
};