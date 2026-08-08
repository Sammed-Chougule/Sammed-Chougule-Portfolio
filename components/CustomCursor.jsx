import React, { useEffect, useRef, useState } from 'react';

const TARGETS =
  'a[href], button, [role="button"], input, textarea, select, label, summary, details, .brutal-btn, .group';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [interactive, setInteractive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (coarse || reduced) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let raf = null;
    const pos = { x: -120, y: -120 };
    const cur = { x: -120, y: -120 };

    const loop = () => {
      pos.x += (cur.x - pos.x) * 0.28;
      pos.y += (cur.y - pos.y) * 0.28;
      cursor.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    const move = (e) => {
      cur.x = e.clientX;
      cur.y = e.clientY;
      setVisible(true);
    };
    const enter = () => setVisible(true);
    const leave = () => setVisible(false);
    const over = (e) => setInteractive(Boolean(e.target && e.target.closest && e.target.closest(TARGETS)));

    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', over, { passive: true });
    document.addEventListener('mouseenter', enter);
    document.addEventListener('mouseleave', leave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseenter', enter);
      document.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <div className={`cursor-scene ${visible ? 'cursor-scene--visible' : ''}`} aria-hidden="true">
      <img
        ref={cursorRef}
        className={`cursor-img ${interactive ? 'cursor-img--pointer' : ''}`}
        src={interactive ? '/pointer.png' : '/cursor.png'}
        alt=""
        draggable="false"
      />
    </div>
  );
};

export default CustomCursor;