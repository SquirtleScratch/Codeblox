'use client'
import Board from '@/app/game/board'
import Up from "./blocks/Up"
import Down from "./blocks/Down"
import Execute from "./Execute"
import { DndContext } from '@dnd-kit/core';
import DropZone  from "./Droppable"


import { useState, useEffect } from 'react'


export default function Page() {

    const [instructions, setInstructions] = useState([])
    const [tempInstructions, setTempInstructions] = useState([])
    const [parent, setParent] = useState(null);

    console.log('instructions in page: ', instructions)

    const handleDragEnd = (event: { active: any; over: any }) => {

        const { active, over } = event;
        if (over) {
          console.log(`Dropped ${active.id} into ${over.id}`);
          // Here you can handle the logic when the item is dropped
          setParent(over ? over.id : null);

        }
      };
    return (
        <DndContext onDragEnd={handleDragEnd}>
        <div className="flex flex-row">
            <div className="flex-auto">
                <Board instructions={instructions} />
            </div>
            <div className="flex-auto">
                <DropZone id="dropzone1" />
            </div>
            <div className="flex-auto">
                <Down tempInstructions={tempInstructions} id='down'/>
                <br></br>
                <Up tempInstructions={tempInstructions} />
                <br></br>
                <Execute instructions={instructions} tempInstructions={tempInstructions} setInstructions={setInstructions} />
            </div>
        </div>
        </DndContext>
    )
}