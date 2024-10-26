import Image from "next/image";
import watch from "@/app/image/watch.png"
import Ipad1 from "@/app/image/ipad1.png"
import Samsung from "@/app/image/samsung.png"
import Macbook from "@/app/image/Macbook 1.png"

export default function SecondBanners(){
    return(
        <>
        <div className="w-[100%] h-[640px] flex flex-row">
            {/* card one */}
            <div className="w-[340px] h-[640px] px-[18px] py-[56px] flex flex-col">
                <div className="w-[296px] h-[327px] justify-items-center">
                    <Image src={watch} alt=""/>
                </div>

                <div className="w-[296px] h-[208px] flex flex-col gap-4">
                    <h1 className="font-light text-[33px] leading-10">Popular Products</h1>
                    <p className="font-medium text-sm leading-6 text-[#909090]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                    <button className="w-[191px] h-[56px] py-4 px-12 font-medium text-base border-2 border-black rounded-md">Shop Now</button>
                </div>
            </div>

             {/* card two */}
             <div className="w-[340px] h-[640px] px-[18px] py-[56px] flex flex-col bg-[#F9F9F9]">
                <div className="w-[296px] h-[327px] justify-items-center">
                    <Image src={Ipad1} alt=""/>
                </div>

                <div className="w-[296px] h-[208px] flex flex-col gap-4">
                    <h1 className="font-light text-[33px] leading-10">Ipad Pro</h1>
                    <p className="font-medium text-sm leading-6 text-[#909090]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                    <button className="w-[191px] h-[56px] py-4 px-12 font-medium text-base border-2 border-black rounded-md">Shop Now</button>
                </div>
            </div>
            
             {/* card three */}
             <div className=" w-[340px] h-[640px] px-[18px] py-[56px] flex flex-col bg-[#EAEAEA]">
                <div className="w-[296px] h-[327px] justify-items-center">
                    <Image src={Samsung} alt=""/>
                </div>

                <div className="w-[296px] h-[208px] flex flex-col gap-4">
                    <h1 className="font-light text-[33px] leading-10">Samsung Galaxy</h1>
                    <p className="font-medium text-sm leading-6 text-[#909090]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                    <button className="w-[191px] h-[56px] py-4 px-12 font-medium text-base border-2 border-black rounded-md">Shop Now</button>
                </div>
            </div>

             {/* card four */}
             <div className="w-[340px] h-[640px] px-[18px] py-[56px] flex flex-col bg-[#2C2C2C]">
                <div className=" w-[296px] h-[327px] justify-items-center">
                    <Image src={Macbook} alt=""/>
                </div>

                <div className="w-[296px] h-[208px] flex flex-col gap-4">
                    <h1 className="font-light text-[33px] leading-10 text-[#FFFFFF]">Macbook Pro</h1>
                    <p className="font-medium text-sm leading-6 text-[#909090]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                    <button className="w-[191px] h-[56px] py-4 px-12 font-medium text-base border-2 border-white rounded-md text-[#FFFFFF]">Shop Now</button>
                </div>
            </div>
        </div>
        </>
    )
}