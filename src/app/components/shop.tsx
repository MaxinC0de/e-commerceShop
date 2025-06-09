"use client"

import { useState } from "react"
// import { men, women } from "../data/posters"
import ProductCard from "./productCard"
import { motion } from "framer-motion"

export default function Shop() {
    const [currentGender, setCurrentGender] = useState("men")
    const [isAnimated, setIsAnimated] = useState(false)
    return(
        <>
            <div className="flex justify-between p-[2vw]">
                <h2 className="font-black">NOTRE COLLECTION</h2>
                <div className="relative bg-[#f2f2f2] rounded-full">
                    <motion.div 
                        className="absolute bg-[#a5a5a5] w-[50%] h-full rounded-full top-0 z-10"
                        animate={{ x: isAnimated === true && currentGender === "women" ? 120 : 0 }}
                        transition={{ stiffness: 100 }}
                    >
                    </motion.div>
                    <button 
                        onClick={() => { setCurrentGender("men"); setIsAnimated(true) }}
                        className="bg-[#f2f2f2] rounded-2xl px-9 py-2.5"
                    ><p className="z-40 relative text-base">HOMME</p>
                    </button>
                    <button 
                        onClick={() => { setCurrentGender("women"); setIsAnimated(true) }}
                        className="bg-[#f2f2f2] px-9 py-2.5 rounded-full"
                    ><p className="relative z-40 text-base">FEMME</p>
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap gap-6 justify-between p-[2vw]">
                 {Array.from({ length: 6 }).map((_, i) => (
                    <ProductCard key={i} currentGender={currentGender} />
                 ))}
            </div>
        </>
    )
}