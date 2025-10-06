"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useParams } from "next/navigation";

// ✅ Import translations manually
import en from "../../../locales/en/common.json";
import hi from "../../../locales/hi/common.json";
import mr from "../../../locales/mr/common.json";

const galleryImages = [
  // Shops
  {
    src: "/images/lucknowbranh.jpeg",
    category: "shops",
    title: "Lucknow Branch(UP) -Khurram Nagar",
    description: "Our successful branch in Lucknow",
  },
  {
    src: "/images/gangapurbranch.jpeg",
    category: "shops",
    title: "Gangapur Road Nashik(MH) -Vidya Vikas Circle",
    description: "Our successful branch in GangapurRoad Nashik",
  },
  {
    src: "/images/shop2.jpg",
    category: "training",
    title: "Mumbai Training Center",
    description: "Training sessions for franchisees",
  },
  {
    src: "/images/shop3.jpg",
    category: "event",
    title: "Nagpur Event",
    description: "Franchise launch event in Nagpur",
  },
  {
    src: "/images/shop5.jpg",
    category: "shops",
    title: "Thane Branch",
    description: "Successful branch in Thane",
  },
  {
    src: "/images/shop6.jpg",
    category: "training",
    title: "Pune Workshop",
    description: "Workshop for new franchise owners",
  },

  // ✅ Products
  {
    src: "/images/Tea.png",
    category: "products",
    title: "Sugar Tea ",
    description: "High quality Sugar tea",
  },
  {
    src: "/images/Tea.png",
    category: "products",
    title: "Jaggery Tea ",
    description: "High quality jaggery tea powder",
  },
  {
    src: "/images/Tea.png",
    category: "products",
    title: "Black Tea ",
    description: "High quality Black tea",
  },
  {
    src: "/images/LemonTea.png",
    category: "products",
    title: "Lemon Tea",
    description: "Special cups for serving Shivneri Lemon Tea",
  },
  {
    src: "/images/Blackcoffee.png",
    category: "products",
    title: "Black Coffee",
    description: "Special coffee used for Black Coffee",
  },
  {
    src: "/images/coffee.png",
    category: "products",
    title: "Coffee",
    description: "Special cups for serving Shivneri Coffee",
  },
  {
    src: "/images/lassi.png",
    category: "products",
    title: "Shivneri special Lassi",
    description: "High Quality Specil Lassi",
  },
  {
    src: "/images/mattha.png",
    category: "products",
    title: "Shivneri Mattha",
    description: "Shivneri Special Mattha",
  },
];

const categories = ["All", "Shops", "Training", "Event", "Products"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const params = useParams();
  const lang = params?.lang as string;

  // ✅ Pick correct translations
  let t: any = en;
  if (lang === "hi") t = hi;
  else if (lang === "mr") t = mr;

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter(
          (img) => img.category.toLowerCase() === filter.toLowerCase()
        );

  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <Head>
        <title>{t.gallery.title}</title>
      </Head>

      <Navbar />

      {/* ✅ Hero Section */}
      <section
        className="relative text-center py-20 px-6 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/herocommon.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-red-600/80 to-yellow-600/70"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern.svg')] bg-cover bg-center"></div>

        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg"
          >
            {t.gallery.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            {t.gallery.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Filter Options */}
      <section className="py-12 px-6 text-center">
        <div className="flex justify-center gap-4 flex-wrap mb-8">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === cat
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-white border border-gray-300 hover:bg-orange-100"
              }`}
            >
              {t.gallery.categories[cat.toLowerCase() as keyof typeof t.gallery.categories] || cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {filteredImages.map((img, idx) => (
            <motion.div
              key={idx}
              className="overflow-hidden rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={img.src}
                alt={img.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="bg-white p-4 text-center">
                <h3 className="font-semibold text-gray-800">{img.title}</h3>
                <p className="text-gray-500 text-sm">{img.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Explore Gallery Button */}
        <div className="mt-12">
          <a
            href="/full-gallery"
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full shadow-lg hover:from-red-500 hover:to-orange-500 transition-all"
          >
            {t.gallery.exploreButton}
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-10 text-center text-center rounded-3xl max-w-6xl mx-auto my-16 shadow-xl">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t.gallery.ctaTitle}
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {t.gallery.ctaSubtitle}
        </motion.p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="/join-now"
            className="px-6 py-3 bg-white text-green-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-all"
          >
            {t.gallery.joinNow}
          </a>
          <a
            href="tel:+919888594800"
            className="px-6 py-3 bg-green-700 hover:bg-green-800 font-semibold rounded-full shadow-lg text-white transition-all"
          >
            {t.gallery.callNow}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
