'use client'
import { useState, useEffect } from 'react'
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import Image from 'next/image'
import AnimalButton from './AnimalButton'
import { animalDataType } from './ifelsetypes'


export default function AnimalContainer({ changeAnimal, initialAnimalData }: { changeAnimal: number, initialAnimalData: [] | animalDataType[] }) {
    const [source, setSource] = useState('/animalimages/questionmark.webp')
    const [animalId, setAnimalId] = useState('')
    const [animalData, setAnimalData] = useState(initialAnimalData)

    useEffect(() => {
        console.log("trying to get a new animal")
        const newAnimalData = animalData.filter((val) => val.label != animalId)

        if (newAnimalData.length === 0) {
            alert("YOU WIN YOU AWESOME PERSON")
            setAnimalData(initialAnimalData)
            return
        }
        let index = Math.floor(Math.random() * newAnimalData.length)
        setSource(newAnimalData[index].image)
        setAnimalId(newAnimalData[index].label)

        setAnimalData(newAnimalData)
    }, [changeAnimal]) // eslint-disable-line react-hooks/exhaustive-deps

    function generateAnimal() {
        let index = Math.floor(Math.random() * animalData.length)
        setSource(animalData[index].image)

        setAnimalId(animalData[index].label)
        setAnimalData(animalData)
    }

    return (
        <div>
            <Animal source={source} id={animalId} />
            <AnimalButton onClick={generateAnimal} />
        </div>
    )
}

function Animal({ source, id }: { source: string, id: string }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: id,
    });
    const style = {
        // Outputs `translate3d(x, y, 0)`
        transform: CSS.Translate.toString(transform),
    };


    return (
        <div className="w-24" ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <Image className='h-24 w-24' src={source} alt="Picture of the animal" width={150} height={150} />
        </div>
    )
}

