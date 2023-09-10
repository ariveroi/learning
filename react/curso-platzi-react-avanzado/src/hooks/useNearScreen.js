import { useEffect, useState, useRef } from "react";

export const useNearScreen = () => {
  const ref = useRef(null); //captura el elemento del DOM
  const [show, setShow] = useState(false);
  useEffect(() => {
    // Cargamos solo cuando necesitamos el polyfill para los navegadores que no soportan el Intersection Observer
    Promise.resolve(
      typeof window.IntersectionObserver !== undefined
        ? window.IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });

      observer.observe(ref.current);
    });
  }, [ref]);

  return [show, ref];
};
