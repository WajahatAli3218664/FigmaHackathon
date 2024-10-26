import Image from "next/image";
import tab1 from "@/app/image/tab1.png";
import tab2 from "@/app/image/tab2.png";
import flodlaptop from "@/app/image/foldLaptop.png"
import Iphoneside from "@/app/image/IphoneSide.png"
import WatchHalf from "@/app/image/watchhalf.png"

export default function ThirdBanner() {
  return (
    <>
      <div className="flex w-[auto] h-[632px] bg-gradient-to-r from-neutral-600 to-neutral-900">
        <div className="w-[444px] h-[632px]">
          <div>
            <Image
              src={tab2}
              alt="pic"
              className=" pt-5 pl-10 rotate-3 -mb-8 w-[280px] h-[250px]"
            />
          </div>
          <div >
            <Image
              src={tab1}
              alt="pic"
              className="origin-bottom -ml-10 -rotate-1 w-[360px] h-[400px] "
            />
          </div>
          </div>
          <div >
            <Image
              src={flodlaptop}
              alt="pic"
              className=" -rotate-[45deg] -ml-[120px] -mt-14 w-[350px] h-[250px]"
            />
          </div>
          
        

        <div className="w-[553px] h-[200px] pt-52  leading-8">
          <h1 className="text-6xl text-white font-sans font-thin">
            Big Summer <span className="font-bold">Sale</span>
          </h1>
          <p className="w-[553px] text-[#787878] font-normal leading-9 text-base px-10 ">
            Commodo fames vitae vitae leo mauris in. Eu consequat
          </p>
          <div className="px-32 py-8">
            <button
              className="border border-white w-[188px] h-[48px] text-white rounded"
              type="submit"
            >
              Shop Now
            </button>
          </div>
        </div>

        <div className="w-[500px] h-[632px]">
          <div>
            <Image
              src={Iphoneside}
              alt="pic"
              className="overflow-hidden pt-3 -rotate-45 ml-48  w-[200px] h-[400px]"
            />
          </div>
          <div>
            <Image
              src={WatchHalf}
              alt="pic"
              className="w-[800px] -mt-24 h-[327px]"
            />
          </div>
        </div>
      </div>
    </>
  )
}