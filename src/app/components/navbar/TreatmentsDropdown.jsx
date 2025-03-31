import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import treatments1 from "@/app/data/treatments1.json";
import treatmantCategories from "@/app/data/treatmantCategories.json";
import { motion } from "framer-motion";


// Funkcija za grupisanje tretmana prema headlineId
const groupTreatmentsByHeadline = (treatments, categories) => {
  return treatments.reduce((acc, treatment) => {
    const headlineId = treatment.headlineId;
    const categoryName =
      categories.find((category) => category.id === headlineId)?.title || "N/A";
    if (categoryName === "N/A") {
    }
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(treatment);
    return acc;
  }, {});
};

const TreatmentsDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Grupisanje tretmana po kategorijama
  const groupedTreatments = groupTreatmentsByHeadline(
    treatments1,
    treatmantCategories
  );

  return (
    <div
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <div className="flex flex-row items-center space-x-2">
        <p className="items-center cursor-pointer">TRETMANI</p>
        <FontAwesomeIcon
          icon={faChevronDown}
          size="xs"
          className={`transition-transform duration-200 ${
            showDropdown ? "rotate-0" : "rotate-180"
          }`}
        />
      </div>
      {showDropdown && (
        <motion.div
          className={`absolute left-0 w-full bg-salmon shadow-lg z-10 py-6  border-b-white border-b-2 ${
            showDropdown ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          } origin-top`}
          initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="container mx-auto px-8 transition-all">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
              <div className="w-full md:w-1/4">
                <h3 className="text-xl font-bold mb-4">Tretmani</h3>
                <Image
                  width={200}
                  height={500}
                  src="/images/gallery/galery6.jpg"
                />
              </div>
              <div className="max-h-[900px] grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-28">
                {Object.entries(groupedTreatments)
                  .sort((a, b) => b[1].length - a[1].length)
                  .map(([category, treatments]) => (
                    <div key={category} className="mb-6 flex flex-col w-full">
                      <div className="w-full">
                        <h4 className="text-lg font-semibold mb-2 text-left">
                          {category}
                        </h4>
                      </div>

                      <div className="w-full pl-0">
                        {treatments.map((treatment, index) => (
                          <div
                            key={index}
                            className="text-left mx-0 p-0 text-sm"
                          >
                            <Link
                              href={`/treatmants/${treatment.id}`}
                              className="text-left"
                            >
                              {treatment.headline}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default TreatmentsDropdown;
