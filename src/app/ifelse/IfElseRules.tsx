'use client'
import { useState, useEffect } from 'react'
import Habitat from './Habitat'
import { animalDataType, attributeObject, attributeTuple, initialDataType, parsedRuleSetObject } from './ifelsetypes'


export default function IfElseRules({ animalData }: { animalData: animalDataType[] | [] }) {
    const [instructions, setInstructions] = useState<[] | React.ReactNode[]>([])

    useEffect(() => {

        let animalDataCopy = [...animalData]
        let count = 0
        let ruleValues = []
        while (animalDataCopy.length > 0) {
            const attributeVals: attributeObject = {}
            animalDataCopy.forEach((animal) => {

                let combinations = [
                    { color: animal.color, food: animal.food },
                    { color: animal.color, grouping: animal.grouping },
                    { grouping: animal.grouping, food: animal.food },
                    { grouping: animal.grouping, food: animal.food, color: animal.color },
                    { color: animal.color },
                    { grouping: animal.grouping },
                    { food: animal.food },
                    { animal: animal.animal }
                ]

                combinations.forEach((combination) => {
                    let comboString = JSON.stringify(combination)
                    if (!attributeVals[comboString]) attributeVals[comboString] = new Set()
                    attributeVals[comboString].add(animal.label)
                })
            })

            const objectArray: attributeTuple[] = Object.keys(attributeVals).map((key) => [key, attributeVals[key]]);
            const filtered = objectArray.filter((currentVal) => currentVal[1].size === 1)
            const ruleSet = filtered[0]


            const parsedRuleSet: parsedRuleSetObject = JSON.parse(ruleSet[0])
            ruleValues.push([JSON.parse(ruleSet[0]), Array.from(ruleSet[1])[0]])


            animalDataCopy = animalDataCopy.filter((currentAnimal) => {
                let shouldFilter = true
                for (const property in parsedRuleSet) {
                    const key = property as keyof parsedRuleSetObject;
                    if (currentAnimal[key] != parsedRuleSet[key]) shouldFilter = false
                }
                return !shouldFilter
            })
        }

        const updatedInstructions = ruleValues.slice(0, ruleValues.length - 1).map((value, index) => {
            let ruleString = ""
            let ruleStringParts = []
            const attributes = value[0]
            const habitat = value[1]


            for (const property in attributes) {
                ruleStringParts.push(` ${property} is ${attributes[property]} `)
            }
            ruleString = ruleStringParts.join(" and ")
            ruleString += ` then habitat is ${habitat}`

            let elseif = index == 0 ? <span className='text-green-700'>if </span> : <span className='text-green-700'>else if</span>

            return <li key={index}>{elseif}{ruleString}</li>
        })

        updatedInstructions.push(
            <li key={ruleValues.length}><span className='text-green-700'>else</span> the habitat is {ruleValues[ruleValues.length - 1][1]}</li>
        )

        setInstructions(updatedInstructions)

    }, [animalData])

    return (
        <div className='w-3/6 pl-14 bg-gray-200 rounded-lg p-6 text-left text-black'>
            <p className='font-bold mb-2'>Animal Rules</p>
            <ul className='list-disc ml-6 space-y-1'>
                {instructions}
            </ul>

        </div>
    )
}