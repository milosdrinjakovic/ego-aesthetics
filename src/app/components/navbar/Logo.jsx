import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ showNavbar }) => {
  return (
    <Link href="/">
      <div
        className={`md:absolute left-1/2 transform bg-salmon rounded-full -translate-x-1/2 -top-10 w-56 h-56 overflow-hidden z-40 ease-in-out transition duration-400 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="md:block self-start">
          <Image
            src="/images/logo6.png"
            alt="Logo"
            width={110}
            height={70}
            className="ease-in-out mx-auto p-3 mt-8 z-40"
          />
        </div>
      </div>
    </Link>
  );
};

export default Logo;