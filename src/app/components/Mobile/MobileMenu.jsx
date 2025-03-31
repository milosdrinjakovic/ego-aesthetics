"use client";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import SkinStatesDropdown from "../navbar/SkinStatesDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import TreatmentsDropdown from "../navbar/TreatmentsDropdown";

const treatments = [
  {
    category: "Hijaluronski Fileri",
    links: [
      {
        title: "Konturisanje i povećanje usana",
        path: "konturisanje-i-povecanje-usana",
      },
      {
        title: "Podmlađivanje lica i dekoltea",
        path: "podmladjivanje-lica-i-dekoltea",
      },
      { title: "Korekcija podočnjaka", path: "korekcija-podocnjaka" },
      { title: "Konturisanje jagodica", path: "konturisanje-jagodica" },
      { title: "Popunjavanje bora", path: "popunjavanje-bora" },
      { title: "Podmlađivanje šaka", path: "podmladjivanje-saka" },
      { title: "Podizanje obraza", path: "podizanje-obraza" },
      {
        title: "Uklanjanje nazolabijalnih bora",
        path: "uklanjanje-nazolabijalnih-bora",
      },
      {
        title: "Konturisanje vilice i brade",
        path: "konturisanje-vilice-brade",
      },
      {
        title: "Popunjavanje temporalnih jama",
        path: "popunjavanje-temporalnih-jama",
      },
    ],
  },
  {
    category: "Regenerativni Tretmani",
    links: [
      {
        title: "Zatezanje Kože Kolena i Laktova",
        path: "zatezanje-koze-kolena-laktova",
      },
      { title: "PRP Tretman", path: "prp-tretman" },
      { title: "Kolagen Stimulatori", path: "kolagen-stimulatori" },
      { title: "Biorevitalizacija", path: "biorevitalizacija" },
      { title: "RRS Long Lasting", path: "rrs-long-lasting" },
      { title: "Profhilo Tretman", path: "profhilo-tretman" },
      { title: "Mezoterapija – Hidratacija", path: "mezoterapija" },
      { title: "Lipoliza", path: "lipoliza" },
      { title: "Dermapen + Egzozomi", path: "dermapen-egzozomi" },
    ],
  },
  {
    category: "Hemijski Pilinzi",
    links: [
      { title: "Glikolni Piling", path: "glikolni-piling" },
      { title: "Azelaični piling", path: "azelaicni-piling" },
      { title: "Jessner Piling", path: "jessner-piling" },
      { title: "Salicilni piling", path: "salicilni-piling" },
      { title: "Mlečni piling", path: "mlecni-piling" },
      { title: "Multi Peel Piling", path: "multi-peel-piling" },
      { title: "PRX T-33 Tretman", path: "prx-t-33" },
    ],
  },
  {
    category: "Masaže",
    links: [
      { title: "Masaža Rukama", path: "masaza-rukama" },
      { title: "Masaža Limfna Drenaza", path: "masaža-limfna-drenaža" },
      {
        title: "Masaža vrata, glave i ramena",
        path: "masaža-vrata-glave-i-ramena",
      },
      { title: "Opuštajuća masaža", path: "opustajuća-masaža" },
      { title: "Opšta masaža", path: "opšta-masaža" },
      { title: "Bukalna masaža", path: "bukalna-masaža" },
      { title: "Visceralna masaža", path: "visceralna-masaža" },
    ],
  },
  {
    category: "Estetski Tretmani",
    links: [
      { title: "Nefertiti Lift", path: "nefertiti-lift" },
      { title: "Dermapiling", path: "dermapiling" },
      { title: "Higijenski tretman lica", path: "higijenski-tretman" },
      { title: "Higijenski tretman leđa", path: "higijenski-tretman-ledja" },
    ],
  },
  {
    category: "Laserski Tretmani",
    links: [
      { title: "Laserska Epilacija", path: "laserska-epilacija" },
      { title: "DPL Tretman", path: "dpl-tretman" },
      { title: "Karbon Piling", path: "karbon-piling" },
      {
        title: "Neoderma Bio Peeling Floret Edition",
        path: "neoderma-bio-peeling-floret-edition",
      },
    ],
  },
  {
    category: "Botoks Tretmani",
    links: [
      { title: "Botoks za Hiperhidrozu", path: "hiperhidroza" },
      { title: "Botoks za Migrenu", path: "botoks-migrena" },
    ],
  },
  {
    category: "IV Terapija",
    links: [{ title: "IV Terapija – Hidratacija", path: "iv-terapija" }],
  },
];

const MobileNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  useEffect(() => {
    gsap.set(".main-menu", { x: "-100%" });
    gsap.set(".sub-menu", { x: "100%" });

    gsap.to(".main-menu", {
      x: isMenuOpen ? "0" : "-100%",
      duration: 0.2,
      ease: "power2.out",
    });
  }, [isMenuOpen]);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);
  useEffect(() => {
    if (isSubMenuOpen) {
      gsap.to(".sub-menu", {
        x: "0",
        duration: 0.2,
        ease: "power2.out",
      });
    } else {
      gsap.to(".sub-menu", {
        x: "100%",
        duration: 0.2,
        ease: "power2.out",
      });
    }
  }, [isSubMenuOpen]);
  useEffect(() => {
    console.log("isMenuOpen promenjen:", isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    console.log("isSubMenuOpen promenjen:", isSubMenuOpen);
  }, [isSubMenuOpen]);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsSubMenuOpen(false);
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = () => {
    if (!isMenuOpen) return;
    setIsSubMenuOpen(!isSubMenuOpen);
  };
  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsSubMenuOpen(false);
  };
  return (
    <div className="fixed top-0 w-full bg-salmon p-6">
      <div className="flex items-center text-white">
        <button className="lg:hidden text-white text-4xl" onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={isMenuOpen ? faMinus : faPlus}
            className={`transition-transform duration-500 ease-in-out  ${
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

      {/* Glavni meni */}
      {isMenuOpen && (
        <nav
          className={`main-menu lg:hidden absolute left-0 w-full bg-salmon text-white p-6 transition-transform duration-300 transform`}
        >
          <ul className="space-y-6">
          <li>
              <a href="/" className="block py-2 px-4" >
                Početna
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4" onClick={toggleSubMenu}>
                Tretmani
              </a>
            </li>
           
            <li>
              <a href="/aboutus" className="block py-2 px-4 ">
                O nama
              </a>
            </li>
          </ul>
        </nav>
      )}  

      {/* Submeni */}
      {isSubMenuOpen && (
        <nav className="absolute left-0 w-full bg-salmon text-white p-6 max-h-[80vh] overflow-y-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {treatments.map((category, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-2">
                  {category.category}
                </h3>
                <ul className="space-y-1">
                  {category.links.map((link, idx) => (
                    <li key={idx} className="text-sm">
                      <Link href={`/treatmants/${link.path}`} onClick={closeMenus}>
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </nav>
      
      )}
    </div>
  );
};

export default MobileNavBar;
