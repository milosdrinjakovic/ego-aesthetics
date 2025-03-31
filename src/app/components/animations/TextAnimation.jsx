"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation = ({ children }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
            once: false
          },
        }
      );
    }
  }, []);

  return (
    <div ref={textRef} className="animate-text">
      {children}
    </div>
  );
};

export default TextAnimation;