'use client'
import { useState, useEffect } from 'react'

export default function AnimalButton({ onClick }: { onClick: () => void }) {
    return (
        <button onClick={onClick} className='float-left bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600' >Change Animal</button>
    )
}