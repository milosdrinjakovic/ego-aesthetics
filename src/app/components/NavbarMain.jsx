"use client";
// NavbarMain.jsx

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
import MobileMenu from "./Mobile/MobileMenu";
import ConditionsDrawery from "./navbar/ConditionsDrawery";
import TreatmentsDropdown from "./navbar/TreatmentsDropdown";
import SkinStatesDropdown from "./navbar/SkinStatesDropdown";
import SocialIcons from "./navbar/SocialIcons";
import Logo from "./navbar/Logo";

const NavbarMain = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      setShowNavbar(window.scrollY <= lastScrollY);
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
    
      <div className="">
        <nav
          className={`fixed top-0 left-0 w-full select-none bg-salmon text-white p-8 transition-all  duration-200 shadow-lg ${
            showNavbar ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Desktop meni */}
          <div className="flex  flex-row justify-between items-center">
            <div className="flex flex-row ml-3 space-x-10 z-20">
              <Link href="/" className="nav-link cursor-pointer">
                POČETNA
              </Link>
              <TreatmentsDropdown />
              <Link href="/aboutus" className="nav-link">
                O NAMA
              </Link>
            </div>
            <Logo showNavbar={showNavbar} />
            <SocialIcons />
          </div>
        </nav>
      </div>

      {/* Mobile meni */}
      
    </>
  );
};

export default NavbarMain;
