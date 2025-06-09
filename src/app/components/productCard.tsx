"use client"

import { Gender } from "../types"
import { men, women } from "../data/posters"
import Image from "next/image"

export default function ProductCard({ currentGender }: Gender) {
    return(
        <div className="w-[28vw] shadow-xl rounded-br-2xl rounded-bl-2xl">
            <Image 
                src={currentGender === "men" ? "/images/black-t.png" : "/images/pink-t.webp"} 
                width={700}
                height={300}
                layout="responsive"
                className=""
                alt="" 
            />
            <div className="flex justify-between p-4">
                <p>{currentGender === "men" ? men.title : women.title}</p>
                <p className="font-extralight">{currentGender === "men" ? men.price : women.price} €</p>
            </div>
        </div>
    )
}