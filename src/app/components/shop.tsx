"use client"

// import { men, women } from "../data/posters"
import ProductCard from "./productCard"
import GenderToggler from "./genderToggler"
import { useState } from "react"
import { useDeviceStore } from "../hooks/useDeviceStore"
import { ChevronUp, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function Shop() {
    const [currentGender, setCurrentGender] = useState("men")
    const isMobile = useDeviceStore((state) => state.isMobile)
    const [showMore, setShowMore] = useState(false)
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
                 {Array.from({ length: 10 }).map((_, i) => {
                    if(i < 4 || showMore) {
                        return( 
                            <Link href={`/product/${currentGender}/${i}`}>
                                <ProductCard key={i} i={i} currentGender={currentGender} />
                            </Link>
                        )
                    }
                 })}

                    <div key="show-more" onClick={() => {setShowMore(!showMore)}} className="flex flex-col items-center w-full mt-4">
                        {showMore
                            ? <ChevronUp onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}} className="cursor-pointer bg-grey rounded-full size-12 shadow-xl" />
                            : <ChevronDown className="cursor-pointer bg-grey rounded-full size-12 shadow-xl" />
                    }
                        
                        <p className="cursor-pointer font-black mt-2">{showMore ? "Voir Moins D'articles" : "Voir Plus D'articles"}</p>
                    </div>
                 
            </div>
        </>
    )
}