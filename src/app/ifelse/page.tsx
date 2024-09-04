'use client'

import HabitatsContainer from "./HabitatsContainer";
import AnimalContainer from "./AnimalContainer";
import { DndContext, DragEndEvent, closestCenter, closestCorners, rectIntersection } from '@dnd-kit/core';
import { useState, useEffect } from 'react'
import { animalDataType, initialDataType, returnValueDataType } from './ifelsetypes'
import initialData from "./animalData"
import IfElseRules from "./IfElseRules";

function getInitialHabitats(initialData: initialDataType[]) {

    const targetHabitats = 5
    const returnValue: returnValueDataType = { "habitats": [], "animals": [] }

    let habitatData: initialDataType[] = [...initialData]
    for (let i = 0; i < targetHabitats; i++) {
        let index = Math.floor(Math.random() * habitatData.length)
        let currentHabitat: initialDataType = habitatData[index]
        returnValue.habitats = [...returnValue.habitats, currentHabitat]
        returnValue.animals = [...returnValue.animals, ...currentHabitat.animals]
        habitatData = habitatData.filter((habitat, habitatIndex) => habitatIndex !== index)
    }
    return returnValue
}

export default function Page() {
    const [animalValue, setAnimalValue] = useState(0)
    const [habitatData, setHabitatData] = useState(getInitialHabitats(initialData))

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
            <DndContext onDragEnd={handleDragEnd} collisionDetection={rectIntersection}>
                <HabitatsContainer initialHabitatData={habitatData.habitats} />
                <AnimalContainer initialAnimalData={habitatData.animals} changeAnimal={animalValue} />
            </DndContext>
            <IfElseRules animalData={habitatData.animals}/>
        </div>

    )
}
