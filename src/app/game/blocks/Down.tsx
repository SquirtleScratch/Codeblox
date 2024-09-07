'use client'

import { useState, useEffect } from 'react'
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities'
import { instructions } from '../gametypes';

export default function Down({ tempInstructions, id }: {tempInstructions: instructions[], id:string}) {

    const [spaces, setSpaces] = useState(0)

    const { attributes, listeners, setNodeRef, transform } = useDraggable({id});

    const style = {
        transform: CSS.Translate.toString(transform),
        transition: 'transform 0.2s ease',
        border: '1px solid black',
        padding: '10px',
        backgroundColor: 'lightgray',
        cursor: 'move',
        width: '200px'
    };


    function updateSpaces(spaceValue: String) {
        setSpaces(Number(spaceValue))
        tempInstructions.push({ x: 0, y: Number(spaceValue) })
        console.log('tempInstructions in Down:', tempInstructions)
    }

    return (
        <div ref={setNodeRef} {...listeners} {...attributes} style={style}>
            Move Down <input className='text-black' type='number' value={spaces} onChange={(e) => { updateSpaces(e.target.value) }} />spaces
        </div>
    )

}

