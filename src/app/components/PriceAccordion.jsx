"use client"
import React, { useState } from 'react';
import QuoteBanner from './QuoteBanner';

const PriceAccordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='bg-zinc-100 min-h-screen min-w-full'>
      <div className="accordion w-2/4 mx-auto pt-56 pb-72" id="accordion-flush">
        <div className='flex flex-col mb-16'>
          <p className='text-center text-2xl font-serif text-violet-950 '>
            U klinici <span className='text-customGold text-3xl font-serif italic'>Ego Aesthetics</span> koriste se samo sigurni i visokokvalitetni proizvodi, koja su prošli zvaničnu registraciju i sertifikaciju u Ministarstvu zdravlja Srbije.
          </p>
        </div>
        
        {data.categories.map((category, index) => (
          <div key={index}>
            <p className='text-2xl font-serif' id={`accordion-flush-heading-${index}`}>
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium hover:text-customGold text-fuchsia-950 border-b border-customGold gap-3"
                onClick={() => handleToggle(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`accordion-flush-body-${index}`}
              >
                <span className='  text-2xl'>{category.name}</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 shrink-0 transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={activeIndex === index ? "M1 1l4 4 4-4" : "M9 5l-4-4-4 4"}
                  />
                </svg>
              </button>
            </p>
            <div
              id={`accordion-flush-body-${index}`}
              className={`accordion-content ${activeIndex === index ? 'expanded' : 'collapsed'}`}
              style={{
                maxHeight: activeIndex === index ? '800px' : '0',
                padding: activeIndex === index ? '2px' : '0',
                transition: 'max-height 1.5s ease, padding 0.5s ease', // Adjust timing as needed
                overflow: 'hidden',
              }}
              aria-labelledby={`accordion-flush-heading-${index}`}
            >
              <div className="table-container">
                <table className="w-full text-left">
                  <tbody>
                    {category.services.map((service, idx) => (
                      <tr key={idx} className="text-yellow-600 font-serif p-3 hover:bg-zinc-50 hover:shadow-md flex border-b-2 hover:border-b-0">
                        <td className="py-2 flex-1  font-bold text-violet-950">{service.name}</td>
                        <td className="py-2 flex-1 justify-center text-fuchsia-950">{service.duration}</td>
                        <td className="py-2 mr-4 flex-2 justify-end font-serif text-customGold text-xl">{service.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Novi div koji ne zavisi od accordiona */}
      <div className="some-other-content mt-40">
        {/* Vaš sadržaj koji neće biti pomeran od strane accordiona */}
        <QuoteBanner />
        <img src='/images/logo1.png' alt='Logo' />
      </div>
    </div>
  );
};

export default PriceAccordion;