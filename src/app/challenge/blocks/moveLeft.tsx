'use client';
import React, { useState, useEffect } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

export default function MoveLeft(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'move-left'
  });
  const style = {
    transform: CSS.Translate.toString(transform)
  }

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
      <div className='w-52 h-12 flex justify-center items-center bg-green-500 rounded-lg p-2.5 my-2'>
        <span>Move left one space</span>
      </div>
    </button>
  )
}