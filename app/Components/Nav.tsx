"use client";
import { SquarePlus } from "lucide-react"
import { useRouter } from "next/navigation";

export default function Nav() {
    const router = useRouter();
  return (
    <div className="absolute z-100 top-0 left-0 flex justify-between items-center w-full p-3 px-5 bg-black border-b border-b-[#ffb129]">

      <ul className="text-white hidden md:flex items-center gap-3">
        <li onClick={()=> router.push("/")}
        className="hover:text-[#fcc446]">
          Home
        </li>
        <li className="hover:text-[#fcc446]">
          <a href="#">Evenements</a>
      
        </li>
        <li  className="hover:text-[#fcc446]">
         <a href="#">Agenda</a>
        </li>
        <li  className="hover:text-[#fcc446]">
         <a href="#">Contact</a>
        </li>
      </ul>
    <div onClick={()=> router.push("/Create")} className="flex items-center gap-3">
      <div className="text-white hover-scale-110 cursor-pointer p-2 rounded-full hover:bg-[#fcc446] transition-all">
        <SquarePlus size={20} />
      </div>

    </div>
    </div>
  )
}
