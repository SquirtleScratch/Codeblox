'use client'
import { useState, useEffect } from 'react'

export default function AnimalButton({ onClick }: { onClick: () => void }) {
    return (
        <button onClick={onClick} className='bg-yellow-500' >Change Animal</button>
    )
}