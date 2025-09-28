"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  format?: Intl.NumberFormatOptions;
  className?: string;
}

export function AnimatedNumber({ 
  value, 
  duration = 400, 
  format = { style: "currency", currency: "USD" },
  className 
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const startValue = displayValue;
    const endValue = value;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      const currentValue = startValue + (endValue - startValue) * easeOutCubic;
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    if (startValue !== endValue) {
      requestAnimationFrame(animate);
    }
  }, [value, duration]);

  const formattedValue = new Intl.NumberFormat('en-US', format).format(displayValue);

  return (
    <motion.span
      className={className}
      key={value} // This will trigger a re-render when value changes
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {formattedValue}
    </motion.span>
  );
}
