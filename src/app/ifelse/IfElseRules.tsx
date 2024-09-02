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
        while (animalDataCopy.length > 0 && count < 10) {
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
                    { name: animal.name }
                ]

                combinations.forEach((combination) => {
                    let comboString = JSON.stringify(combination)
                    if (!attributeVals[comboString]) attributeVals[comboString] = new Set()
                    attributeVals[comboString].add(animal.label)
                })
            })

            const objectArray: attributeTuple[] = Object.keys(attributeVals).map((key) => [key, attributeVals[key]]);
            const filtered = objectArray.filter((currentVal) => currentVal[1].size === 1)
            console.log(filtered)
            const ruleSet = filtered[0]
            // const ruleKeys = ruleSet.slice(0, ruleSet.length - 1)
            // const ruleKeyNames: string[] = ruleSet[ruleSet.length - 1]

            const parsedRuleSet: parsedRuleSetObject = JSON.parse(ruleSet[0])
            ruleValues.push([JSON.parse(ruleSet[0]), Array.from(ruleSet[1])[0]])
            // console.log('filtered rules: ',filtered)
            console.log('ruleSet: ', ruleSet)
            console.log('before filtering: ', animalDataCopy)

            animalDataCopy = animalDataCopy.filter((currentAnimal) => {
                let shouldFilter = true
                for (const property in parsedRuleSet) {
                    const key = property as keyof parsedRuleSetObject;
                    if (currentAnimal[key] != parsedRuleSet[key]) shouldFilter = false
                }
                return !shouldFilter
            })
            console.log('after filtering: ', animalDataCopy)
            count++
        }

        const updatedInstructions = ruleValues.slice(0, ruleValues.length - 1).map((value, index) => {
            let ruleString = ""
            let ruleStringParts = []
            const attributes = value[0]
            const habitat = value[1]

            for(const property in attributes){
                ruleStringParts.push(` ${property} is ${attributes[property]} `)
            }
            ruleString = ruleStringParts.join(" and ")
            ruleString += ` then habitat is ${habitat}`

            return <li key={index}>{index === 0 && 'if '}{index != 0 && 'else if '}{ruleString}</li>
        })

        updatedInstructions.push(
            <li key={ruleValues.length}>else the habitat is {ruleValues[ruleValues.length - 1][1]}</li>
        )

        setInstructions(updatedInstructions)

        console.log("rules are: ",JSON.stringify(ruleValues))

    }, [animalData])

    return (
        <div>
            <ul>
                {instructions}
            </ul>

        </div>
    )
}