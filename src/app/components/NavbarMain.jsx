"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const NavbarMain = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSkinStateDropdown, setShowSkinStateDropdown] = useState(false); // Novo stanje

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full select-none bg-salmon  text-white p-8 transition-transform duration-150 shadow-lg ${
          showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex ml-3 space-x-10 z-20">
            <Link href="/" className="nav-link cursor-pointer">
              POČETNA
            </Link>
            <div
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <div className="flex flex-row items-center space-x-2">
                <p className="items-center cursor-pointer">TRETMANI</p>
                <FontAwesomeIcon
                  icon={showDropdown ? faChevronDown : faChevronUp}
                  size="xs"
                />
              </div>

              {showDropdown && (
                <div className="absolute left-0 right-0 bg-salmon py-36 shadow-lg z-1 border-white flex items-center justify-center border-b-2">
                  
                  <div className="flex justify-center space-x-10 items-center w-2/3">
                  <div className="">
                  <p className="text-4xl pb-8 ">TRETMANI</p>
                  <Image 
                  src={"/images/navmenu/NavMenu.jpg"}
                  width={300}
                  height={300}
                  className="w-[200px] h-[280px]"
                  />
                  </div>
                  <div >
                    <p className="text-xl pb-2">DERMAL FILLER INJECTABLES</p>
                    <Link href={'/treatmants/1'}>
                    <p className="cursor-pointer hover:text-black">Cheek Filter</p>

                    </Link>
                    <p className="cursor-pointer hover:text-black">Chin & Jawline filter</p>
                    <p className="cursor-pointer hover:text-black">Hand Filler</p>
                    <p className="cursor-pointer hover:text-black">Hip Dip Filler</p>
                    <p className="cursor-pointer hover:text-black">Lip Filler</p>
                    <p className="cursor-pointer hover:text-black">Liquid Facelift</p>
                    <p className="cursor-pointer hover:text-black">Marionette Line Filler</p>
                    <p className="cursor-pointer hover:text-black">Nasalobal Fold Filler</p>
                    <p className="cursor-pointer hover:text-black">Neck Filler</p>
                    <p className="cursor-pointer hover:text-black">Non Surgical Rhinoplasty</p>
                    <p className="cursor-pointer hover:text-black">Tear Trough Filler</p>
                    <p className="cursor-pointer hover:text-black">Temple Filer</p>
                  </div>
                  <div>
                    <p className="text-xl">DERMAL FILLER INJECTABLES</p>
                    <p className="cursor-pointer hover:text-black">Cheek Filter</p>
                    <p className="cursor-pointer hover:text-black">Chin & Jawline filter</p>
                    <p className="cursor-pointer hover:text-black">Hand Filler</p>
                    <p className="cursor-pointer hover:text-black">Hip Dip Filler</p>
                    <p className="cursor-pointer hover:text-black">Lip Filler</p>
                    <p className="cursor-pointer hover:text-black">Liquid Facelift</p>
                    <p className="cursor-pointer hover:text-black">Marionette Line Filler</p>
                    <p className="cursor-pointer hover:text-black">Nasalobal Fold Filler</p>
                    <p className="cursor-pointer hover:text-black">Neck Filler</p>
                    <p className="cursor-pointer hover:text-black">Non Surgical Rhinoplasty</p>
                    <p className="cursor-pointer hover:text-black">Tear Trough Filler</p>
                    <p className="cursor-pointer hover:text-black">Temple Filer</p>
                  </div>
                  <div>
                    <p className="text-xl">DERMAL FILLER INJECTABLES</p>
                    <p className="cursor-pointer hover:text-black">Cheek Filter</p>
                    <p className="cursor-pointer hover:text-black">Chin & Jawline filter</p>
                    <p className="cursor-pointer hover:text-black">Hand Filler</p>
                    <p className="cursor-pointer hover:text-black">Hip Dip Filler</p>
                    <p className="cursor-pointer hover:text-black">Lip Filler</p>
                    <p className="cursor-pointer hover:text-black">Liquid Facelift</p>
                    <p className="cursor-pointer hover:text-black">Marionette Line Filler</p>
                    <p className="cursor-pointer hover:text-black">Nasalobal Fold Filler</p>
                    <p className="cursor-pointer hover:text-black">Neck Filler</p>
                    <p className="cursor-pointer hover:text-black">Non Surgical Rhinoplasty</p>
                    <p className="cursor-pointer hover:text-black">Tear Trough Filler</p>
                    <p className="cursor-pointer hover:text-black">Temple Filer</p>
                  </div>
                  <div>
                    <p className="text-xl">DERMAL FILLER INJECTABLES</p>
                    <p className="cursor-pointer hover:text-black">Cheek Filter</p>
                    <p className="cursor-pointer hover:text-black">Chin & Jawline filter</p>
                    <p className="cursor-pointer hover:text-black">Hand Filler</p>
                    <p className="cursor-pointer hover:text-black">Hip Dip Filler</p>
                    <p className="cursor-pointer hover:text-black">Lip Filler</p>
                    <p className="cursor-pointer hover:text-black">Liquid Facelift</p>
                    <p className="cursor-pointer hover:text-black">Marionette Line Filler</p>
                    <p className="cursor-pointer hover:text-black">Nasalobal Fold Filler</p>
                    <p className="cursor-pointer hover:text-black">Neck Filler</p>
                    <p className="cursor-pointer hover:text-black">Non Surgical Rhinoplasty</p>
                    <p className="cursor-pointer hover:text-black" >Tear Trough Filler</p>
                    <p className="cursor-pointer hover:text-black">Temple Filer</p>
                  </div>
                  
                  
                  </div>
                  

                  
                </div>
                
              )}
              
            </div>

            {/* Novi dropdown za "STANJA KOŽE" */}
            <div
              onMouseEnter={() => setShowSkinStateDropdown(true)}
              onMouseLeave={() => setShowSkinStateDropdown(false)}
            >
              <div className="flex flex-row items-center space-x-2">
                <p className="items-center cursor-pointer">STANJA KOŽE</p>
                <FontAwesomeIcon
                  icon={showSkinStateDropdown ? faChevronDown : faChevronUp}
                  size="xs"
                />
              </div>

              {showSkinStateDropdown && (
                <div className="absolute left-0 right-0 w-full  bg-salmon p-20  pb-40 z-10 border-white border-b-2">
                  <div className="flex flex-row space-x-6 mt-5 justify-center">
                    <div className="flex flex-col ">
                      <Image src={'/images/navmenu/Ageing+Skin.jpeg'}
                        width={400}
                        height={300}
                        objectFit="cover"
                        className="w-[300px] h-[200px]"
                      />
                      <p className="text-2xl  cursor-pointer">AGEING SKIN</p>
                      <Link href={'/conditions/1'}>
                      <p className="cursor-pointer hover:text-black">Ageing hands</p>
                      </Link>
                      <p className="cursor-pointer hover:text-black">Lines and wrinkles</p>
                      <p className="cursor-pointer hover:text-black">Dry and dehidrated</p>
                      <p className="cursor-pointer hover:text-black">Skin Laxity</p>


                    </div>
                    <div className="flex flex-col ">
                    <Image src={'/images/navmenu/Uneven+Skin+Tone.png'}
                        width={300}
                        height={300}
                        objectFit="cover"
                        className="w-[300px] h-[200px]"
                      />
                      <p className="text-2xl font-thin">UNEVEN SKIN TONE</p>
                      <p className="cursor-pointer hover:text-black">Age spots</p>
                      <p className="cursor-pointer hover:text-black">Skin rednes</p>
                      <p className="cursor-pointer hover:text-black">Sun damage</p>

                    </div>
                    <div className="flex flex-col ">
                    <Image src={'/images/navmenu/Blemishes.png'}
                        width={300}
                        height={300}
                        className="w-[300px] h-[200px]"
                      />
                      <p className="text-2xl font-thin">BLEMISH</p>
                      <p className="cursor-pointer hover:text-black">Botox for Migranes</p>
                      <p className="cursor-pointer hover:text-black">HyperDossis</p>
                      <p className="cursor-pointer hover:text-black">Cellulite</p>
                      <p className="cursor-pointer hover:text-black">Millia</p>
                    </div>
                    <div className="flex flex-col ">
                    <Image src={'/images/navmenu/Other+conditions.jpeg'}
                        width={300}
                        height={300}
                        objectFit="cover"
                        className="w-[300px] h-[200px]"
                      />
                      <p className="text-2xl font-thin">OTHER CONDITIONS</p>
                      <p className="cursor-pointer hover:text-black">Other Conditions</p>
                      <p className="cursor-pointer hover:text-black">Botox for Migranes</p>
                      <p className="cursor-pointer hover:text-black">Hyper Dossis</p>
                      <p className="cursor-pointer hover:text-black">Cellulite</p>
                      <p className="cursor-pointer hover:text-black">Millia</p>
  
                    </div>
                  </div>
                  {/* <ul>
                    <li className="hover:text-black cursor-pointer">AGEING SKIN</li>
                    <li className="hover:text-black cursor-pointer">UNEVEN SKIN TONE
                    </li>
                    <li className="hover:text-black cursor-pointer">
                    BLEMISHES
                    </li>
                    <li>
                    OTHER CONDITIONS

                    </li>

                  </ul> */}
                </div>
              )}
            </div>

            <Link href="/aboutus" className="nav-link">
              O NAMA
            </Link>
          
          </div>
          <Link href={"/"}>
            <div
              className={`absolute left-1/2 transform bg-salmon rounded-full -translate-x-1/2 -top-10 w-56 h-56 overflow-hidden z-40 ease-in-out transition duration-400 ${
                showNavbar
                  ? "transform translate-y-0"
                  : "transform -translate-y-full"
              }`}
            >
              <Image
                src="/images/logo6.png"
                alt="Logo"
                width={110}
                height={70}
                className="ease-in-out mx-auto p-3 mt-8 z-40"
              />
            </div>
          </Link>

          {/* Ikone društvenih mreža i broj telefona (desna strana) */}
          <div className="flex items-center space-x-8 z-10 mr-10 text-white">
            <a
              href="https://www.facebook.com"
              className="hover:text-blue-800 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} className="w-8 h-8" />
            </a>
            <a
              href="https://www.instagram.com"
              className="hover:text-pink-800 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
            </a>
            <a
              href="https://www.tiktok.com"
              className="hover:text-gray-800 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} className="w-8 h-8" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarMain;
