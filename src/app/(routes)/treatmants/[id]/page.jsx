"use client";
import { useParams } from "next/navigation";
import treatmants from "@/app/data/treatmants.json";
import DoctorsSection from "@/app/components/doctors/DoctorsSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
export default function TreatmentDetails() {
  const { id } = useParams();

  console.log(treatmants);

  const treatmant = treatmants.find(
    (treatment) => treatment.id === parseInt(id)
  );

  if (!treatmant) {
    return <p className="text-center text-red-500">Tretman nije pronađen.</p>;
  }

  return (
    <div className="bg-zinc-100 min-h-screen py-44">
      <div className="max-w-5xl mx-auto p-10 bg-white rounded-4xl shadow-md">
        <div className="flex flex-col md:flex-row items-center md:items-start  ">
          <img
            src={treatmant.image}
            alt={treatmant.title}
            className="w-full md:w-1/2 h-auto rounded-lg shadow-lg"
          />
          <div className="mt-6 md:mt-0 md:ml-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 font-serif">
              {treatmant.title}
            </h1>
            <p className="text-gray-600 leading-relaxed  py-6">
              {treatmant.description}
              Neoperativno podizanje lica podrazumeva korišćenje metoda
              kozmetičke korekcije starenja. Individualni pristup stručnjaka
              pomaže da se postignu rezultati uporedivi sa hirurškim liftingom.
              Antivek aktivnosti treba započeti u mladosti, između 20-25 godina,
              jer se od tog, naizgled povoljnog perioda, počinju usporavati
              procesi obnove. Prevencija prevremenog starenja treba da se bazira
              na individualno prilagođenoj strategiji anti-age nege.
            </p>
            <div className="flex space-x-4 mt-6 ">
              
          <a
            href="https://www.facebook.com"
            className="text-blue-600 hover:text-blue-800 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} className="w-8 h-8" />
          </a>
          <a
            href="https://www.instagram.com"
            className="text-pink-600 hover:text-pink-800 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
          </a>
          <a
            href="https://www.tiktok.com"
            className="text-black hover:text-gray-800 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTiktok} className="w-8 h-8" />
          </a>
        </div>
          </div>
          <div>

          </div>
        </div>

        {/* Sekcija za dodatne informacije */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Detalji o tretmanu
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Ovdje možete dodati više informacija o tretmanu, kao što su koristi,
            trajanje, koraci u procesu, i sve druge važne detalje koje bi
            korisnici trebali znati.
          </p>
        </div>
      </div>
      <DoctorsSection />
    </div>
  );
}
