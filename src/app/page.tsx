import {
  CalendarDays,
  Users,
  MapPin,
  Building2,
  UsersRound,
  Truck,
} from "lucide-react";
import { CountdownTimer } from "@/components/countdown-timer";
import { StatsCard } from "@/components/stats-card";
import { Footer } from "@/components/Footer";

export default function Page() {
  const stats = [
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
  ];

  return (
    <main className="min-h-screen bg-[#1a1a2e] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-teal-600/20" />
      <div className="absolute inset-0 backdrop-blur-3xl" />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-6xl md:text-5xl font-bold text-white  bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 heroTitle">
            India’s Largest Directory of Exhibition, Conference, Organizer and
            Supplier.
          </h1>
        </div>

        <div className="text-center mb-20 mt-10">
          <h1 className="mb-10 text-2xl md:text-4xl font-bold text-white  bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
            Something big is coming soon
          </h1>

          <CountdownTimer />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
        <Footer />
      </div>
    </main>
  );
}
