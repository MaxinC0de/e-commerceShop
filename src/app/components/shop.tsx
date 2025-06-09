"use client"

// import { men, women } from "../data/posters"
import ProductCard from "./productCard"
import GenderToggler from "./genderToggler"
import { useState } from "react"

export default function Shop() {
    const [currentGender, setCurrentGender] = useState("men")
    return(
        <>
            <div className="flex justify-between p-[2vw]">
                <h2 className="font-black">NOTRE <br /> COLLECTION</h2>
                <GenderToggler currentGender={currentGender} setCurrentGender={setCurrentGender} />
            </div>
            <div className="flex flex-wrap gap-y-6 justify-between p-[2vw]">
                 {Array.from({ length: 6 }).map((_, i) => (
                    <ProductCard key={i} currentGender={currentGender} />
                 ))}
            </div>
        </>
    )
}