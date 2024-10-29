import { CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer(){
    return(
        <>
    <div className="w-[auto] h-[504px] bg-black pt-24 px-20">
      <div className="flex w-[1120px] h-[256px] gap-5">
        <div className="w-[497px] h-[256px]">
          <h2 className="text-white font-bold">Cyber</h2>
          <p className="text-white font-normal leading-relaxed text-sm">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>
        <div className=" flex w-[623px] h-[266px]">
          <div className="w-[295.5px] h-[256px]">
            <h2 className="text-white font-bold">Services</h2>
            <ul className="font-normal text-[#CFCFCF] text-sm leading-8 gap-2">
              <li>Bonus program</li>
              <li>Gift cards</li>
              <li>Credit and payment</li>
              <li>Service contracts</li>
              <li>Non-cash account</li>
              <li>Payment</li>
            </ul>
          </div>
          <div className="w-[295.5px] h-[256px]">
            <h2 className="text-white font-bold">Assistance to the buyer</h2>
            <ul className="font-normal text-[#CFCFCF] text-sm leading-8 gap-2">
              <li>Find an order</li>
              <li>Terms of delivery</li>
              <li>Exchange and return of goods</li>
              <li>Gurantee</li>
              <li>Frequently asked questions</li>
              <li>Terms of use of the site</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex gap-6">
      <Link href={"https://twitter.com/login"}><CiTwitter className="text-white" size={30}/></Link>
      <Link href={"https://facebook.com/Wajii10"}><FaFacebook className="text-white" size={30}/></Link>
      <Link href={"https://www.linkedin.com/in/wajahat-ali-3189862b4"}><CiLinkedin className="text-white" size={30}/></Link>
      <Link href={"https://github.com/WajahatAli3218664"}><FaGithub className="text-white" size={30}/></Link>
      </div>
    </div>
        </>       
    )
}