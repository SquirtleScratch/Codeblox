'use client'
import { useState, useEffect } from 'react'

export default function Restart ({onClick}) {
    return(
        <div>
            You win!!!
            <button onClick={onClick}>Restart Game</button>
        </div>
    )
}