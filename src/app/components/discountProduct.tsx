import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import iphone from "@/app/image/Iphone Gold1.png"
import iphone1 from "@/app/image/Iphone Gold.png"
import appleWatch from "@/app/image/apple watch.png"
import airpods from "@/app/image/airpods.png"


export default function DiscountProduct(){
    return(
        <>
        <div className="h-[656px] bg-[#FFFFFF] px-[160px] py-[56px] flex flex-col gap-8">
            <div className="h-[33px] w-[1120px] text-[18px] leading-8 ">
                <p className="font-medium text-2xl">Discounts up to -50</p>
            </div>

            <div className="w-[1120px] h-[880px] flex flex-col gap-2">
                {/* row one div */}
                <div className="flex flex-row gap-3 justify-between ">
                {/* card one */}
                <div className=" bg-[#F6F6F6] w-[268px] h-[432px] py-6 px-4 justify-items-center">
                    <div className=" w-[236px] h-[32px]">
                        <CiHeart size={30} className="absolute left-96 text-[#909090]"/>
                    </div>
                    <Image src={iphone} alt="" className="mt-2"/>
                    <div className="w-[236px] h-[160px] justify-items-center px-5 my-3">
                        <p className="text-[16px] font-medium text-center text-[#000000]">Apple iPhone 14 Pro 512GB Gold (MQ233)</p>
                        <h1 className="text-[24px] tracking-[3%] font-semibold">$1437</h1>
                        <button className="bg-black text-white h-[48px] w-[166px] rounded-lg mt-4">Buy Now</button>
                    </div>
                </div>

                {/* card two */}
                <div className=" bg-[#F6F6F6] w-[268px] h-[432px] py-6 px-4 justify-items-center">
                    <div className=" w-[236px] h-[32px]">
                        <CiHeart size={30} className="absolute left-[665px] text-[#909090]"/>
                    </div>
                    <Image src={airpods} alt="" className="mt-2"/>
                    <div className=" w-[236px] h-[160px] justify-items-center px-5 my-3">
                        <p className="text-[16px] font-medium text-center text-[#000000]">AirPods Max Silver
                        Starlight Aluminium</p>
                        <h1 className="text-[24px] tracking-[3%] font-semibold">$549</h1>
                        <button className="bg-black text-white h-[48px] w-[166px] rounded-lg mt-4">Buy Now</button>
                    </div>
                </div>

                {/* card three */}
                <div className=" bg-[#F6F6F6] w-[268px] h-[432px] py-6 px-4 justify-items-center">
                    <div className=" w-[236px] h-[32px]">
                        <CiHeart size={30} className="absolute left-[945px] text-[#909090]"/>
                    </div>
                    <Image src={appleWatch} alt="" className="mt-2"/>
                    <div className=" w-[236px] h-[160px] justify-items-center px-5 my-3">
                        <p className="text-[16px] font-medium text-center text-[#000000]">Apple Watch Series 9 GPS 41mm Starlight Aluminium </p>
                        <h1 className="text-[24px] tracking-[3%] font-semibold">$399</h1>
                        <button className="bg-black text-white h-[48px] w-[166px] rounded-lg mt-4">Buy Now</button>
                    </div>
                </div>
                
                {/* card four */}
                <div className=" bg-[#F6F6F6] w-[268px] h-[432px] py-6 px-4 justify-items-center">
                    <div className=" w-[236px] h-[32px]">
                        <CiHeart size={30} className="absolute left-[1225px] text-[#909090]"/>
                    </div>
                    <Image src={iphone1} alt="" className="mt-2"/>
                    <div className=" w-[236px] h-[160px] justify-items-center px-5 my-3">
                        <p className="text-[16px] font-medium text-center text-[#000000]">Apple iPhone 14 Pro 1TB Gold (MQ2V3)</p>
                        <h1 className="text-[24px] tracking-[3%] font-semibold">$1499</h1>
                        <button className="bg-black text-white h-[48px] w-[166px] rounded-lg mt-4">Buy Now</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}