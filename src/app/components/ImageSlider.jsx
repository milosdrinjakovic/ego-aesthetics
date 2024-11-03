import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/navmenu/Uneven+Skin+Tone.png",
    "/images/navmenu/Ageing+Skin.jpeg",
    "/images/navmenu/Blemishes.png",
    "/images/navmenu/Other+conditions.jpeg",
    "/images/navmenu/Ageing+Skin.jpeg",
    "/images/navmenu/Other+conditions.jpeg",
  ];

  const handleNext = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {images.map((src, index) => (
              <div key={index} className="w-1/4 flex-shrink-0 px-2 ">
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={300}
                  height={300}
                  objectFit="cover"
                  
                  className="w-full h-80 shadow-lg"
                />
                <div className="text-center">
                  <p className="text-2xl my-3">NASLOV {index + 1}</p>
                  <p className="text-zinc-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi alias ab porro magni temporibus reprehenderit at
                    enim maxime eligendi officiis? Iusto quas vitae magni in.
                    Aspernatur autem molestias cum temporibus!
                  </p>
                </div>
                <div className="flex justify-center w-full">
                  <Link href={'/treatmants/1'} className="border border-gray-900 w-1/2 h-8 mt-4 hover:bg-black hover:text-white text-center flex justify-center items-center" >
                    Learn More
                  </Link>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex mt-4 space-x-4">
          {/* Levo dugme sa efektom pojavljivanja */}
          <>
          <button 
            onClick={handlePrev}
            className={`border border-black w-10 h-10 select-none transition-opacity duration-300 ${
              currentIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            &larr;
          </button>
          </>
          
          {/* Desno dugme sa efektom pojavljivanja */}
          <button 
            onClick={handleNext}
            className={`border border-black w-10 h-10 transition-opacity duration-300 select-none ${
              currentIndex >= images.length - 4 ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
