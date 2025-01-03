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
              className="w-32 h-32 bg-white/10 backdrop-blur-lg rounded-2xl flex flex-col items-center justify-center bg-white border border-[#395b99]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={value}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="text-4xl md:text-5xl font-bold text-[#395b99]"
                >
                  {padNumber(value)}
                </motion.span>
              </AnimatePresence>
              <span className="text-sm text-[#395b99]/80 mt-2">{label}</span>
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
            <div className="w-24 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                }}
              />
            </div>
            <p className="text-white text-lg">Get ready for the reveal</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Background Animation */}
      {/* <div className="fixed inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#395b99] rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div> */}
    </div>
  );
}
