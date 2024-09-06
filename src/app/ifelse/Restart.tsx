'use client'
import { useState, useEffect } from 'react'

export default function Restart({ onClick }: { onClick: () => void }) {
    return (
        <div className='flex flex-col content-center items-center '>
            <p className='text-3xl font-semibold text-green-800 mb-4'>You win!!!</p>
            <br></br>
            <button onClick={onClick} className='w-36 float-left bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600'>Restart Game</button>
        </div>
    )
}