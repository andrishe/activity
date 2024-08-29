"use client";
import { SquarePlus } from "lucide-react"
import { useRouter } from "next/navigation";

export default function Nav() {
    const router = useRouter();
  return (
    <div className="absolute z-100 top-0 left-0 flex justify-between items-center w-full p-3 px-5 bg-black border-b border-b-[#ffb129]">
      <SquarePlus />
    </div>
  )
}
