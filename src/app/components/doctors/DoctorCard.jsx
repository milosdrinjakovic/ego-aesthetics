import React from 'react'

export default function DoctorCard({doctor}) {
  return (
    <>
    <div className="bg-white rounded-tl-10xl w-3/4 p-16 rounded-br-10xl rounded-tr-4xl rounded-bl-4xl shadow-lg overflow-hidden flex flex-col items-center justify-between">
      <div className="relative  rounded-full flex items-center justify-center mb-4">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="h-44 w-44 rounded-full object-cover object-center"
        />
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-2 font-serif text-rose-500">
          {doctor.name}
        </h3>
        <p className="text-yellow-700 mb-2 text-xl">{doctor.title}</p>
        <p className="text-white bg-goldLogo p-1 w-3/4 mx-auto rounded-xl ">
          Iskustvo: {doctor.experience} godina
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quam
          debitis perferendis, ratione accusantium, dolorum sequi officiis illo
          laudantium eaque obcaecati veniam soluta, libero quia asperiores
          placeat minus tempora porro?
        </p>
      </div>
    </div>
    </>
  )
}
