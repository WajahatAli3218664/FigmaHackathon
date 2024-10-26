import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import iphone from "@/app/image/Iphone 14 pro.png"
import camera from "@/app/image/camera.png"
import appleWatch from "@/app/image/apple watch.png"
import airpods from "@/app/image/airpods.png"
import sumsangWatch from "@/app/image/sumsang watch.png"
import galaxy from "@/app/image/galaxy z.png"
import buds from "@/app/image/buds.png"
import ipad from "@/app/image/ipads.png"

export default function Products(){
    return(
        <>
        <div className="h-[1056px] bg-[#FFFFFF] px-[160px] py-[56px] flex flex-col gap-8">
            <div className="h-[33px] w-[1120px] text-[18px] leading-8 ">
                <ul className="list-none flex gap-8">
                <li className="underline font-medium">New Arrival</li>
                <li className="text-[#8B8B8B]">Bestseller</li>
                <li className="text-[#8B8B8B]">Featured Products</li>
                </ul>
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
                        <p className="text-[16px] font-medium text-center text-[#000000]">Apple iPhone 14 Pro Max 128GB Deep Purple</p>
                        <h1 className="text-[24px] tracking-[3%] font-semibold">$900</h1>
                        <button className="bg-black text-white h-[48px] w-[166px] rounded-lg mt-4">Buy Now</button>
                    </div>
                </div>

                {/* card two */}
                <div className=" bg-[#F6F6F6] w-[268px] h-[432px] py-6 px-4 justify-items-center">
                    <div className=" w-[236px] h-[32px]">
                        <CiHeart size={30} className="absolute left-[665px] text-[#909090]"/>
                    </div>
                    <Image src={camera} alt="" className="mt-2"/>
                    <div className=" w-[236px] h-[160px] justify-items-center px-5 my-3">
                        <p className="text-[16px] font-medium text-center text-[#000000]">Blackmagic Pocket Cinema Camera 6k</p>
                        <h1 className="text-[24px] tracking-[3%] font-semibold">$2535</h1>
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
                        <p className="text-[16px] font-medium text-center text-[#000000]">Apple iPhone 14 Pro Max 128GB Deep Purple</p>
                        <h1 className="text-[24px] tracking-[3%] font-semibold">$399</h1>
                        <button className="bg-black text-white h-[48px] w-[166px] rounded-lg mt-4">Buy Now</button>
                    </div>
                </div>
                
                {/* card four */}
                <div className=" bg-[#F6F6F6] w-[268px] h-[432px] py-6 px-4 justify-items-center">
                    <div className=" w-[236px] h-[32px]">
                        <CiHeart size={30} className="absolute left-[1225px] text-[#909090]"/>
                    </div>
                    <Image src={airpods} alt="" className="mt-2"/>
                    <div className=" w-[236px] h-[160px] justify-items-center px-5 my-3">
                        <p className="text-[16px] font-medium text-center text-[#000000]">AirPods Max Silver
                        Starlight Aluminium </p>
                        <h1 className="text-[24px] tracking-[3%] font-semibold">$549</h1>
                        <button className="bg-black text-white h-[48px] w-[166px] rounded-lg mt-4">Buy Now</button>
                    </div>
                </div>
                </div>

                {/* row two div */}
                <div className="flex flex-row gap-3 justify-between">
                {/* card one */}
                <div className=" bg-[#F6F6F6] w-[268px] h-[432px] py-6 px-4 justify-items-center">
                    <div className=" w-[236px] h-[32px]">
                        <CiHeart size={30} className="absolute left-96 text-[#909090]"/>
                    </div>
                    <Image src={sumsangWatch} alt="" className="mt-2"/>
                    <div className=" w-[236px] h-[160px] justify-items-center px-5 my-3">
                        <p className="text-[16px] font-medium text-center text-[#000000]">Samsung Galaxy Watch6 Classic 47mm Black</p>
                        <h1 className="text-[24px] tracking-[3%] font-semibold">$369</h1>
                        <button className="bg-black text-white h-[48px] w-[166px] rounded-lg mt-4">Buy Now</button>
                    </div>
                </div>

                {/* card two */}
                <div className=" bg-[#F6F6F6] w-[268px] h-[432px] py-6 px-4 justify-items-center">
                    <div className=" w-[236px] h-[32px]">
                        <FaHeart size={30} className="absolute left-[665px] text-red-600"/>
                    </div>
                    <Image src={galaxy} alt="" className="mt-2"/>
                    <div className=" w-[236px] h-[160px] justify-items-center px-5 my-3">
                        <p className="text-[16px] font-medium text-center text-[#000000]">Galaxy Z Fold5 Unlocked | 256GB | Phantom Black</p>
                        <h1 className="text-[24px] tracking-[3%] font-semibold">$1799</h1>
                        <button className="bg-black text-white h-[48px] w-[166px] rounded-lg mt-4">Buy Now</button>
                    </div>
                </div>

                {/* card three */}
                <div className=" bg-[#F6F6F6] w-[268px] h-[432px] py-6 px-4 justify-items-center">
                    <div className=" w-[236px] h-[32px]">
                        <CiHeart size={30} className="absolute left-[945px] text-[#909090]"/>
                    </div>
                    <Image src={buds} alt="" className="mt-2"/>
                    <div className=" w-[236px] h-[160px] justify-items-center px-5 my-3">
                        <p className="text-[16px] font-medium text-center text-[#000000]">Galaxy Buds FE
                        Graphite black</p>
                        <h1 className="text-[24px] tracking-[3%] font-semibold">$99.99</h1>
                        <button className="bg-black text-white h-[48px] w-[166px] rounded-lg mt-4">Buy Now</button>
                    </div>
                </div>
                
                {/* card four */}
                <div className=" bg-[#F6F6F6] w-[268px] h-[432px] py-6 px-4 justify-items-center">
                    <div className=" w-[236px] h-[32px]">
                        <CiHeart size={30} className="absolute left-[1225px] text-[#909090]"/>
                    </div>
                    <Image src={ipad} alt="" className="mt-2"/>
                    <div className=" w-[236px] h-[160px] justify-items-center px-5 my-3">
                        <p className="text-[16px] font-medium text-center text-[#000000]">Apple iPad 9 10.2 64GB Wi-Fi Silver (MK2L3) 2021</p>
                        <h1 className="text-[24px] tracking-[3%] font-semibold">$398</h1>
                        <button className="bg-black text-white h-[48px] w-[166px] rounded-lg mt-4">Buy Now</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}