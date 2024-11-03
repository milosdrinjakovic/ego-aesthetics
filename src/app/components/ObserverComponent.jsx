import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';


const ObserverComponent = ({ children, threshold = 0.5, delay = 0 }) => {
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsInView(true), delay);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, delay]);

  return (
    <div ref={observerRef} className={`transition-opacity ${isInView ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  );
};

export default ObserverComponent;
