"use client";

import { motion } from "framer-motion";
import {
  Mail,
  ChevronLeft,
  ChevronRight,
  Dribbble,
  Instagram,
  Linkedin,
  Sun,
  CalendarDays,
  Users,
  MapPin,
  Building2,
  UsersRound,
  Truck,
  BriefcaseIcon,
  FileText,
} from "lucide-react";
import Image from "next/image";
import Logo from "@/public/assets/images/logo.png";
import { Button } from "@/components/ui/button";
import Countdown from "@/components/countdown";

import { StatsCard } from "@/components/stats-card";

export default function ComingSoon() {
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
    { title: "Jobs", count: "222 Upcoming", icon: BriefcaseIcon },
    { title: "Tenders", count: "344 Upcoming", icon: FileText },
  ];
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between p-6 relative overflow-hidden">
      {/* Logo */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-screen-xl mx-auto flex justify-center pt-8"
      >
        <div className=" rounded-full px-6   flex items-center gap-2">
          <span className="text-xl font-semibold">
            <Image src={Logo} alt="Logo" width={150} height={100} />
          </span>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center max-w-screen-xl mx-auto"
      >
        <div className="mt-8">
          <h1 className="text-[#395b99] text-6xl font-medium mb-10">
            India’s Largest Directory of <br /> Exhibition, Conference,
            Organizer and Supplier.
          </h1>
          <Countdown />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
      </motion.div>

      {/* Navigation Arrows */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-white/50 backdrop-blur-sm"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-white/50 backdrop-blur-sm"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full max-w-screen-xl mx-auto flex justify-center pb-8 gap-4"
      >
        <Button variant="ghost" size="icon" className="rounded-full bg-white">
          <Dribbble className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full bg-white">
          <Instagram className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full bg-white">
          <Linkedin className="h-5 w-5" />
        </Button>
      </motion.div>

      {/* Dark Mode Toggle */}
      <div className="absolute bottom-4 left-4">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Sun className="h-5 w-5" />
        </Button>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, repeatType: "reverse" },
        }}
        className="absolute left-20 bottom-40"
      >
        <div className="w-16 h-8 bg-green-300 rounded-full transform rotate-45" />
      </motion.div>

      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, repeatType: "reverse" },
        }}
        className="absolute right-20 bottom-40"
      >
        <div className="w-16 h-4 bg-orange-300 rounded-full transform rotate-45" />
      </motion.div>

      <div className="absolute bottom-0 right-0 w-20 h-20 bg-orange-300 rounded-tl-full" />
    </div>
  );
}
