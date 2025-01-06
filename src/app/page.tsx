"use client";
import CountdownTimer from "@/components/CountdownTimer";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/public/assets/images/logo.png";
import FeatureGrid from "@/components/FeatureGrid";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 flex flex-col items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-4xl text-center space-y-6 md:space-y-8">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full flex justify-center pt-4 md:pt-8"
          >
            <div className="px-4 md:px-6 flex items-center gap-2">
              <Image
                src={Logo}
                alt="Logo"
                width={120}
                height={80}
                className="w-auto h-auto md:w-[150px]"
                priority
              />
            </div>
          </motion.div>

          <div className="px-4 md:px-6 text-center relative z-10">
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-[#0a0b3b] leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              India&apos;s Largest Directory of Exhibition, Conference,
              Organizer and Supplier.
            </motion.h1>
            <motion.h6
              className="text-[#0a0b3b] font-semibold text-base md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Coming Soon
            </motion.h6>
          </div>

          <div className="px-4 md:px-0">
            <CountdownTimer />
          </div>

          {/* Feature Cards */}
          <div className="w-full py-8 md:py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800 px-4">
              Why Choose Expocon?
            </h2>
            <FeatureGrid />
          </div>
        </div>
      </main>

      {/* Contact Form Section */}
      <div className="w-full py-12 md:py-16 bg-[#ebeef4]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ContactForm />
        </div>
      </div>

      <Footer />
    </>
  );
}
