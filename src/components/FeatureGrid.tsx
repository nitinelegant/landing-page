"use client";
import {
  Building2,
  CalendarDays,
  MapPin,
  Users,
  UsersRound,
  Truck,
  BriefcaseIcon,
  FileText,
} from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const features = [
  { title: "Exhibitions", count: "12900 Upcoming", icon: Building2 },
  { title: "Conferences", count: "7689 Upcoming", icon: CalendarDays },
  { title: "Venues", count: "680 Upcoming", icon: MapPin },
  { title: "Exhibition Organizers", count: "1200 Upcoming", icon: Users },
  {
    title: "Conference Organizers (PCO)",
    count: "100 Upcoming",
    icon: UsersRound,
  },
  { title: "Suppliers", count: "123 Upcoming", icon: Truck },
  { title: "Jobs", count: "222 Upcoming", icon: BriefcaseIcon },
  { title: "Tenders", count: "344 Upcoming", icon: FileText },
];

export default function FeatureGrid() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            icon={feature.icon}
            delay={index}
            description={feature.count}
          />
        ))}
      </div>
    </div>
  );
}
