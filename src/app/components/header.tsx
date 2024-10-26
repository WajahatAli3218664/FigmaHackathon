import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FiUser } from "react-icons/fi";
export default function Header(){
    return(
        <div className="w-[100%] h-[88px] border-[#B5B5B5] bg-white flex flex-row gap-14  border-2 px-[120px] py-[16px]" >
            <h1 className="font-extrabold text-4xl">Cyber</h1>
            <div className="flex w-[372px] h-[56px] bg-[#F5F5F5] px-[16px] py-[16px]">
                <i className="py-1 px-2 text-[#B5B5B5]"><FiSearch/></i>
                <input type="search" placeholder="Search" className="py-2 px-2 rounded-md outline-none focus:border-2 border-indigo-400" />

            </div>
            
           
                <ul className="list-none flex px-[16px] py-[10px] gap-14 text-[#B5B5B5] text-xl text-nowrap">
                    <li className="text-black font-semibold">Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                </ul>

                <ul className="list-none flex px-[16px] py-[16px] gap-6">
                    <li><FaRegHeart/></li>
                    <li><MdOutlineLocalGroceryStore/></li>
                    <li><FiUser/></li>
                </ul>
        </div>
    )
}