"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 25,
    hours: 7,
    minutes: 12,
    seconds: 6,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center items-center space-x-2 sm:space-x-4 p-4">
      {timeBlocks.map((block, index) => (
        <motion.div
          key={block.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col items-center"
        >
          <div className="bg-white w-16 sm:w-20 h-16 sm:h-20 rounded-lg shadow-md flex items-center justify-center mb-2">
            <span className="text-2xl sm:text-3xl font-bold text-[#0a0b3b]">
              {String(block.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs sm:text-sm text-gray-600 font-medium">
            {block.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
