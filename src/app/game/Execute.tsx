'use client'

import { instructions } from "./gametypes"

export default function Execute({ tempInstructions, instructions, setInstructions }: {tempInstructions:instructions[], instructions:instructions[], setInstructions:any}) {
    //console.log(instructions)
    function move() {
        console.log('move function')
        console.log('tempInstructions in execute', tempInstructions)
        setInstructions([...tempInstructions])
        console.log(instructions)
    }

    return (
        <button onClick={move}>Execute</button>
    )
}
