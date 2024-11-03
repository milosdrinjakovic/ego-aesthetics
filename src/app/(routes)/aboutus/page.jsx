import DoctorsSection from "@/app/components/doctors/DoctorsSection";
import React from "react";
import Image from "next/image";


export default function AboutUs() {
  return (
    <>
      <div class="flex flex-row items-center mt-20">
        <div class="w-1/2">
          <div className="flex flex-col justify-center w-2/4 mx-auto items-center">
            <p className="font-light text-black headline text-[48px]">
              NEKI NASLOV
            </p>
            <p className="text-ellipsis text-center">
              Established in 2014 by Alice Henshaw, Harley Street Injectables
              epitomizes excellence in aesthetic care. With a focus on bespoke
              injection techniques and quality products, our medically trained
              staff deliver personalised service tailored to each client's
              unique needs. From non-invasive options to cutting-e dge
              technologies, our holistic approach to aesthetics ensures
              unparalleled results while prioritising patient satisfaction and
              well-being.{" "}
            </p>
          </div>
        </div>
        <div class="w-1/2">
          <Image
            src="/images/saloon/salon1.jpg"
            width={1400}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div class="flex flex-row-reverse items-center ">
        <div class="w-1/2">
          <div className="flex flex-col justify-center w-2/4 mx-auto items-center text-ellipsis text-center">
            <p className="headline  text-[48px] ">NEKI NASLOV</p>
            <p>
              Established in 2014 by Alice Henshaw, Harley Street Injectables
              epitomizes excellence in aesthetic care. With a focus on bespoke
              injection techniques and quality products, our medically trained
              staff deliver personalised service tailored to each client's
              unique needs. From non-invasive options to cutting-e dge
              technologies, our holistic approach to aesthetics ensures
              unparalleled results while prioritising patient satisfaction and
              well-being.{" "}
            </p>
          </div>
        </div>
        <div class="w-1/2">
          <Image
            src="/images/saloon/salon3.jpg"
            width={1400}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="bg-salmon text-white w-full h-[600px] flex flex-col justify-center items-center">
        <div className="w-1/3 text-center text-pretty">
          <p className="headline text-3xl">OUR TEAM</p>
          <p className="text-ellipsis text-center">{`Our team is renowned for their skill, aesthetic eye and caring approach. 
            Our patients are at the centre of all we do and we pride ourselves on the unparalleled service they receive at Harley Street Injectables. Every client of ours has treatments they wish for, that subtly suits them and only they know have been done.`}</p>
        </div>
      </div>
      <DoctorsSection />
      
    </>
  );
}
