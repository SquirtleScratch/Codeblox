'use client'
import { useState, useEffect } from 'react'
import Habitat from './Habitat'
import { animalDataType, initialDataType } from './ifelsetypes'


export default function HabitatsContainer({ initialHabitatData }: { initialHabitatData: initialDataType[] }) {

    let habitats = initialHabitatData.map((card) => {
        return <Habitat key={card.label} label={card.label} image={card.image} id={card.label}></Habitat>
    })

    //let className = `grid grid-cols-${habitatData.length}`
    let className = `grid grid-cols-5 grid-rows-1 gap-3`

    return (
        <div className={className}>
            {habitats}
        </div>
    )
}