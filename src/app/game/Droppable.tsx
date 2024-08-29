
import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export default function DropZone({ id }) {
    const { isOver, setNodeRef } = useDroppable({ id });
    const style = {
      border: '2px dashed gray',
      padding: '20px',
      minHeight: '200px',
      backgroundColor: isOver ? 'lightgreen' : 'lightgray',
      transition: 'background-color 0.2s ease'
    };
  
    return (
      <div ref={setNodeRef} style={style}>
        Drop items here
      </div>
    );
  }
  