import React, { useState } from 'react'

const CircularProgress = ({ progress , size ,thikeness, opacity , top , left}) => {
    // The circumference of the circle (2 * PI * radius)
    const radius = 34;
    const circumference = 2 * Math.PI * radius;
  
    // Calculate the stroke offset based on the progress
    const strokeOffset = circumference - (circumference * progress) / 100;
  
    return (
      <div style={{ position: 'absolute', width: `${size}px`,opacity:opacity, height: `${size}px` ,top:top ,left:left, transition:" all 1s ease"}}>
        <svg width={size} height={size} viewBox={`0 0 ${size+30} ${size+30}`} xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(-90deg)' }}>
          {/* Background Circle */}
          <circle
            cx={size/2+15}
            cy={size/2+15}
            r={radius}
            stroke={"#E0E8FF"}
            strokeWidth={thikeness}
            fill="none"
            strokeOpacity="0.25"
            strokeLinecap="round"
          />
          {/* Foreground Circle (Dynamic progress) */}
          <circle
            cx={size/2+15}
            cy={size/2+15}
            r={radius}
            stroke={"#E0E8FF"}
            strokeWidth={thikeness/2}
            fill="none"
            strokeOpacity="0.75"
            strokeDasharray={circumference}
            strokeDashoffset={strokeOffset}
            transition="stroke-dashoffset 0.3s ease"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  };
  
  export default CircularProgress