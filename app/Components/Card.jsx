import { MapPin, CalendarDays } from "lucide-react";
import Image from "next/image";

export default function Card({ data }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-md cursor-pointer border hover:translate-y-[-10px] transition-all hover:border-[#fcc446]">
      <Image
        alt={data.title}
        src={data.image}
        width={300}
        height={400}
        className="w-full h-[400px] rounded-md object-cover"
      />
      <h2 className="text-xl font-bold mt-2">{data.title}</h2>

      <div className="flex items-center gap-2 text-[#fcc446] text-[14px] my-2">
        <MapPin />
        <span>{data.lieu}</span>
      </div>
      <div className="flex items-center gap-2 text-[#fcc446] text-[14px] my-2">
        <CalendarDays />
        <span>{data.session}</span>
      </div>
      <p className="text-gey-700">{data.desc}</p>
    </div>
  );
}
