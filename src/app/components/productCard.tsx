"use client"

import { men, women } from "../data/tees"
import Image from "next/image"
import { useDeviceStore } from "../hooks/useDeviceStore"

type ProductCardProps = { currentGender: string, i: number }

export default function ProductCard({ currentGender, i }: ProductCardProps ) {
    const isMobile = useDeviceStore((state) => state.isMobile)
    return(
        <div 
            className={`
                shadow-xl rounded-br-2xl rounded-bl-2xl
                ${isMobile ? "w-[42vw]" : "w-[28vw]"}
            `}
        >
            <Image 
                src={currentGender === "men" ? men[i].src[0] : women[i].src[0]} 
                width={700}
                height={300}
                layout="responsive"
                className="rounded-tl-2xl rounded-tr-2xl"
                alt="" 
            />
            <div className="flex justify-between p-4">
                <p className="text-sm md:text-base">
                    {currentGender === "men" ? men[i].title : women[i].title}
                </p>
                <p className="text-sm md:text-base font-extralight">
                    {currentGender === "men" ? men[i].price : women[i].price} €
                </p>
            </div>
        </div>
    )
}