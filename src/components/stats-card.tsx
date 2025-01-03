import { type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface StatsCardProps {
  title: string;
  count: string;
  icon: LucideIcon;
}

export function StatsCard({ title, count, icon: Icon }: StatsCardProps) {
  return (
    <motion.div
      className="bg-white border border-[#395b99] p-6 rounded-lg flex flex-col items-center gap-4"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Icon className="w-10 h-10 text-gray-600" />
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{count}</p>
    </motion.div>
  );
}
