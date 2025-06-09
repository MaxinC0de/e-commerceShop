import { motion } from "framer-motion"
import { useState } from "react"
import { Gender } from "../types"
import { useDeviceStore } from "../hooks/useDeviceStore"

export default function GenderToggler({ currentGender, setCurrentGender } : Gender) {
    const [isAnimated, setIsAnimated] = useState(false)
    const isMobile = useDeviceStore((state) => state.isMobile)
    const xValue = isAnimated && currentGender === "women" ? (isMobile ? 105 : 120) : 0
    return(
        <div className="relative bg-[#f2f2f2] rounded-full flex items-center">
            <motion.div 
                className="absolute bg-[#a5a5a5] w-[50%] h-full rounded-full top-0 z-10"
                animate={{ x: xValue }}
                transition={{ stiffness: 100 }}
            >
            </motion.div>
            <button 
                onClick={() => { setCurrentGender("men"); setIsAnimated(true) }}
                className="bg-[#f2f2f2] rounded-2xl px-8 md:px-9 py-0.5 md:py-2.5"
            ><p className="relative z-40 text-xs md:text-base">HOMME</p>
            </button>
            <button 
                onClick={() => { setCurrentGender("women"); setIsAnimated(true) }}
                className="bg-[#f2f2f2] px-8 md:px-9 py-0.5 md:py-2.5 rounded-full"
            ><p className="relative z-40 text-xs md:text-base">FEMME</p>
            </button>
        </div>
    )
}