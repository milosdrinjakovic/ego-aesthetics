import React from 'react';
import TextAnimation from "./animations/TextAnimation"
import ScrollButton from './ScrollButton';

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center overflow-x-hidden min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20"
      style={{ backgroundImage: "url('/images/saloon/salon1.jpg')" }}
    >
      <TextAnimation>
        <div className="container mx-auto flex justify-center items-center">
          <div className="text-white text-center sm:text-left w-full sm:w-2/3 md:w-1/2 lg:w-2/3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin leading-tight">
              Neinvazivne kozmetičke <br /> i anti-aging procedure
            </h1>
            <p className="mt-4 text-base sm:text-lg">
              Otkrijte vrhunske tretmane za podmlađivanje i negu kože.
            </p>
            <div className='mt-6'>
            <ScrollButton targetId="#tretmani" label="SAZNAJ VIŠE" />            
            </div>
            
          </div>
        </div>
      </TextAnimation>
    </div>
  );
};

export default HeroSection;