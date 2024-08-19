"use client"
import React from 'react'
import { useState } from 'react';
import DoctorCard from './DoctorCard';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import doctorsData from "@/app/data/doctors.json"



export default function () {
    let data = doctorsData ;
    const [currentPage, setCurrentPage] = useState(0);
    const doctorsPerPage = 3;
    const totalPages = Math.ceil(data.length / doctorsPerPage);
  
    const handleNextPage = () => {
      setCurrentPage(currentPage === totalPages - 1 ? 0 : currentPage + 1);
    };
  
    const handlePrevPage = () => {
      setCurrentPage(currentPage === 0 ? totalPages - 1 : currentPage - 1);
    };
  
    const visibleDoctors = data.slice(
      currentPage * doctorsPerPage,
      (currentPage + 1) * doctorsPerPage
    );
  
    return (
      <div className=" bg-zinc-100" >
        <div className="container mx-auto pt-10 mt-5 ">
          <div className="flex justify-between items-center  mt-10 mb-10">
            <h1 className="text-4xl font-serif text-rose-500">Naši stručnjaci</h1>
            <div className="w-0.5 h-12 bg-rose-500 mx-4"></div>
            <p className="text-xl text-gray-700">
              Kvalitet usluge uvelike zavisi od profesionalnosti naših stručnjaka.
              Ponosni smo na naš tim, druželjubivi smo i pravi smo profesionalci.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 ">
            {visibleDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
          <div className="flex justify-center items-center mt-4">
            <IoIosArrowBack
              onClick={handlePrevPage}
              className="text-3xl cursor-pointer mr-4 p-10 text-goldLogo"
            />
            <span className="text-4xl font-serif text-yellow-900">
              0{currentPage + 1} <span> / </span> {totalPages}
            </span>
            <IoIosArrowForward
              onClick={handleNextPage}
              className="text-3xl cursor-pointer ml-4 text-goldLogo"
            />
          </div>
        </div>
      </div>
    );
}