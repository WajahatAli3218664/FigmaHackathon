import Image from "next/image";
import IPhone from "@/app/image/Iphone Image.png"

export default function Banner(){
    return(
        <>
        <div className="w-[100%] h-[620px] px-[160px] bg-[#211C24] flex ">
            <div className="w-[714px] h-[256px] flex flex-col gap-6 text-left relative top-40">
                <p className="text-[#FFFFFF] leading-8 text-[25px] font-semibold opacity-40 h-[32px]">Pro.Beyond.</p>
                <h1 className="h-[72px] font-extralight text-[96px] text-[#FFFFFF] leading-[72px] tracking-tight">IPhone 14 <span className="font-bold">Pro</span></h1>
                <p className="h-[24px] text-[18px] leading-6 font-medium text-[#909090]">Created to change everything for the better. For everyoone</p>
                <button className="border-2 border-white w-[191px] h-[56px] px-14 py-4 rounded-md text-white">Shop Now</button>
            </div>
            <div>
                <Image src={IPhone} alt=""/>
            </div>
            
        </div>
        </>
    )
}