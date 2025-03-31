import React from "react";

export default function CustomerFeedbackGallery() {
  return (
    <>
      <section className=" overflow-hidden pb-80 sm:pb-0 sm:pt-56 h-full">
        <div className="flex flex-col text-center justify-center mt-10">
          <p className="text-salmon headline text-4xl  mb-8">
            KROZ NAŠ OBJEKTIV
          </p>
          <div className="w-1/4 h-0.5 rounded-full bg-salmon mx-auto"></div>
        </div>

        <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-16 md:px-12 mx-auto pb-24 pt-10 lg:pt-44 h-5/6  flex flex-col justify-center ">
          <div className="flex flex-col h-60 sm:flex-row mx-auto">
            {/* Starts component */}
            <div  className="inline-block w-full sm:w-auto">
              <img
                src="/images/saloon/salon1.jpg"
                className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />
            </div>
            <div  className="inline-block w-full sm:w-auto">
              <img
                src="/images/saloon/salon3.jpg"
                className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />
            </div>
            <div className="inline-block w-full sm:w-auto">
              <img
                src="/images/saloon/salon5.jpg"
                className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />
            </div>
            <div  className="inline-block w-full sm:w-auto">
              <img
                src="/images/saloon/salon2.jpg"
                className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />
            </div>
            
          </div>{" "}
          
        </div>
      </section>
    </>
  );
}
