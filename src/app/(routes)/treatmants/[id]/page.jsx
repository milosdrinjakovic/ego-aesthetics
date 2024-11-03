"use client";
import { useParams } from "next/navigation";
import treatmants from "@/app/data/treatmants.json";
import DoctorsSection from "@/app/components/doctors/DoctorsSection";
import Image from "next/image";
import ContentSection from "@/app/components/ContentSection";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
export default function TreatmentDetails() {
  const { id } = useParams();

  const treatmant = treatmants.find(
    (treatment) => treatment.id === parseInt(id)
  );

  if (!treatmant) {
    return <p className="text-center text-red-500">Tretman nije pronađen.</p>;
  }

  const description = `At Harley Street Injectables, we are proud to offer the advanced Cutera Laser Genesis treatment, a revolutionary solution for achieving smoother, clearer, and more youthful skin. 

This innovative laser therapy is designed to address a variety of skin concerns, including redness and rosacea, providing you with a refreshed and radiant complexion without the need for invasive procedures or extensive downtime.`;

  return (
    <>
      <div className="flex flex-col">
        <div>
          <ContentSection
            imageSrc={treatmant.image}
            title={"Elevate Your Beauty with a Full Face Filler or Liquid Facelift".toUpperCase()}
            description={description}
            reverse={true}
          />
        </div>
        <div className="  w-full h-[350px] flex flex-col justify-center items-center">
          <div className="w-1/3 text-center text-pretty">
            <p className="headline text-3xl">
              The Science Behind Cutera Laser Genesis:
            </p>
            <p className="text-ellipsis text-center">{`Cutera Laser Genesis uses a 1064 nm Nd:YAG laser, which is ideal for treating diffuse redness and promoting collagen production. The laser energy penetrates deep into the skin, targeting water in the dermis. This controlled heating of the dermis stimulates the body's natural healing processes, leading to increased collagen production and a reduction in redness. The treatment also targets microvasculature, helping to reduce the appearance of diffuse redness and rosacea`}</p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col w-3/4">
            <div>
              <ContentSection
                imageSrc="/images/treatmants/treatman4.jpg"
                title={"What to Expect During Your Cutera Laser Genesis Treatment"}
                description={`Consultation:

 Our experienced skincare specialists will assess your skin and discuss your aesthetic goals to determine if Laser Genesis is the right treatment for you.

Preparation:

Your skin will be cleansed, and protective eyewear will be provided.

Treatment:

The Laser Genesis device will be gently moved over the treatment area, delivering precise laser energy to the skin. The procedure is typically pain-free, with most patients describing a warm, relaxing sensation.

`}
              />
            </div>
            <div>
              <ContentSection
                imageSrc="/images/treatmants/treatman4.jpg"
                title={"What to Expect During Your Cutera Laser Genesis Treatment"}
                description={`Consultation:

                  Our experienced skincare specialists will assess your skin and discuss your aesthetic goals to determine if Laser Genesis is the right treatment for you.
                 
                 Preparation:
                 
                 Your skin will be cleansed, and protective eyewear will be provided.
                 
                 Treatment:
                 
                 The Laser Genesis device will be gently moved over the treatment area, delivering precise laser energy to the skin. The procedure is typically pain-free, with most patients describing a warm, relaxing sensation.
                 
                 `}
                reverse={true}
              />
            </div>
          </div>
          <div className="min-h-full bg-salmon w-1/4 text-white flex items-center justify-center">
            <div className="w-1/2">
              <p>
                Trajanje tretmana
              </p>
              <p>
                30min
              </p>
              <p>Nivo bola tokom izvrsavanja</p>
              <p>Minimalan</p>
              <p className="text-left py-2">Cena</p>
              <p className="bg-white text-salmon text-center w-1/2">12.000 din</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[350px] flex flex-col justify-center items-center">
          <div className="w-1/3 text-center text-pretty">
            <p className="headline text-3xl">
            AFTERCARE
            </p>
            <p className="text-ellipsis text-center">{`Prioritize your skin's health by following our pre and post-treatment recommendations. Your practitioner will provide personalized guidance on how to prepare for your treatment and care for your skin afterward to optimize results and minimize downtime.`}</p>
          </div>
        </div>
      </div>
    </>
  );
}
