'use client'
import { useState, useEffect } from 'react'
import Habitat from './Habitat'



export default function HabitatsContainer() {

    const [habitatData, setHabitatData] = useState([{ label: 'Arctic', image: '/habitatimages/arctic.jpg' }, { label: 'Desert', image: '/habitatimages/desert.png' }, { label: 'Jungle', image: '/habitatimages/jungle.jpeg' }])

    let habitats = habitatData.map((card) => {
        return <Habitat key={card.label} label={card.label} image={card.image} id={card.label}></Habitat>
    })

    //let className = `grid grid-cols-${habitatData.length}`
    let className = `grid grid-cols-3`

    return (
        <div className={className}>
            {habitats}
        </div>
    )
}