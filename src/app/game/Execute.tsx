'use client'

export default function Execute({ tempInstructions, instructions, setInstructions }) {
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
