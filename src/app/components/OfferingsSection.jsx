import React from "react";
import Link from "next/link";

export default function OfferingsSection({ data }) {
  return (
    <>
      <div className="relative">
        <div
          className="bg-cover pb-28"
          style={{ backgroundImage: "url('/images/bg-1.jpg')" }}
        ></div>
        <div className="wave-bottom absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,160L48,181.3C96,203,192,245,288,240C384,235,480,181,576,170.7C672,160,768,192,864,213.3C960,235,1056,245,1152,224C1248,203,1344,149,1392,122.7L1440,96V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-5 py-2 lg:px-48 lg:pt-10">
        <div className="flex flex-col items-center mx-auto p-0 m-0">
          <h1 className="text-rose-400 font-serif text-center">
            <span className="block text-5xl">Prime</span>
            <span className="block text-5xl">tretmani lica</span>
          </h1>
          <div className="w-2/4 h-0.5 bg-rose-400 mt-5"></div>
          {/* Dodajemo underline ispod naslova */}
        </div>

        <div className="w-3/4 text-xl items-center text-center mx-auto my-4">
          <p>
            Nudimo širok spektar tretmana i procedura, poštujući i držeći se
            zlatnog standarda lepote i umerenosti, a to je odmorna, prirodna i
            podmlađena koža.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {data.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white rounded-t-5xl shadow-lg overflow-hidden group"
            >
              <div className="relative h-64 w-full">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="absolute top-0 left-0 h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105 "
                />
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-serif mb-2 text-rose-500">
                  {treatment.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {treatment.description} Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Consectetur eos quod tenetur officia, itaque
                  eum vitae, ex fuga rerum ipsum perspiciatis commodi saepe sint
                  sunt corrupti illum, repudiandae dicta magni.
                </p>
                <Link href={treatment.detailsUrl} className="text-yellow-600 hover:underline">
  Saznaj više
</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
