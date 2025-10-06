"use client";



import { useState, useCallback } from "react";
import type { Settings } from "react-slick";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
import { useParams } from "next/navigation";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Award, TrendingUp, Shield } from "lucide-react";
const icons = [Award, TrendingUp, Shield, Star];
import { Sparkles, Quote, Phone, MessageCircle, CheckCircle, Star } from "lucide-react";

import en from "../../locales/en/common.json";
import hi from "../../locales/hi/common.json";
import mr from "../../locales/mr/common.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomePage() {
  const params = useParams();
  const lang = params?.lang as string;
const [active, setActive] = useState(0);
 const { lang: currentLang } = useParams(); 
const handleBeforeChange = useCallback((_: number, next: number) => {
  setActive(next);
}, []);

  let t: any = en;
  if (lang === "hi") t = hi;
  else if (lang === "mr") t = mr;

  const heroImages = ["/images/hero1.png", "/images/herocommon.png", "/images/hero3.jpg", "/images/banner3.png"];

  const galleryImages = [
    { src: "/images/shop1.jpg", title: "Pune Branch - Main Road", description: "Our successful branch in Pune" },
    { src: "/images/shop2.jpg", title: "Mumbai Training Center", description: "Training sessions for franchisees" },
    { src: "/images/shop3.jpg", title: "Nagpur Event", description: "Franchise launch event in Nagpur" },
    { src: "/images/shop4.jpg", title: "New Product Showcase", description: "Our latest tea flavors and products" },
    { src: "/images/shop5.jpg", title: "Thane Branch", description: "Successful branch in Thane" },
    { src: "/images/shop6.jpg", title: "Pune Workshop", description: "Workshop for new franchise owners" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
  };

  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  return (
    <main className="min-h-screen">
      <Head>
        <title>{t.title}</title>
      </Head>

      <Navbar />

{/* Hero Section */}
<section className="relative w-full h-[500px] sm:h-[550px] md:h-[650px] overflow-hidden rounded-b-2xl md:rounded-b-3xl shadow-xl">
  <Slider {...sliderSettings}>
    {heroImages.map((img, idx) => (
      <div key={idx} className="relative h-[500px] sm:h-[550px] md:h-[650px]">
        {/* Background Image */}
        <Image
          src={img}
          alt={`Hero ${idx + 1}`}
          fill
          className="object-cover"
          priority
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content Wrapper */}
        <div className="absolute inset-0 flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-16 py-8 sm:py-10 md:py-0 gap-4 sm:gap-6 md:gap-8">
          
          {/* Left Side: Hero Text */}
          <div className="text-white max-w-xl text-center md:text-left">
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6"
            >
              Premium Franchise Opportunity
            </motion.span>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-6xl font-extrabold mb-4 md:mb-6 drop-shadow-xl tracking-tight leading-tight"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t.title}
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-2xl mb-6 md:mb-8 drop-shadow-md leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {t.subTagline}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 md:px-6 md:py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg flex items-center justify-center gap-2 transform hover:scale-105 transition-all text-sm md:text-base"
              >
                <MessageCircle size={16} className="md:w-[18px] md:h-[18px]" /> {t.applyWhatsapp}
              </a>
              <a
                href="tel:+919876543210"
                className="px-4 py-2.5 md:px-6 md:py-3 bg-white text-orange-600 hover:bg-gray-100 font-semibold rounded-full shadow-lg flex items-center justify-center gap-2 transform hover:scale-105 transition-all text-sm md:text-base"
              >
                <Phone size={16} className="md:w-[18px] md:h-[18px]" /> {t.callNow}
              </a>
            </motion.div>
          </div>

          {/* Right Side: Glass Card (responsive) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="w-full max-w-xs sm:max-w-sm md:w-[320px] bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl p-4 md:p-6 text-left text-white"
          >
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center gap-2">
              <span className="bg-purple-500 p-1.5 md:p-2 rounded-full text-sm md:text-base">📞</span> Apply Now
            </h3>
            <div className="space-y-3 md:space-y-4">
              <a
                href="tel:+918888594800"
                className="flex items-center justify-between bg-white/20 p-2.5 md:p-3 rounded-xl hover:bg-white/30 transition"
              >
                <span className="font-medium text-sm md:text-base">8888594800</span>
                <span className="text-green-400 text-sm">Instant Call</span>
              </a>
              <a
                href="https://wa.me/918888594800"
                className="flex items-center justify-between bg-white/20 p-2.5 md:p-3 rounded-xl hover:bg-white/30 transition"
              >
                <span className="font-medium text-sm md:text-base">WhatsApp</span>
                <span className="text-green-400 text-sm">Chat Now</span>
              </a>
              <div className="flex items-center justify-between bg-white/20 p-2.5 md:p-3 rounded-xl">
                <span className="font-medium text-sm md:text-base">Lasalgaon</span>
                <span className="text-orange-400 text-sm">Nashik</span>
              </div>

              <Link
                href={`/${currentLang}/contact`}
                className="block w-full text-center py-2.5 md:py-3 rounded-xl bg-gradient-to-r from-orange-600/90 via-red-600/80 to-yellow-600/70 font-semibold hover:opacity-90 text-sm md:text-base"
              >
                Fill Complete Form
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    ))}
  </Slider>
</section>


{/* Why Choose Us */}
<section className="relative py-12 md:py-20 px-4 sm:px-6 overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-10 bg-[url('/patterns/dots.svg')] bg-repeat"></div>

  {/* Section Heading */}
  <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 relative z-10">
    <motion.h2
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 md:mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
       {t.whyChooseTitle}  
    </motion.h2>
    <motion.h3
      className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-700 mb-2 md:mb-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      Our Premium Features
    </motion.h3>
    <motion.p
      className="text-gray-600 text-base sm:text-lg leading-relaxed px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      Key benefits that make us the perfect franchise partner for your success
    </motion.p>
  </div>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto relative z-10">
    {t.whyChoose.map((item: { title: string; desc: string }, idx: number) => {
      const Icon = icons[idx % icons.length]; // rotate icons
      return (
        <motion.div
          key={idx}
          className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-orange-100 
                     bg-white/80 backdrop-blur-lg p-6 md:p-8 flex flex-col items-start 
                     hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.2 }}
        >
          {/* Floating Icon */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-tr from-orange-500 to-yellow-400 text-white shadow-md mb-4 md:mb-6"
          >
            <Icon className="w-8 h-8 md:w-10 md:h-10" />
          </motion.div>

          <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-gray-900">
            {item.title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.desc}</p>

          {/* Accent Border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-400"></div>
        </motion.div>
      );
    })}
  </div>
</section>
  {/* Success Stories */}
<section className="py-12 md:py-20 px-4 sm:px-6">
  <motion.h2
    className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 md:mb-14 text-gray-800"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
  >
    {t.successStoriesTitle}
  </motion.h2>

  <div className="max-w-6xl mx-auto">
    {(() => {
      const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        beforeChange: handleBeforeChange,
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 2, centerMode: true, centerPadding: "20px" } },
          { breakpoint: 768, settings: { slidesToShow: 1, centerMode: true, centerPadding: "40px" } },
          { breakpoint: 640, settings: { slidesToShow: 1, centerMode: true, centerPadding: "20px" } },
        ],
      };

      return (
        <Slider {...settings}>
          {t.successStories.map(
            (
              item: { name: string; story: string; role: string; image: string },
              idx: number
            ) => (
              <div key={idx} className="px-2 sm:px-4">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`rounded-xl md:rounded-2xl p-6 md:p-8 flex flex-col items-center text-center transition-all duration-500
                    ${
                      active === idx
                        ? "bg-gradient-to-br from-yellow-100 via-orange-50 to-white border-2 border-yellow-400 shadow-2xl scale-105"
                        : "bg-white border border-gray-200 shadow-md opacity-80 scale-95"
                    }`}
                >
                  {/* Profile Image */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-yellow-400 mb-4 md:mb-6 shadow-lg">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Icon */}
                  <Quote
                    className={`w-8 h-8 md:w-10 md:h-10 mb-3 md:mb-4 ${
                      active === idx ? "text-orange-500" : "text-yellow-400"
                    }`}
                  />

                  {/* Story */}
                  <p
                    className={`italic leading-relaxed mb-4 md:mb-6 transition-colors text-sm md:text-base ${
                      active === idx ? "text-gray-800" : "text-gray-500"
                    }`}
                  >
                    "{item.story}"
                  </p>

                  {/* Name + Role */}
                  <h3
                    className={`font-semibold text-base md:text-lg ${
                      active === idx ? "text-gray-900" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500">{item.role}</p>
                </motion.div>
              </div>
            )
          )}
        </Slider>
      );
    })()}
  </div>
</section>



      {/* Gallery / Success Stories Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-10 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
            📸 Our Success Gallery
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-600 mb-2 md:mb-3">
            Our Success Stories
          </h3>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg px-4">
            Successful Shivneri Tea franchises thriving across the nation. See how our partners are spreading joy and brewing tradition, one cup at a time.
          </p>
        </motion.div>

        {/* Gallery Grid with Captions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-8 md:mb-10">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              className="overflow-hidden rounded-xl md:rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
            >
              <Image
                src={img.src}
                alt={`Gallery ${idx + 1}`}
                width={400}
                height={300}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />
              <div className="bg-white p-3 md:p-4 text-center">
                <h3 className="font-semibold text-gray-800 text-sm md:text-base">{img.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm">{img.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore Button */}
        <div className="flex justify-center">
          <Link
            href={`/${currentLang}/gallery`}
            className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full shadow-lg hover:from-red-500 hover:to-orange-500 transform hover:scale-105 transition-all text-sm md:text-base"
          >
            Explore Our Gallery
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center rounded-2xl md:rounded-3xl max-w-6xl mx-auto my-12 md:my-16 shadow-xl">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 drop-shadow-lg">
            {t.ctaTitle}
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 drop-shadow-md px-4">
            {t.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <a
              href="https://wa.me/919888594800"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-full shadow-lg font-semibold flex items-center justify-center gap-2 transform hover:scale-105 transition-all text-sm md:text-base"
            >
              <MessageCircle size={16} className="md:w-[18px] md:h-[18px]" /> {t.ctaWhatsapp}
            </a>
            <a
              href="tel:+918888594800"
              className="px-6 py-3 bg-white text-orange-600 hover:bg-gray-100 rounded-full shadow-lg font-semibold flex items-center justify-center gap-2 transform hover:scale-105 transition-all text-sm md:text-base"
            >
              <Phone size={16} className="md:w-[18px] md:h-[18px]" /> {t.ctaPhone}
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
