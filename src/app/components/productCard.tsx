"use client"

import { Gender } from "../types"
import { men, women } from "../data/posters"
import Image from "next/image"
import { useDeviceStore } from "../hooks/useDeviceStore"

export default function ProductCard({ currentGender }: Gender) {
    const isMobile = useDeviceStore((state) => state.isMobile)
    return(
        <div 
            className={`
                shadow-xl rounded-br-2xl rounded-bl-2xl
                ${isMobile ? "w-[42vw]" : "w-[28vw]"}
            `}
        >
            <Image 
                src={currentGender === "men" ? "/images/black-t.png" : "/images/pink-t.webp"} 
                width={700}
                height={300}
                layout="responsive"
                className=""
                alt="" 
            />
            <div className="flex justify-between p-4">
                <p className="text-sm">{currentGender === "men" ? men.title : women.title}</p>
                <p className="text-sm font-extralight">{currentGender === "men" ? men.price : women.price} €</p>
            </div>
        </div>
    )
}