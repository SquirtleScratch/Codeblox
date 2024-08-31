'use client'
import { useState, useEffect } from 'react'
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import Image from 'next/image'

import AnimalButton from './AnimalButton'


export default function AnimalContainer({ changeAnimal }) {
    const [source, setSource] = useState('/animalimages/questionmark.jpg')

    const initialAnimalData = [{ label: 'Desert', image: '/animalimages/camel.png' }, { label: 'Jungle', image: '/animalimages/monkey.jpg' }, { label: 'Arctic', image: '/animalimages/penguin.png' }]

    const [animalId, setAnimalId] = useState('')

    const [animalData, setAnimalData] = useState(initialAnimalData)

    useEffect(() => {
        console.log("trying to get a new animal")
        generateNewAnimal()
    }, [changeAnimal])

    function generateNewAnimal() {
        console.log('animalData pre filtering:', animalData)
        const newAnimalData = animalData.filter((val) => val.label != animalId)
        console.log('animalData post filtering:', newAnimalData)

        if (newAnimalData.length === 0) {
            alert("YOU WIN YOU AWESOME PERSON")
            setAnimalData(initialAnimalData)
            return
        }
        let index = Math.floor(Math.random() * newAnimalData.length)
        setSource(newAnimalData[index].image)
        setAnimalId(newAnimalData[index].label)
        setAnimalData(newAnimalData)
    }

    return (
        <div>
            <AnimalButton onClick={generateNewAnimal} />
            <Animal source={source} id={animalId} />
        </div>
    )
}

function Animal({ source, id }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: id,
    });
    const style = {
        // Outputs `translate3d(x, y, 0)`
        transform: CSS.Translate.toString(transform),
    };


    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <Image src={source} alt="Picture of the animal" width={200} height={200} />
        </div>
    )
}

