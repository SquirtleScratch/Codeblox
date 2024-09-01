'use client'
import { useState, useEffect } from 'react'
import { useDroppable } from '@dnd-kit/core';
import Image from 'next/image'


export default function Habitat({ label, image, id }: { label: string, image: string, id: string }) {

    const { isOver, setNodeRef, rect } = useDroppable({
        id: id,
    });
    const style = {
        opacity: isOver ? 1 : 0.8,
    };
    useEffect(() => {
        if (isOver) {
            console.log("is over ", label)

        }
    }, [isOver]) // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div>
            <h2 className='text-center'>{label}</h2>
            <div style={style} className='border-2 col-span-1 flex justify-center item-center'>
                <Image ref={setNodeRef} className='h-32 w-32 border-2' src={image} alt="Picture of the habitat" width={200} height={200} />
            </div>
        </div>
    )
}


