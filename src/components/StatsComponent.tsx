import React, { useEffect, useState } from "react";

const StatsComponent = () => {
  const stats = [
    { value: 1000, label: "ICP R&D effort/years" },
    { value: 880442, label: "ETH eq. TX/s" },
    { value: 4074418163, label: "Blocks processed" },
  ];

  const [animatedValues, setAnimatedValues] = useState([0, 0, 0]);

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const increment = stat.value / 100; // Number of steps for animation
      const interval = setInterval(() => {
        start += increment;
        setAnimatedValues((prev) => {
          const newValues = [...prev];
          newValues[index] = Math.min(Math.floor(start), stat.value);
          return newValues;
        });

        if (start >= stat.value) {
          clearInterval(interval);
        }
      }, 20); // Animation speed
    });
  }, []);

  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <h2>
            {animatedValues[index].toLocaleString("en-US")}+
          </h2>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsComponent;
