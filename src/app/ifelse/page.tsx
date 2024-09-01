'use client'

import HabitatsContainer from "./HabitatsContainer";
import AnimalContainer from "./AnimalContainer";
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { useState, useEffect } from 'react'


export default function Page() {
    const [animalValue, setAnimalValue] = useState(0)
    function handleDragEnd(event: DragEndEvent) {
        if (event.over) {
            if (event.over.id === event.active.id) {
                console.log("BOOM GOES THE DYNAMITE YOU GOT IT RIGHT")
                setAnimalValue(animalValue + 1)
            }
            else {
                alert("YOU ARE ONLY A KID ITS OK YOU GOT THIS WRONG")
            }
        }
    }

    return (
        <div >
            <DndContext onDragEnd={handleDragEnd}>
                <HabitatsContainer />
                <AnimalContainer changeAnimal={animalValue} />
            </DndContext>
            <div>
                if animal is a  penguin, habitat is the arctic
                <br></br>
                else if animal is a camel, habitat is the desert
                <br></br>
                else if animal is red, habitat is the swamp
                <br></br>
                else if animal is an alpaca, habitat is the mountain
                <br></br>
                else habitat is the jungle
            </div>
        </div>

    )
}
