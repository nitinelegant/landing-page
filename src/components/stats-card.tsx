import { type LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  count: string;
  icon: LucideIcon;
}

export function StatsCard({ title, count, icon: Icon }: StatsCardProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
      <div className="relative hexagon bg-white/10 backdrop-blur-sm p-8 rounded-lg flex flex-col items-center justify-center gap-4 transition duration-200 group-hover:transform group-hover:scale-105">
        <Icon className="w-10 h-10 text-white" />
        <h3 className="text-lg font-semibold text-white text-center">
          {title}
        </h3>
        <p className="text-sm text-purple-200">{count}</p>
      </div>
    </div>
  );
}
