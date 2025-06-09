"use client"

// import { men, women } from "../data/posters"
import ProductCard from "./productCard"
import GenderToggler from "./genderToggler"
import { useState } from "react"
import { useDeviceStore } from "../hooks/useDeviceStore"

export default function Shop() {
    const [currentGender, setCurrentGender] = useState("men")
    const isMobile = useDeviceStore((state) => state.isMobile)
    return(
        <>
            <div className={`flex justify-between
                ${isMobile ? "p-[5vw]" : "p-[2vw]"}    
            `}>
                <h2 className="font-black">NOTRE <br /> COLLECTION</h2>
                <GenderToggler currentGender={currentGender} setCurrentGender={setCurrentGender} />
            </div>
            <div className={`flex flex-wrap gap-y-5 justify-between
                ${isMobile ? "p-[5vw]" : "p-[2vw]"}  
            `}>
                 {Array.from({ length: 6 }).map((_, i) => (
                    <ProductCard key={i} currentGender={currentGender} />
                 ))}
            </div>
        </>
    )
}