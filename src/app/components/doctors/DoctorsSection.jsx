"use client"
import React from 'react'
import { useState } from 'react';
import DoctorCard from './DoctorCard';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import doctorsData from "@/app/data/doctors.json"



export default function () {
    let data = doctorsData ;
   
  
    return (
      <div className=" bg-zinc-100 " >
        <div className="container mx-auto pb-10 pt-10 ">
          <div className="flex flex-col justify-between items-center  mt-10 mb-10">
            <h1 className="text-4xl headline text-salmon">NAŠ TIM</h1>
            <div className="w-1/4 h-0.5 bg-salmon m-5"></div>
            <p className="text-xl text-gray-700 text-ellipsis text-center w-2/5">
              Kvalitet usluge uvelike zavisi od profesionalnosti naših stručnjaka.
              Ponosni smo na naš tim, druželjubivi smo i pravi smo profesionalci.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto h-2/3 w-2/3 ">
            {data.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
          
        </div>
      </div>
    );
}