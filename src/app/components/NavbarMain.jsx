"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTiktok  } from "@fortawesome/free-brands-svg-icons";


const NavbarMain = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scroll down
        setShowNavbar(false);
      } else {
        // Scroll up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // Cleanup function to remove the event listener
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={` fixed top-0 left-0 w-full bg-white text-gray-900 p-7 z-10 transition-transform duration-500  ${
        showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="relative flex justify-between items-center">
        
        {/* Navigation Links (Left Side) */}
        <div className="flex ml-3 space-x-10 z-10">
          <Link href="/" className="nav-link">
            POČETNA
          </Link>
          <Link href="/treatments" className="nav-link">
            TRETMANI
          </Link>
          <Link href="/aboutus" className="nav-link">
            O NAMA
          </Link>
          <Link href="/pricing" className="nav-link">
            CENOVNIK
          </Link>
        </div>

        {/* Logo Section (Center) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-24 w-52 h-52 overflow-hidden z-20">
          <Image
            src="/images/logo3.jpg"
            alt="Logo"
            layout="fill"
            objectFit="cover"
            className={`rounded-full ease-in-out  ${
              showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
            }`}
            
          />
        </div>

        {/* Social Icons & Phone Number (Right Side) */}
        <div className="flex items-center space-x-8 z-10 mr-10">
          <a
            href="https://www.facebook.com"
            className="text-goldLogo hover:text-blue-800 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} className="w-8 h-8" />
          </a>
          <a
            href="https://www.instagram.com"
            className="text-goldLogo hover:text-pink-800 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
          </a>
          <a
            href="https://www.tiktok.com"
            className="text-goldLogo hover:text-gray-800 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTiktok} className="w-8 h-8" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
