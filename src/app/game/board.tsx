'use client'

import { useState, useEffect } from 'react'

export default function Board() {

    const [divClassName, setdivClassName] = useState(`border-white border-2 h-11 w-11`)


    let rows = []
    for (let row = 1; row <= 10; row++) {
        for (let i = 1; i <= 10; i++) {
            let key = `${i} ${row}`
            rows.push(<div className={divClassName} key={key}>{row},{i}</div>)
        }
    }

    return (
        <div className="grid grid-cols-10 h-max w-max">
            {rows}
        </div>
    )
}