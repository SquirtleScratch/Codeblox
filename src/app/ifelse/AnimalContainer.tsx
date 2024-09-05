'use client'
import { useState, useEffect } from 'react'
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import Image from 'next/image'
import AnimalButton from './AnimalButton'
import { animalDataType } from './ifelsetypes'
import Restart from "./Restart";


export default function AnimalContainer({ changeAnimal, initialAnimalData, setRestart }: { changeAnimal: number, initialAnimalData: [] | animalDataType[], setRestart: (input: boolean) => void }) {
    const [source, setSource] = useState('/animalimages/questionmark.webp')
    const [animalId, setAnimalId] = useState('')
    const [animalData, setAnimalData] = useState(initialAnimalData)
    const [animalName, setAnimalName] = useState('')
    const [shouldGenerateAnimal, setShouldGenerateAnimal] = useState(false)


    let copyInitaldata = [...initialAnimalData]

    useEffect(() => {
        setAnimalData(initialAnimalData)
        setShouldGenerateAnimal(true)
    }, [initialAnimalData])

    useEffect(() => {
        if (shouldGenerateAnimal) {
            generateAnimal()
            setShouldGenerateAnimal(false)
        }
    }, [shouldGenerateAnimal]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const newAnimalData = animalData.filter((val) => val.label != animalId)

        if (newAnimalData.length === 0) {
            alert("YOU WIN YOU AWESOME PERSON")
            //setAnimalData(initialAnimalData)
            setRestart(true)
            return
        }
        let index = Math.floor(Math.random() * newAnimalData.length)
        setSource(newAnimalData[index].image)
        setAnimalId(newAnimalData[index].label)
        setAnimalName(newAnimalData[index].animal)


        setAnimalData(newAnimalData)
    }, [changeAnimal]) // eslint-disable-line react-hooks/exhaustive-deps

    function generateAnimal() {
        let index = Math.floor(Math.random() * animalData.length)
        setSource(animalData[index].image)

        setAnimalId(animalData[index].label)
        setAnimalName(animalData[index].animal)
        setAnimalData(animalData)
    }


    return (
        <div>
            <Animal source={source} id={animalId} name={animalName} />
            <AnimalButton onClick={generateAnimal} />
        </div>
    )
}
function Animal({ source, id, name }: { source: string, id: string, name: string }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: id,
    });
    const style = {
        // Outputs `translate3d(x, y, 0)`
        transform: CSS.Translate.toString(transform),
    };

    return (
        <div className="w-24" ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <h2>{name}</h2>
            <Image className='h-24 w-24' src={source} alt="Picture of the animal" width={150} height={150} />
        </div>
    )
}

