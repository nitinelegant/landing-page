"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getTimeLeft, padNumber } from "@/lib/time";

const TARGET_DATE = new Date("2025-01-31T23:59:59");

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(TARGET_DATE));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(TARGET_DATE));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="  flex flex-col items-center justify-center p-4 ">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8"
      >
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map(({ label, value }) => (
            <motion.div
              key={label}
              className="w-32 h-32 bg-white/10 backdrop-blur-lg rounded-2xl flex flex-col items-center justify-center bg-white border border-[#0a0b3b]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={value}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="text-4xl md:text-5xl font-bold text-[#0a0b3b]"
                >
                  {padNumber(value)}
                </motion.span>
              </AnimatePresence>
              <span className="text-sm text-[#0a0b3b]/80 mt-2">{label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="w-24 h-1 bg-primary/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
