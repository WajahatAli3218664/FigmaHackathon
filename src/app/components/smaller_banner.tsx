import Image from "next/image";
import PlayStation from "@/app/image/PlayStation.png"
import Hero from "@/app/image/hero.png"
import Mac from "@/app/image/MacBook Pro 14.png"
import img36 from "@/app/image/image 36.png"

export default function SmallerBanner(){
    return(
        <>
        <div className="h-[600px] w-[100%] flex flex-row">
            <div className="flex flex-row flex-wrap w-[800px] ">
                <div className="flex h-[300px]">
                <Image src={PlayStation} alt="" className="h-[280px]"/>
                    <div className="flex flex-col py-[40px] px-[20px]">
                        <h1 className="text-[49px] font-medium leading-2">Playstation 5</h1>
                        <p className="h-[62px] font-medium leading-6 text-[14px] text-[#909090]">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                    </div>
                </div>
                <div className="flex h-[280px] w-[750px] ">
                        <Image src={Hero} alt="" className="h-[280px]"/>
                    <div className="flex flex-col w-[220px] py-[35px] px-[35px]  ml-[30px] ">
                        <h1 className="text-[29px] leading-2 w-[160px]">Apple AirPods <br/><b>Max</b></h1>
                        <p className="w-[160px] font-medium leading-6 text-[14px] text-[#909090]">Computational audio. Listen, it's powerful</p>
                    </div>

                    <div className="flex h-[280px] w-[400px] bg-[#353535]">
                        <Image src={img36} alt="" className="h-[280px]"/>
                        <div className="flex flex-col w-[220px] py-[35px] ml-[30px]">
                             <h1 className="text-[29px] leading-2 w-[160px] text-[#FAFAFA]">Apple Vision <br/><b>Pro</b></h1>
                            <p className="w-[160px] font-medium leading-6 text-[14px] text-[#909090]">An immersive way to experience entertainment.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" flex flex-row w-[50%] bg-[#EDEDED]">
                    <div className="flex flex-col  pl-14 py-32 pr-2 ">
                        <h1 className="text-[49px] font-light leading-9">Macbook</h1>
                        <h1 className="text-[49px] font-bold leading-[56px] ">Air</h1>
                        <p className="h-[72px] font-medium leading-6 text-[14px] text-[#909090]">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                        <button className=" w-[200px] h-[56px] my-4 px-14 py-4 rounded-md text-black font-medium border-2 border-black">Shop Now</button>    
                    </div>
                    <Image src={Mac} alt="" className="py-5"/>
            </div>
        </div>
        </>
    )
}