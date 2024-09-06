'use client'

import { useState, useEffect } from 'react'

const delay = (ms: number | undefined) => new Promise(res => setTimeout(res, ms));

export default function Board({ instructions } : {instructions:any}) {

    const [avatarPosition, setAvatarPosition] = useState({ x: 1, y: 1 })
    const [divClassName, setdivClassName] = useState(`border-white border-2 h-11 w-11`)
    //const [divClassName, setdivClassName] = useState(`border-white border-2 h-11 w-11`)

    let rows = []
    console.log("instructions in board: ", instructions)
    useEffect(() => {
        console.log("in useEffect")
        let newX = avatarPosition.x
        let newY = avatarPosition.y

        instructions.forEach((instruction: { x: number; y: number; }, index: any) => {
            console.log('executing instruction: ', instruction)
            newX += instruction.x
            newY += instruction.y
        })
        setAvatarPosition({ x: newX, y: newY })
        console.log(avatarPosition)
    }, [avatarPosition, instructions])

    useEffect(() => {
        console.log('avatar position use effect: ', avatarPosition)
    }, [avatarPosition])

    for (let row = 1; row <= 10; row++) {
        for (let i = 1; i <= 10; i++) {
            let key = `${i} ${row}`
            let isAvatar = ""
            if (row == avatarPosition.y && i == avatarPosition.x) {
                isAvatar = "X"
            }
            rows.push(<div className={divClassName} key={key}>{isAvatar}</div>)
        }
    }


    return (
        <>
            <div className="grid grid-cols-10 h-max w-max">
                {rows}
            </div>
        </>
    )
}