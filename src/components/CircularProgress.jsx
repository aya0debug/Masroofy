import React, { useEffect, useState } from 'react';

const CircularProgress = ({ size, thickness, progress, top, left, opacity, uniqueKey }) => {
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const [strokeOffset, setStrokeOffset] = useState(circumference);

  useEffect(() => {
    const offset = circumference - (progress / 100) * circumference;
    setStrokeOffset(offset);
  }, [progress, circumference, uniqueKey]);

  return (
    <div style={{ position: 'absolute', width: `${size}px`, height: `${size}px`, top: top, left: left, opacity: opacity, transition: 'all 1s ease' }}>
      <svg width={size} height={size} viewBox={`0 0 ${size + 30} ${size + 30}`} xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(-90deg)' }}>
        {/* Background Circle */}
        <circle
          cx={size / 2 + 15}
          cy={size / 2 + 15}
          r={radius}
          stroke="#E0E8FF"
          strokeWidth={thickness}
          fill="none"
          strokeOpacity="0.25"
          strokeLinecap="round"
        />
        {/* Foreground Circle (Dynamic progress) */}
        <circle
          cx={size / 2 + 15}
          cy={size / 2 + 15}
          r={radius}
          stroke="#E0E8FF"
          strokeWidth={thickness / 2}
          fill="none"
          strokeOpacity="0.75"
          strokeDasharray={circumference}
          strokeDashoffset={strokeOffset}
          style={{ transition: 'stroke-dashoffset 1s ease' }}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default CircularProgress;
