'use client'
import { useState, useEffect } from 'react'
import Habitat from './Habitat'



export default function HabitatsContainer() {
    const initialHabitatData = [{ label: 'Arctic', image: '/habitatimages/arctic.png' }, { label: 'Desert', image: '/habitatimages/desert.png' }, { label: 'Jungle', image: '/habitatimages/jungle.png' }, { label: 'Mountain', image: '/habitatimages/mountain.png' }, { label: 'Swamp', image: '/habitatimages/swamp.png' }]
    const [habitatData, setHabitatData] = useState(initialHabitatData)

    let habitats = habitatData.map((card) => {
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