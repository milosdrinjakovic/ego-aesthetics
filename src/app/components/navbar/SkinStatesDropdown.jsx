// SkinStatesDropdown.jsx
import React, { useState } from "react";
import { useMenu } from "@/app/context/MenuProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import ConditionsDrawery from "./ConditionsDrawery";

const SkinStatesDropdown = ({  toggleSubmenu,toggleMenu }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <div className="flex flex-row items-center space-x-2">
        <div className="flex flex-col md:flex-row md:items-center">
          <p className="items-center cursor-pointer md:flex hidden ">
            STANJA KOŽE
          </p>
          <FontAwesomeIcon
            icon={showDropdown ? faChevronDown : faChevronUp}
            size="xs"
            className="hidden  md:pl-2 md:flex"
          />
        </div>
      </div>
      {showDropdown && <ConditionsDrawery />}
      <div className="md:hidden">
        <ConditionsDrawery
          toggleSubmenu={toggleSubmenu}
          toggleMenu={toggleMenu}
        />
      </div>
      
    </div>
  );
};

export default SkinStatesDropdown;
