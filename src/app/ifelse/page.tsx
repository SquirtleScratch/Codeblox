'use client'

import HabitatsContainer from "./HabitatsContainer";
import AnimalContainer from "./AnimalContainer";
import { DndContext, DragEndEvent, closestCenter, closestCorners, rectIntersection } from '@dnd-kit/core';
import { useState, useEffect } from 'react'
import { animalDataType, initialDataType, returnValueDataType } from './ifelsetypes'
import initialData from "./animalData"
import IfElseRules from "./IfElseRules";
import Tryagain from "./Tryagain";
import Restart from "./Restart";

function getInitialHabitats(initialData: initialDataType[]) {

    const targetHabitats = 5
    const returnValue: returnValueDataType = { "habitats": [], "animals": [] }

    let habitatData: initialDataType[] = [...initialData]
    for (let i = 0; i < targetHabitats; i++) {
        let index = Math.floor(Math.random() * habitatData.length)
        let currentHabitat: initialDataType = habitatData[index]
        returnValue.habitats = [...returnValue.habitats, currentHabitat]

        let currentAnimals = [...currentHabitat.animals]
        let animalIndex1 = Math.floor(Math.random() * currentAnimals.length)
        let firstAnimal = currentAnimals.splice(animalIndex1, 1)[0]

        let animalIndex2 = Math.floor(Math.random() * currentAnimals.length)
        let secondAnimal = currentAnimals[animalIndex2]

        returnValue.animals = [...returnValue.animals, firstAnimal, secondAnimal]
        habitatData = habitatData.filter((habitat, habitatIndex) => habitatIndex !== index)
    }
    return returnValue
}

export default function Page() {
    const [animalValue, setAnimalValue] = useState(0)
    const [habitatData, setHabitatData] = useState(getInitialHabitats(initialData))
    const [tryAgain, setTryAgain] = useState(false)
    const [restart, setRestart] = useState(false)


    // useEffect(() => {
    //     if (restart) {
    //         setHabitatData(getInitialHabitats(initialData))
    //     }
    //     setRestart(false)
    // }, [restart])

    function restartGame() {
        setHabitatData(getInitialHabitats(initialData))
        setRestart(false)
    }


    function handleDragEnd(event: DragEndEvent) {
        if (event.over) {
            if (event.over.id === event.active.id) {
                setAnimalValue(animalValue + 1)
                setTryAgain(false)
            }
            else {
                setTryAgain(true)
            }
        }
    }

    return (
        <div className="h-dvh bg-gray-200">
            <DndContext onDragEnd={handleDragEnd} collisionDetection={rectIntersection}>
                <HabitatsContainer initialHabitatData={habitatData.habitats} />
                {tryAgain && <Tryagain />}
                {restart && <Restart onClick={restartGame} />}
                <div className="flex justify-items-center mt-20">
                    {!restart && <AnimalContainer initialAnimalData={habitatData.animals} changeAnimal={animalValue} setRestart={setRestart} />}
                    {!restart && <IfElseRules animalData={habitatData.animals} />}
                    <br></br>
                </div>
            </DndContext>
            <a href="/challenge" className="float-right inline-block mr-0.5 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
            Maze challenge
          </a>
        </div >

    )
}
