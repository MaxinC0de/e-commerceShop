"use client"

import Link from "next/link"
import Image from "next/image"
import { useDeviceStore } from "../hooks/useDeviceStore"

export default function Banner() {
    const isMobile = useDeviceStore((state) => state.isMobile)
    console.log(isMobile)
    return(
        <div className="flex justify-center relative h-120 w-full">
            <Image 
                src="/images/banner.png" 
                alt=""
                width={700}
                height={300}
                layout="responsive"
            />
            <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image 
                    src="/images/company.png" 
                    width={800}
                    height={300}
                    layout="responsive"    
                    className="max-w-[80vw]"
                    alt="" 
                />
                <div className="flex gap-x-[4vw] justify-center mt-6">
                    <Link href="/collections" className="text-white bg-black p-2 h-max-12 rounded-full font-black px-5 cursor-pointer">COLLECTIONS</Link>
                    <Link href="/shopping" className="bg-white p-2 h-max-12 rounded-full font-black px-5 cursor-pointer">SHOP NOW</Link>
                </div>
            </div>
            
        </div>
    )
}