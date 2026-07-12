import React, { useEffect, useMemo, useState } from 'react';



const BackgroundRippleEffect = ({ cellSize = 56 }) => {
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [activeCell, setActiveCell] = useState(null);

  useEffect(() => {
    const updateViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  const rows = Math.ceil(viewport.height / cellSize) + 2;
  const cols = Math.ceil(viewport.width / cellSize) + 2;

  const cells = useMemo(() => Array.from({ length: rows * cols }, (_, idx) => idx), [rows, cols]);

  useEffect(() => {
    const isRippleBlocked = (target) => {
      if (!(target instanceof Element)) {
        return false;
      }
      return Boolean(target.closest('[data-disable-ripple="true"]'));
    };

    const updateActiveCell = (clientX, clientY) => {
      const row = Math.floor(clientY / cellSize);
      const col = Math.floor(clientX / cellSize);

      setActiveCell({ row, col });
    };

    const handleMouseMove = (event) => {
      if (isRippleBlocked(event.target)) {
        setActiveCell(null);
        return;
      }
      updateActiveCell(event.clientX, event.clientY);
    };

    const handleMouseLeave = () => {
      setActiveCell(null);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cellSize]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 30% 20%, rgba(226, 232, 240, 0.45), transparent 40%), radial-gradient(circle at 80% 70%, rgba(203, 213, 225, 0.35), transparent 42%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
          width: cols * cellSize,
          height: rows * cellSize,
        }}
      >
        {cells.map((idx) => {
          const rowIdx = Math.floor(idx / cols);
          const colIdx = idx % cols;
          const isActive = activeCell?.row === rowIdx && activeCell?.col === colIdx;

          return (
            <div
              key={idx}
              className="border-[0.5px] border-slate-200/70 transition-colors duration-150"
              style={{
                backgroundColor: isActive ? 'rgba(51, 65, 85, 0.2)' : 'rgba(255, 255, 255, 0.3)',
                boxShadow: isActive ? 'inset 0 0 24px rgba(15, 23, 42, 0.2)' : 'none',
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BackgroundRippleEffect;
