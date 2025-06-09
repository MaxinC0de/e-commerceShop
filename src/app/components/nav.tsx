"use client"

import Link from "next/link"
import { useDeviceStore } from "../hooks/useDeviceStore"

export default function Nav() {
    const isMobile = useDeviceStore((state) => state.isMobile)
    return(
        <nav className="flex p-[2vw]">
            <h1 className="font-black">"COMPANY"</h1>
                <div className="ml-auto">
                    <Link className="mr-6 md:mr-12" href="/posters">SE CONNECTER</Link>
                    <Link className="" href="/a-propos">{`PANIER [0]`}</Link>
                </div>
        </nav>
    )
}