"use client"
import React, { useState, useEffect, useRef } from "react";

const WavyTop = () => {
  return (
    <div className="relative">
      <div className=" pb-22">
        <div className="wave-top absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill=" #FB7185" fillOpacity="1" d="M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,133.3C672,139,768,149,864,160C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

const QuoteBanner = () => {
  const [isInView, setIsInView] = useState(false);
  const quoteRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(quoteRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={quoteRef} className="relative pt-32 bg-rose-400">
        <WavyTop />
        <div
          className={`absolute inset-0 flex items-center justify-center p-20 transition-opacity duration-1000 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-1/3">
            <p className="text-xl text-white font-serif italic my-auto pt-12">
              <span className="text-4xl text-left">" </span>Uđite u naš svet lepote i prepustite se transformišućem iskustvu koje slavi vašu jedinstvenost. Dozvolite nam da probudimo vašu unutrašnju lepotu i osnažimo vas da zasijate, jer prava lepota nije samo u tome kako izgledate, već i u tome kako se osećate.<span className="text-3xl">"</span>
            </p>
          </div>
          <div className="w-72">
            <img src='/images/facepic.png' alt="Slika" className="w-full h-auto rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteBanner;