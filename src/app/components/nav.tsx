"use client"

import Link from "next/link"
import { useDeviceStore } from "../hooks/useDeviceStore"

export default function Nav() {
    const isMobile = useDeviceStore((state) => state.isMobile)
    return(
        <nav className={`flex
            ${isMobile ? "p-[5vw]" : "p-[2vw]"}
        `}>
            <Link href="/" className="font-black">{`"COMPANY"`}</Link>
                <div className="ml-auto">
                    <Link className="mr-6 md:mr-12" href="/posters">SE CONNECTER</Link>
                    <Link href="/panier">{`PANIER [0]`}</Link>
                </div>
        </nav>
    )
}