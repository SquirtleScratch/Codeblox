'use client'

import { useState, useEffect } from 'react'

export default function Up({tempInstructions}) {
    const [spaces, setSpaces] = useState(0)

    function updateSpaces(spaceValue: String) {
        setSpaces(Number(spaceValue))
        tempInstructions.push({ x: 0, y: -Number(spaceValue) })
    }

    return (
        <>
            Move Up <input className='text-black' type='number' value={spaces} onChange={(e) => updateSpaces(e.target.value)} />spaces
        </>
    )

}