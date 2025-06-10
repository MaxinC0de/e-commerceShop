"use client"

import Image from "next/image"
import { CircleChevronLeft, CircleChevronRight, Maximize2 } from "lucide-react"
import { ImageViewerProps } from "../../../types"
import { useDeviceStore } from "../../../hooks/useDeviceStore"

export default function ImageViewer({ currentGender, srcIndex, product, isZoomed, setIsZoomed, setSrcIndex } : ImageViewerProps) {
    const isMobile = useDeviceStore((state) => state.isMobile)
    const next = () => { setSrcIndex((prev) => (prev + 1) % 2) }
    const previous = () => { setSrcIndex((prev) => (prev - 1 + 2) % 2) }
    return(
        <div className={`relative disable-cursor ${isMobile ? "w-[90vw]" : "w-[96vw]"}`}>
            <button onClick={() => {setIsZoomed(!isZoomed)}} className="absolute top-5 right-5 cursor-pointer"><Maximize2 className="text-white" /></button>
            <Image 
                src={currentGender[product]?.src[srcIndex]}
                className="w-[100%] h-auto rounded-2xl"
                width={700}
                height={300}
                alt=""
            />
            {!isZoomed && 
                <>
                    <button className="absolute cursor-pointer left-2 top-1/2 -translate-y-1/2" onClick={previous}><CircleChevronLeft className="size-8 text-white " /></button>
                    <button className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2" onClick={next}><CircleChevronRight className="size-8 text-white" /></button>
                </>
            }
        </div>
    )
}