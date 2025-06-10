"use client"

import Nav from "../../../components/nav"
import { useParams } from "next/navigation"
import { men, women } from "../../../data/tees"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useDeviceStore } from "../../../hooks/useDeviceStore"
import { CircleChevronLeft, CircleChevronRight, Maximize2 } from "lucide-react"

export default function Page() {
    const isMobile = useDeviceStore((state) => state.isMobile)
    const [currentGender, setGender] = useState("")
    const { gender, id } = useParams()
    const handleGender = () => {
        gender === "men" 
        ? setGender(men) 
        : setGender(women)
    }

    useEffect(() => (
        handleGender()
    ), [gender])

    const product = parseFloat(id)

    const [srcIndex, setSrcIndex] = useState(0)

    const next = () => {
        setSrcIndex((prev) => (prev + 1) % 2)
        if (srcIndex > 1) { setSrcIndex(0) }
    }

    const previous = () => {
        setSrcIndex((prev) => (prev - 1 + 2) % 2)
    }

    const [isZoomed, setIsZoomed] = useState(false)

    return(
        <>
            <Nav />
            <div className={`${isMobile ? "px-[5vw]" : "px-2vw"} flex flex-col justify-center items-center`}>
                <div className="w-[90vw] relative disable-cursor">
                    <button onClick={() => {setIsZoomed(!isZoomed)}} className="absolute top-5 right-5 cursor-pointer"><Maximize2 className="text-white" /></button>
                    <Image 
                        src={currentGender[product]?.src[srcIndex]}
                        className="w-[100%] h-auto rounded-2xl"
                        width={700}
                        height={300}
                        alt=""
                    />
                    {isZoomed && 
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
                    }
                    {!isZoomed && 
                        <>
                            <button className="absolute cursor-pointer left-2 top-1/2 -translate-y-1/2" onClick={previous}><CircleChevronLeft className="size-8 text-white " /></button>
                            <button className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2" onClick={next}><CircleChevronRight className="size-8 text-white" /></button>
                        </>
                    }
                </div>
            
                <h2>{currentGender[product]?.title}</h2>
                <button className="bg-black px-6 py-1.5 text-white cursor-pointer rounded-full w-[90vw]">AJOUTER AU PANIER</button>
            </div>
        </>
    )
}