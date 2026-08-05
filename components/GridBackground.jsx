import React from 'react';

const GridBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-white">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.07), transparent 50%), radial-gradient(circle at 85% 70%, rgba(168, 85, 247, 0.05), transparent 45%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(100, 116, 139, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(100, 116, 139, 0.08) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
    </div>
  );
};

export default GridBackground;
