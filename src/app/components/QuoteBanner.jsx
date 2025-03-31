"use client"
import React, { useState, useEffect, useRef } from "react";
import ObserverComponent from "./ObserverComponent";
import TextAnimation from "./animations/TextAnimation";

const WavyTop = () => {
  return (
    <div className="relative pt-10">
      <div className="">
        <div className="wave-top absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fbc0c0" fillOpacity="1" d="M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,133.3C672,139,768,149,864,160C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};


  // relative pt-32 bg-salmon
  const QuoteBanner = () => {
    return (
      <div className="relative pt-32 sm:pt-24  my-16 sm:my-0   bg-salmon">
        <WavyTop />
          <div className="absolute inset-0 flex items-center justify-center ">
            <div className="sm:w-1/3 w-full">
              <p className="hidden sm:block sm:text-lg text-white italic my-auto pt-12">
                <span className="text-4xl text-left font-thin">" </span>Uđite u naš svet lepote i prepustite se transformišućem iskustvu koje slavi vašu jedinstvenost. Dozvolite nam da probudimo vašu unutrašnju lepotu i osnažimo vas da zasijate, jer prava lepota nije samo u tome kako izgledate, već i u tome kako se osećate.<span className="text-3xl">"</span>
              </p>
              <p className="text-white px-2 w-full text-sm sm:hidden block ">
              Dozvolite nam da probudimo vašu unutrašnju lepotu i osnažimo vas da zasijate, jer prava lepota nije samo u tome kako izgledate, već i u tome kako se osećate.
              </p>
            </div>
            <div className="w-72">
              <img src='/images/facepic.png' alt="Slika" className="w-full h-auto rounded-full" />
            </div>
          </div>
      </div>
    );
  };


export default QuoteBanner;