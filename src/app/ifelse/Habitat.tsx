'use client'
import { useState, useEffect } from 'react'
import { useDroppable } from '@dnd-kit/core';
import Image from 'next/image'


export default function Habitat({ label, image, id }: { label: string, image: string, id: string }) {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const { isOver, setNodeRef, rect } = useDroppable({
        id: id,
    });
    const style = {
        opacity: isOver ? 1 : 0.8,
    };

    return (
        isClient ? (<div style={style} ref={setNodeRef}>
            <h2 className='text-center font-semibold text-black'>{isClient ? label : null}</h2>
            <div className='col-span-1 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center'>
                {isClient ? <Image className='w-32 h-32 object-contain mb-2' src={image} alt="Picture of the habitat" width={200} height={200} /> : null}
            </div>
        </div>) : null
    )
}


