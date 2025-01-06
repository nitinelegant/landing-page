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
      <main className="min-h-screen bg-gradient-to-br bg-white  flex flex-col items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full flex logo"
        >
          <div className="px-4 md:px-6 flex  gap-2 ">
            <Image
              src={Logo}
              alt="Logo"
              width={150}
              height={100}
              className="w-auto h-auto md:w-[150px]"
              priority
            />
          </div>
        </motion.div>
        <div className="w-full max-w-7xl flex items-center justify-center text-center space-y-6 md:space-y-8 main-container">
          <div>
            <div className="  text-center relative z-10">
              <motion.h1
                className="text-2xl sm:text-3xl md:text-8xl  mb-4 md:mb-8 text-[#0a0b3b] leading-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Coming Soon
              </motion.h1>
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl  mb-4 md:mb-8 text-[#0a0b3b] leading-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                India&apos;s Largest Directory of Exhibition, Conference,
                Organizer and Supplier.
              </motion.h1>
              {/* <motion.h3
                className="text-[#0a0b3b] font-semibold text-base md:text-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Coming Soon
              </motion.h3> */}

              <div className="px-4 md:px-0">
                <CountdownTimer />
              </div>
            </div>
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
        </div>
        {/* Feature Cards */}
        <div className="w-full py-8 md:py-16 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800 px-4">
            Comprehensive Overview of Upcoming Events
          </h2>
          <FeatureGrid />
        </div>
      </main>

      {/* Contact Form Section */}
      <div className="w-full py-12 md:py-16 bg-[#f5f6f8]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ContactForm />
        </div>
      </div>

      <Footer />
    </>
  );
}
