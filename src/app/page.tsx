"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "@/public/assets/images/logo.png";
import Countdown from "@/components/countdown";
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
import AnimatedForm from "@/components/contact-form";
import { Footer } from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const cardData = [
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

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-screen-xl mx-auto flex justify-center pt-8"
        >
          <div className="rounded-full px-6 flex items-center gap-2">
            <span className="text-xl font-semibold">
              <Image src={Logo} alt="Logo" width={150} height={100} />
            </span>
          </div>
        </motion.div>
        {/* Hero Section */}

        <div className="relative hero-section">
          {/* <BackgroundAnimation /> */}
          <div className="max-w-5xl mx-auto px-4 py-20 text-center relative z-10">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-8 text-[#0a0b3b]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              India's Largest Directory of Exhibition, Conference, Organizer and
              Supplier.
            </motion.h1>
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg mb-4 text-[#0a0b3b]">Launch in:</p>
              <Countdown />
            </motion.div>
          </div>
          {/* Curved Section */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg
              viewBox="0 0 1440 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0,288 C480,96,960,384,1440,192 L1440,320 L0,320 Z"
                fill="#395b99"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-primary pt-6 sm:pt-0">
          <div className="max-w-7xl mx-auto px-4 pb-20">
            {/* Card Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {cardData.map((card, index) => (
                <motion.div
                  key={card.title}
                  className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <card.icon className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {card.title}
                  </h3>
                  <p className="text-gray-600">{card.count}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className=" pt-20">
          <AnimatedForm />
        </div>

        <Footer />
      </main>
    </div>
  );
}
