import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getGroupedTreatments } from "@/lib/treatments"; // Funkcija koja grupiše tretmane po kategorijama

export default function OfferingsSection() {
  const groupedTreatments = getGroupedTreatments(); // Pretpostavljamo da vraća objekte sa slikama i tretmanima

  return (
    <>
      <div className="flex flex-col items-center justify-center headline text-2xl md:text-4xl text-salmon my-5 md:mb-0 py-10" id="tretmani">
        <div className="mx-auto w-full text-center">
          <p className="text-3xl">TRETMANI</p>
          <div className="h-0.5 bg-salmon w-2/6 sm:w-1/6 mx-auto my-2"></div>
        </div>
      </div>

      {/* Prikazivanje tretmana po kategorijama */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto w-9/12 md:w-3/5 gap-4">
        {Object.keys(groupedTreatments).map((category, index) => (
          <div className="mx-auto group relative" key={index}>
            {/* Slika koja pripada kategoriji */}
            <Image
              src={groupedTreatments[category].image} // Putanja slike koja je specifična za kategoriju
              alt={category}
              width={400}
              height={400}
              className="w-full h-[400px] object-cover"
            />
            <div>
              {/* Ispod slike, prikazivanje kategorije i tretmana */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-salmon bg-opacity-70 text-white px-4 py-2 text-left w-11/12 max-h-[40px] overflow-hidden group-hover:max-h-[200px] transition-[max-height] duration-700 z-0">
                <p className="text-lg">{category}</p>
                {/* Prikazivanje tretmana unutar kategorije */}
                {groupedTreatments[category].treatments.map(
                  (treatment, idx) => (
                    <p key={idx} className="text-sm">
                      <Link href={`treatmants/${treatment.id}`}>
                        {treatment.headline}
                      </Link>
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
