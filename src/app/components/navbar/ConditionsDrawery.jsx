import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const conditionsData = [
  {
    id: 1,
    title: "Prirodni procesi",
    imgURL:"/images/conditions/ageing-skin.jpg",

    conditions: [
      {
        id: 1,
        title: "Koža ruku",
        description: "Starenje je prirodan proces koji sa sobom nosi mnoge promene u telu...",
        
      },
      {
        id: 2,
        title: "Linije i bore",
        description: "Starenje je prirodan proces koji sa sobom nosi mnoge promene u telu...",
        
      },
      {
        id: 3,
        title: "Suva ili dehidrirana koža",
        description: "Dehidrirana koža je stanje koje se javlja kada u koži nedostaje vode...",
        
      },
      {
        id: 4,
        title: "Gubitak elastičnosti",
        description: "Elastičnost kože je nešto sa čim će se svako suočiti u nekom trenutku svog života...",
        
      }
    ]
  },
  {
    id: 2,
    title: "NEUJEDNAČEN TON KOŽE",
    imgURL:"/images/conditions/blemishes.jpg",

    conditions: [
      {
        id: 1,
        title: "Staračke pege",
        description: "Staračke pege su male, ravne tamne površine na koži...",
        
      },
      {
        id: 2,
        title: "Crvenilo kože",
        description: "Uzroci ovog stanja nisu u potpunosti shvaćeni...",
       
      },
      {
        id: 3,
        title: "Pigmentacija",
        description: "Pigmentacija je široko stanje za negu kože...",
        
      },
      {
        id: 4,
        title: "Oštećenja od sunca",
        description: "Sunce ima dubok uticaj tokom godina izlaganja na koži...",
        
      }
    ]
  },
  {
    id: 3,
    title: "FLEKE NA KOŽI",
    imgURL:"/images/conditions/uneven-skin-tone.jpeg",

    conditions: [
      {
        id: 1,
        title: "Ožiljci od akni",
        description: "Ožiljci od akni se ponekad mogu razviti kao komplikacija akni. Bilo koja vrsta mrlja od akni može dovesti do ožiljaka, ali je češća kada najozbiljnije vrste mrlja (čvorovi i ciste) puknu i oštete obližnju kožu. Ožiljci se takođe mogu pojaviti ako pokupite ili stisnete svoje akne, tako da je važno da to ne radite. Najozbiljniji ožiljci su uzrokovani težim oblicima akni, pri čemu je veća verovatnoća da će čvorovi ostaviti trajne ožiljke nego druge vrste akni.",
        solutions: [
          { id: 1, title: "Dermal Fillers", url: "/treatments/dermal-fillers" },
          { id: 2, title: "Profhilo", url: "/treatments/profhilo" }
        ]
      },
      {
        id: 2,
        title: "Vene na licu",
        description: "Neki ljudi imaju tendenciju da razviju paukove vene više od drugih. Činjenica je da se slomljeni krvni sudovi mogu desiti svakome u bilo kom uzrastu, uključujući i decu. Postoji mnogo uzroka slomljenih krvnih sudova na licu.",
        solutions: [
          { id: 1, title: "Dermal Fillers", url: "/treatments/dermal-fillers" },
          { id: 2, title: "Profhilo", url: "/treatments/profhilo" }
        ]
      },
      
      {
        id: 4,
        title: "Milia",
        description: "Milijumi se javljaju kada keratin ostane zarobljen ispod površine kože. Keratin je jak protein koji se obično nalazi u tkivima kože, kosi i ćelijama noktiju. Milia se može javiti kod ljudi svih nacionalnosti ili uzrasta.",
        solutions: [
          { id: 1, title: "Dermal Fillers", url: "/treatments/dermal-fillers" },
          { id: 2, title: "Profhilo", url: "/treatments/profhilo" }
        ]
      },
      {
        id: 5,
        title: "Začepljene pore",
        description: "Proširene ili začepljene pore su otvori za folikule dlake na vašoj koži. Za ove folikule su vezane lojne žlezde. Ove žlezde proizvode prirodno ulje zvano sebum koje održava vašu kožu vlažnom.",
        solutions: [
          { id: 1, title: "Dermal Fillers", url: "/treatments/dermal-fillers" },
          { id: 2, title: "Profhilo", url: "/treatments/profhilo" }
        ]
      }
    ]
  },
  {

    id: 4,
    title: "OSTALA STANJA",
    imgURL:"/images/conditions/other-conditions.jpg",
    conditions: [
      {
        id: 1,
        title: "Migrene",
        description: "Migrena je obično umerena ili jaka glavobolja koja se oseća kao pulsirajući bol na jednoj strani glave. Mnogi ljudi takođe imaju simptome kao što su mučnina i povećana osetljivost na svetlost ili zvuk.",
        solutions: [
          { id: 1, title: "Dermal Fillers", url: "/treatments/dermal-fillers" },
          { id: 2, title: "Profhilo", url: "/treatments/profhilo" }
        ]
      },
      {
        id: 2,
        title: "Hiperhidroza",
        description: "Hiperhidroza je nenormalno prekomerno znojenje koje nije nužno povezano sa toplotom ili vežbanjem. Možda se znojite toliko da vam se upije kroz odeću ili kaplje sa ruku.",
        solutions: [
          { id: 1, title: "Dermal Fillers", url: "/treatments/dermal-fillers" },
          { id: 2, title: "Profhilo", url: "/treatments/profhilo" }
        ]
      },
      {
        id: 3,
        title: "Celulit",
        description: "Celulit je veoma uobičajeno, bezopasno stanje kože koje uzrokuje kvrgavo meso sa udubljenjem na butinama, bokovima, zadnjici i stomaku.",
        solutions: [
          { id: 1, title: "Dermal Fillers", url: "/treatments/dermal-fillers" },
          { id: 2, title: "Profhilo", url: "/treatments/profhilo" }
        ]
      },
      {
        id: 4,
        title: "Višak masnoće",
        description: "Telo osobe će stvoriti masne ćelije u samo dve razvojne faze u životu. Prva faza se javlja tokom embrionalnog razvoja, a druga faza se javlja kada osoba prođe kroz pubertet.",
        solutions: [
          { id: 1, title: "Dermal Fillers", url: "/treatments/dermal-fillers" },
          { id: 2, title: "Profhilo", url: "/treatments/profhilo" }
        ]
      }
    ]
    }
];

const ConditionsDrawery = ({  toggleSubmenu,toggleMenu }) => {


  return (
    <>
    <div className="condition-drawery absolute left-0 right-0  w-full bg-salmon p-20   z-10 border-white border-b-2  overflow-y-auto max-h-screen">
      <div>
        <button className="flex row items-center md:hidden justify-center" onClick={toggleSubmenu}>
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      size="lg"
                      className="md:hidden pr-4"
                    />
                    <p className="text-3xl">NAZAD</p>
                    
                  </button>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-5 justify-center">
  {conditionsData.map((category) => (
    <div className="flex flex-col items-center" key={category.id}>
      <Image
        src={category.imgURL} 
        width={300}
        height={200}
        style={{ objectFit: "cover", objectPosition: "center" }}
        className="w-full h-[200px]"  // Slike sa punom širinom i fiksnom visinom
        alt={category.title}
      />
      <p className="text-xl md:text-2xl cursor-pointer text-center mt-2">{category.title.toUpperCase()}</p>
      {category.conditions.map((condition) => (
        <div key={condition.id} onClick={toggleMenu}>
          <Link href={`/conditions/${condition.title.split(" ").join("-").toLowerCase()}`} >
            <p className="cursor-pointer hover:text-black font-thin text-center">{condition.title}</p>
          </Link>
        </div>
      ))}
    </div>
  ))}
</div>
      <div className="flex justify-center mt-10">
    <div className="w-2/3 h-[1px] bg-white items-center"></div>
  </div>
      </div>
      
      
    </div>
    <div className="flex justify-center w-1/2 h-0.5 bg-white">

    </div>
    </>
  );
};

export default ConditionsDrawery;
