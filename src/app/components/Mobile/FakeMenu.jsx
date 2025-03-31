"use client";
import React, { useState, useEffect } from "react";
import gsap from "gsap";
import SkinStatesDropdown from "../navbar/SkinStatesDropdown";
import { useMenu } from "@/app/context/MenuProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const FakeMenu = () => {
  const {
    isMenuOpen,
    openMenu,
    closeMenu,
    isSubMenuOpen,
    openSubMenu,
    closeSubMenu,
    setIsMenuOpen,
    setIsSubMenuOpen,
  } = useMenu();

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(".main-menu", {
        x: "0",
        duration: 0.1,
        ease: "power2.out",
      });
    } else {
      gsap.to(".main-menu", {
        x: "-100%",
        duration: 0.1,
        ease: "power2.out",
      });
    }
  }, [isMenuOpen]);

  const toggleSubmenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
    
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setIsSubMenuOpen(false);
    }
  };

  return (
    <div className="fixed top-0 bg-salmon p-6 w-full text-white">
      <div className="flex items-center">
        <button className="lg:hidden text-white text-4xl" onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={isMenuOpen ? faMinus : faPlus}
            className={`transition-transform duration-500 ease-in-out transform ${
              isMenuOpen ? "rotate-180" : "rotate-45"
            }`}
          />
        </button>
        <div className="flex-1 text-center text-xl">
          <Link href="/" className=" cursor-pointer">
            Ego Aesthetics
          </Link>
        </div>
      </div>
      {isMenuOpen && (
        <nav
          className={`main-menu lg:hidden absolute left-0 w-full bg-salmon text-white p-6 transition-transform duration-300 transform`}
        >
          <ul className="space-y-6">
            <li>
              <button className="block py-2 px-4" onClick={toggleSubmenu}>
                Conditions
              </button>
            </li>
            <li>
              <a href="#" className="block py-2 px-4">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
      {isSubMenuOpen && isSubMenuOpen && (
        <nav
          className={`sub-menu lg:hidden absolute left-0 w-full text-white p-6 transition-transform duration-300 transform`}
        >
          <div>
            
            <SkinStatesDropdown toggleSubmenu={toggleSubmenu} toggleMenu={toggleMenu} />
          </div>
        </nav>
      )}
    </div>
  );
};

export default FakeMenu;
