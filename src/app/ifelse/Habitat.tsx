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
            <h2 className='text-center'>{isClient ? label : null}</h2>
            <div className='border-2 col-span-1 flex justify-center item-center'>
                {isClient ? <Image className='h-32 w-32 border-2' src={image} alt="Picture of the habitat" width={200} height={200} /> : null}
            </div>
        </div>) : null
    )
}


