import React from "react";

export default function CustomerFeedbackGallery() {
  return (
    <>
      <section className=" overflow-hidden mt-56 mb-40">
        <div className="flex flex-col text-center justify-center mt-10">
          <p className="text-salmon headline text-4xl  mb-8">
            ŠTA VI MISLITE O NAMA
          </p>
          <div className="w-1/4 h-0.5 rounded-full bg-salmon mx-auto"></div>
        </div>

        <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:pt-44 h-5/6  flex flex-col justify-center ">
          <div className="flex flex-col h-60 sm:flex-row mx-auto">
            {/* Starts component */}
            <a href="#_" className="inline-block w-full sm:w-auto">
              <img
                src="/images/saloon/salon1.jpg"
                className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />
            </a>
            <a href="#_" className="inline-block w-full sm:w-auto">
              <img
                src="/images/saloon/salon3.jpg"
                className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />
            </a>
            <a href="#_" className="inline-block w-full sm:w-auto">
              <img
                src="/images/saloon/salon5.jpg"
                className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />
            </a>
            <a href="#_" className="inline-block w-full sm:w-auto">
              <img
                src="/images/saloon/salon2.jpg"
                className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />
            </a>
            
          </div>{" "}
          
        </div>
      </section>
    </>
  );
}
