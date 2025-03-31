"use client";
import DoctorsSection from "@/app/components/doctors/DoctorsSection";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import TextAnimation from "@/app/components/animations/TextAnimation";

// Registruj ScrollTrigger plugin

export default function AboutUs() {
  return (
    <>
      <div>
        {/* Prvi deo: ŠTA NUDIMO */}
        <div className="flex flex-col md:flex-row items-center mt-20">
          <div className="md:w-1/2 w-full ">
            <TextAnimation>
              <div className="flex flex-col justify-center w-full sm:w-2/3 mx-auto items-center py-7 sm:py-0 ">
                <p className="font-light text-black headline text-[32px] sm:text-[40px] text-center sm:text-left">
                  VAŠA KLINIKA
                </p>
                <p className="px-5 sm:px-0 sm:text-center">
                  Ego Aesthetics klinika nudi bogat spektar usluga iz oblasti
                  laserske, aparatne, estetske i terapijske kozmetologije. Naš
                  prioritet nije samo očuvanje vaše lepote i mladosti, već i
                  unapređenje vašeg zdravlja i opšteg blagostanja.
                </p>
              </div>
            </TextAnimation>
          </div>
          <div className="md:w-1/2 w-full mt-5 md:mt-0">
            <Image
              src="/images/saloon/salon1.jpg"
              width={1400}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Drugi deo: NAŠ CILJ */}
        <div className="flex flex-col md:flex-row-reverse items-center ">
          <div className="md:w-1/2 w-full ">
            <TextAnimation>
              <div className="flex py-5 sm:py-0 flex-col justify-center  items-center mx-auto w-full sm:w-2/3 ">
                <p className="font-light text-black headline text-[32px] sm:text-[40px] text-center sm:text-left">
                  LEPOTA I SAMOPOUZDANJE
                </p>
                <p className="text-left px-5 sm:px-0 py-5 sm:py-0 sm:text-center">
                  U Ego Aesthetics klinici, cilj nam je prirodna revitalizacija
                  koja naglašava vašu jedinstvenu lepotu, istovremeno podižući
                  vaše samopouzdanje i zadovoljstvo sobom. Sa našim
                  stručnjacima, sigurni ste u najboljim rukama.
                </p>
              </div>
            </TextAnimation>
          </div>
          <div className="md:w-1/2 w-full mt-5 md:mt-0">
            <Image
              src="/images/saloon/salon3.jpg"
              width={1400}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Lekari */}
        <DoctorsSection />
      </div>
    </>
  );
}
