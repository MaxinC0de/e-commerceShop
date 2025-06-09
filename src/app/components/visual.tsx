"use client"

import Image from "next/image"
import { useDeviceStore } from "../hooks/useDeviceStore"

export default function Visual() {
    const isMobile = useDeviceStore((state) => state.isMobile)
    if (!isMobile) { return(
        <div className="flex p-[2vw] gap-x-12 justify-center">
            <span className="w-[40vw]">
                <Image 
                    src="/images/visual1.png"
                    width={700}
                    height={300}
                    layout="responsive"
                    alt=""
                />
            </span>
            <div className="flex flex-col">
                <h2 className="font-black text-8xl">{`"SIMPLICITE"`}</h2>
                <p className="text-xl">Discover timeless essentials designed for everyday comfort and effortless style. Our collection focuses on clean lines, quality fabrics, and versatile pieces that fit seamlessly into any wardrobe</p>
                <div className="w-full max-w-[25vw] flex items-center justify-between gap-x-6">
                    <Image 
                        src="/images/visual2.png"
                        width={700}
                        height={300}
                        layout="responsive"
                        alt=""
                    />
                    <p className="text-6xl font-black text-center">COMPANY 2025</p>
                </div>
            </div>
            
        </div>
    )}
}