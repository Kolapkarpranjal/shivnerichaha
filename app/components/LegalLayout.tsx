"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import { motion } from "framer-motion";

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, children }: LegalLayoutProps) {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />

      <motion.main
        className="max-w-6xl mx-auto px-6 py-16"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-maroon-800 mb-6 text-center">
          {title}
        </h1>
        <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
          {children}
        </div>
      </motion.main>

      <Footer />
    </div>
  );
}
