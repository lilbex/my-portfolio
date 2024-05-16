import { useEffect, useState, useRef } from "react";

const useInView = () => {
  const [inView, setInView] = useState(false);
  // const ref = useRef<HTMLElement | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return { inView, ref };
};

export default useInView;
