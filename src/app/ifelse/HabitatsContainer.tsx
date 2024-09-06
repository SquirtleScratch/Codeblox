'use client'
import { useState, useEffect } from 'react'
import Habitat from './Habitat'
import { animalDataType, initialDataType } from './ifelsetypes'


export default function HabitatsContainer({ initialHabitatData }: { initialHabitatData: initialDataType[] }) {

    let habitats = initialHabitatData.map((card) => {
        return <Habitat key={card.label} label={card.label} image={card.image} id={card.label}></Habitat>
    })

    let className = ' bg-gray-100 p-8 grid grid-cols-5 gap-6 mb-8'
    return (
        <div className={className}>
            {habitats}
        </div>
    )
}