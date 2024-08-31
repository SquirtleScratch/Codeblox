'use client'
import { useState, useEffect } from 'react'

export default function AnimalButton({ onClick }) {
    return <button onClick={onClick}>Generate Animal</button>
}