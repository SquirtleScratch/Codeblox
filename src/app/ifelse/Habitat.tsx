'use client'
import { useState, useEffect } from 'react'
import {useDroppable} from '@dnd-kit/core';



export default function Habitat({label, image, id}) {

    const {isOver, setNodeRef} = useDroppable({
        id: id,
      });
      const style = {
        opacity: isOver ? 1 : 0.5,
      };

    useEffect(() => {
        if(isOver) {console.log("is over ", label)}
    },[isOver])

    return (
        <div ref={setNodeRef} style={style}>
            <h2>{label}</h2>
            <img className='h-32 w-32' src={image}></img>
        </div>
    )
}