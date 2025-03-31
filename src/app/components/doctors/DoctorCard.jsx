"use client";
import React from "react";
import Link from "next/link";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';



export default function DoctorCard({ doctor }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null); 

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="flex flex-col h-full  text-left mb-20">
        <div>
          <img className="w-full mx-auto" src={doctor.image} />
        </div>
        <div className="pt-5 pb-5">
          <p className="headline text-3xl">{doctor.name.toUpperCase()}</p>
        </div>
        <div className="pb-5">
          <p>{doctor.title.toUpperCase()}</p>
        </div>
        <div className="w-full flex flex-col">
          <div
            onClick={toggleExpand}
            className="flex flex-row justify-between items-center w-full border-t cursor-pointer border-black p-3"
          >
            <p>VIŠE O {doctor.name.toUpperCase()}</p>
            <span>
              <FontAwesomeIcon
                icon={isExpanded ? faMinus : faPlus}
                className={`transition-transform duration-500 ease-in-out transform ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
              />
            </span>
          </div>
          <div
            ref={contentRef}
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out border-b border-black`}
            style={{
              maxHeight: isExpanded
                ? `${contentRef.current?.scrollHeight}px`
                : "0",
              overflow: "hidden",
            }}
          >
            <div className="text-ellipsis text-left pb-3 flex flex-col">
              <p className="p-1">{doctor.about}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
