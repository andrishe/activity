import React from "react";
import { X } from "lucide-react";

export default function Toast({ message = "", closeToast }) {
  return (
    <div className="duration-500 transition-all ease-in-out bg-[#fcc446] flex justify-between items-center p-4 rounded-md">
      <h2>{message}</h2>
      <button className="ml-5 text-white text-[22px]" onClick={closeToast}>
        <X />
      </button>
    </div>
  );
}
