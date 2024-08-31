'use client'

import HabitatsContainer from "./HabitatsContainer";
import AnimalContainer from "./AnimalContainer";
import { DndContext } from '@dnd-kit/core';
import { useState, useEffect } from 'react'


export default function Page() {
    const [animalValue, setAnimalValue] = useState(0)
    function handleDragEnd(event) {
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
        <div>
            <DndContext onDragEnd={handleDragEnd}>
                <HabitatsContainer />
                <AnimalContainer changeAnimal={animalValue} />
            </DndContext>
            <div>
                if animal is a  penguin, habitat is the arctic 
                <br></br>
                else if animal is a camel, habitat is the desert
                <br></br>
                else habitat is the jungle
            </div>
        </div>

    )
}
