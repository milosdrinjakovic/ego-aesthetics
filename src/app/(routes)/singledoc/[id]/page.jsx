"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import docotors from "@/app/data/doctors.json";

export default function SingleDoc() {
    const formatTextByYear = (text) => {
        return text.replace(/(\d{4})/g, '\n$1');
      };
  const { id } = useParams();

  const doctor = docotors.find((doctor) => doctor.id === parseInt(id));
  console.log(doctor);

  return (
    <div className="bg-zinc-100 min-h-screen flex justify-center">
      <div className="flex mt-44 bg-white p-10  shadow-lg rounded-8xl flex-row  w-3/5">
        <div className="">
          <Image
            src={`/images/doctors/doctor${parseInt(id)}.jpg`}
            className="rounded-tl-5xl rounded-xl  border-goldLogo border-4"
            width="300"
            height="450"
          />
        </div>
        <div className="flex flex-col items-start p-10 w-2/3">
        
          <div className="text-3xl font-bold text-goldLogo space-y-6">
            <p>{(doctor.name.toUpperCase())}</p>
          </div>
          <div className=" italic">
              {(doctor.about).map(el => <p>{el}</p>)}
          </div>
          <div className="">
            <p className="text-2xl mt-4 font-bold text-goldLogo">Specijalizacija:</p>
            <p className="">{doctor.bio}</p>
            <p className="mt-4 text-2xl font-bold text-goldLogo">Edukacija:</p>
            {(doctor.education).map(el => <p className="italic">{el}</p>)}
            
          </div>
          
        </div>
      </div>
    </div>
  );
}
