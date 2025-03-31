import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  return (
    <div className="flex items-center space-x-8 z-10 mr-10 text-white">
      <a
        href="https://www.facebook.com/profile.php?id=61554476676996#"
        className="hover:text-blue-800 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebookF} className="w-8 h-8" />
      </a>
      <a
        href="https://www.instagram.com/ego_aesthetics_clinic/"
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
  );
};

export default SocialIcons;