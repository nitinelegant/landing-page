"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  icon: LucideIcon;
  delay: number;
  description: string;
}

export default function FeatureCard({
  title,
  icon: Icon,
  delay,
  description,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.1 }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <div className="p-3 bg-[#ebeef4] rounded-full mb-4">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}
