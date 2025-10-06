"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function LegalPage() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const sections = [
    {
      id: "terms",
      title: "Terms & Conditions",
      content: `Welcome to Shivneri Tea! By accessing our website, you agree to the following terms and conditions...`,
    },
    {
      id: "privacy",
      title: "Privacy Policy",
      content: `At Shivneri Tea, your privacy is important to us. We collect and use personal data responsibly...`,
    },
    {
      id: "cookies",
      title: "Cookie Policy",
      content: `We use cookies to enhance your browsing experience. By continuing to use our website, you consent to our cookie policy...`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <Head>
        <title>Legal Pages - Shivneri Tea</title>
      </Head>

      <Navbar />

      {/* Hero */}
      <section className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 flex flex-col justify-center items-center text-center px-6 md:px-12">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Legal Pages
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-white max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Terms & Conditions, Privacy Policy, and Cookie Policy
          </motion.p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="bg-white shadow-md sticky top-16 z-40 py-4 px-6 max-w-5xl mx-auto rounded-md mb-12 flex justify-center gap-4 flex-wrap">
        {sections.map((sec) => (
          <button
            key={sec.id}
            onClick={() => {
              const el = document.getElementById(sec.id);
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="px-4 py-2 rounded-full font-semibold transition-all bg-orange-100 text-orange-700 hover:bg-orange-200 shadow-sm"
          >
            {sec.title}
          </button>
        ))}
      </section>

      {/* Legal Sections */}
      <section className="max-w-5xl mx-auto px-6 flex flex-col gap-12 mb-20">
        {sections.map((sec) => (
          <motion.div
            key={sec.id}
            id={sec.id}
            className="bg-white rounded-2xl shadow-xl border border-orange-200 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {/* Card Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">{sec.title}</h2>
            </div>

            {/* Card Body */}
            <div className="p-6 md:p-10 text-gray-700 text-base md:text-lg leading-relaxed bg-orange-50">
              {sec.content}
            </div>

            {/* Back to Top */}
            <div className="p-4 flex justify-end">
              <button
                onClick={scrollToTop}
                className="px-4 py-2 bg-orange-100 text-orange-700 font-semibold rounded-full shadow-sm hover:bg-orange-200 transition-all"
              >
                Back to Top
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
