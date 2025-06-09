import Nav from "../components/nav";

export default function Page() {
    return(
        <>
          <Nav />  
          <div className="w-[95vw] h-[0.8px] opacity-92 bg-black flex mx-auto"></div>
          <div className="flex justify-center mt-4">
            <p className="font-black whitespace-pre">{`SHOPPING CART   >`}</p>
            <p className="font-black text-[#aeaeae] whitespace-pre">{`   CHECKOUT DETAILS   >   SHOPPING CART`}</p>
          </div>
        </>
    )
}