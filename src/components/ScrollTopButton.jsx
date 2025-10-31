import React, { useEffect, useState, useRef } from 'react';
import { FiChevronUp } from 'react-icons/fi';

export default function ScrollTopButton() {
  const [show, setShow] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const threshold = window.innerHeight * 0.6; 
        setShow(window.scrollY > threshold);
        ticking.current = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toTop = () => {
    const opts = { top: 0, left: 0, behavior: 'smooth' };
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(opts);
    }
  };

  return (
    <button
      type="button"
      className="scroll-top"
      aria-label="Прокрутити вгору"
      data-visible={show}
      onClick={toTop}
    >
      <FiChevronUp size={24} />
    </button>
  );
}
