"use client";

import Form from "../Components/Form";

export default function Page() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="p-6 mt-8 lg:w-[35%] md:w-[50%]">
        <h2 className="text-[30px] font-bold text-[#fcc446]">
          Ajouter un post
        </h2>
        <Form />
      </div>
    </div>
  );
}
