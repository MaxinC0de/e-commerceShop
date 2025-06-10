"use client"

import Image from "next/image"
import { ZoomModalProps } from "../../../types"

export default function ZoomModal({ currentGender, srcIndex, product, setIsZoomed } : ZoomModalProps) {
    return(
        <>
            <div onClick={() => {setIsZoomed(false)}} className="fixed top-0 left-0 bg-black opacity-70 z-80 w-screen h-screen"></div>
                <div className="w-[90vw] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100">
                    <Image 
                        src={currentGender[product]?.src[srcIndex]}
                        width={700}
                        height={300}
                        alt=""
                    />
                </div>
        </>
    )
}