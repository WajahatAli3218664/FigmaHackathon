import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { GiSmartphone } from "react-icons/gi";
import { IoWatchOutline } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { LuGamepad } from "react-icons/lu";

export default function Category(){
    return(
        <>
        <div className="w-[100%] h-[352px] py-20 px-[160px] flex flex-col gap-[32px] bg-[#FAFAFA]">
            <div className="w-[1120px] h-[40px] justify-between flex flex-row">
                <p className="font-medium text-2xl tracking-[1%]">Browse By Category</p>
                <div className="flex flex-row gap-4 py-[3.5px]">
                <FaChevronLeft size={25}/>
                <FaChevronRight size={25}/>
                </div>
            </div>
            <div className="w-[1120px] h-[128px] flex flex-row gap-[31px]">
                {/* card one */}
                <div className="w-[160px] h-[128px] bg-[#EDEDED] justify-items-center py-[24px] px-[52px]">
                    <GiSmartphone size={35}/>
                    <p className="font-medium text-[14px] tracking-[1%]">Phones</p>
                </div>

                 {/* card two */}
                 <div className="w-[160px] h-[128px] bg-[#EDEDED] justify-items-center py-[24px] px-[22px]">
                    <IoWatchOutline size={35}/>
                    <p className="font-medium text-[14px] tracking-[1%]">Smart Watches</p>
                </div>

                 {/* card three */}
                 <div className="w-[160px] h-[128px] bg-[#EDEDED] justify-items-center py-[24px] px-[52px]">
                    <CiCamera size={35}/>
                    <p className="font-medium text-[14px] tracking-[1%]">Cameras</p>
                </div>

                 {/* card four */}
                 <div className="w-[160px] h-[128px] bg-[#EDEDED] justify-items-center py-[24px] px-[52px]">
                    <CiHeadphones size={35}/>
                    <p className="font-medium text-[14px] tracking-[1%]">Headphones</p>
                </div>

                 {/* card five */}
                 <div className="w-[160px] h-[128px] bg-[#EDEDED] justify-items-center py-[24px] px-[52px]">
                    <HiOutlineComputerDesktop size={35}/>
                    <p className="font-medium text-[14px] tracking-[1%]">Computers</p>
                </div>

                 {/* card six */}
                 <div className="w-[160px] h-[128px] bg-[#EDEDED] justify-items-center py-[24px] px-[52px]">
                    <LuGamepad size={35}/>
                    <p className="font-medium text-[14px] tracking-[1%]">Gaming</p>
                </div>
            </div>
        </div>
        </>
    )
}