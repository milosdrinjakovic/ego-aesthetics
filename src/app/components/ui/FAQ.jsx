"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const FAQ = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState(null); // Inicijalizujemo sa null

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col">
      {faqData.map((faq, index) => {
        
        const borderClass = index === 0
          ? "border-t border-b" 
          : index === faqData.length - 1    
          ? "border-b" 
          : "border-b"; 

        return (
          <div key={index} className={`flex flex-col ${borderClass} border-black`}>
            <div
              onClick={() => toggleFAQ(index)}
              className="flex flex-row justify-between items-center w-full cursor-pointer p-3"
            >
              <p>{faq.question}</p>
              <span>
                <FontAwesomeIcon
                  icon={openIndex === index ? faMinus : faPlus}
                  className={`transition-transform duration-500 ease-in-out transform ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
                />
              </span>
            </div>

            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out`}
              style={{
                maxHeight: openIndex === index ? `${document.getElementById(`faq-answer-${index}`)?.scrollHeight}px` : "0",
                overflow: "hidden",
              }}
            >
              <div id={`faq-answer-${index}`} className="text-ellipsis text-left pb-3 flex flex-col">
                <p className="p-1">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
