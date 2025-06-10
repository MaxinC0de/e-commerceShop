"use client"

import Nav from "../../../components/nav"
import ZoomModal from "./zoomModal"
import ImageViewer from "./imageViewer"
import { useParams } from "next/navigation"
import { men, women } from "../../../data/tees"
import { useEffect, useState } from "react"
import { useDeviceStore } from "../../../hooks/useDeviceStore"
import { GenderProducts, SharedProps } from "../../../types"

export default function Page() {
    const isMobile = useDeviceStore((state) => state.isMobile)
    const [currentGender, setGender] = useState<GenderProducts>([])
    const [srcIndex, setSrcIndex] = useState(0)
    const [isZoomed, setIsZoomed] = useState(false)
    const { gender, id } : { gender: any, id: string } = useParams()
    const product = parseFloat(id)
    const sharedProps: SharedProps = { currentGender, srcIndex, product, isZoomed, setIsZoomed }
    useEffect(() => {
        if (gender === "men") {
            setGender(men)
        } else if (gender === "women") {
            setGender(women)
        }
    }, [gender])
    return(
        <>
            <Nav />
            <div className={`${isMobile ? "px-[5vw]" : "px-2vw"} flex flex-col justify-center items-center`}>
                <ImageViewer {...sharedProps} setSrcIndex={setSrcIndex} />
                {isZoomed && <ZoomModal {...sharedProps} />}
                <h2>{currentGender[product]?.title}</h2>
                <button className="bg-black px-6 py-1.5 text-white cursor-pointer rounded-full w-[90vw]">AJOUTER AU PANIER</button>
            </div>
        </>
    )
}