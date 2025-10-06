"use client";

import { motion } from "framer-motion";
import { Leaf, Heart, Users } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { useParams } from "next/navigation";

// ✅ Import all locales
import en from "../../../locales/en/common.json";
import hi from "../../../locales/hi/common.json";
import mr from "../../../locales/mr/common.json";

export default function AboutPage() {
  const params = useParams();
  const lang = params?.lang as string;

  // ✅ Choose correct language JSON
  let t: any = en;
  if (lang === "hi") t = hi;
  else if (lang === "mr") t = mr;

  t = t.about; // focus only on about section

  return (
    <div className="min-h-screen bg-white-700 text-gray-800">
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
            {t.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            {t.heroSubtitle}
          </motion.p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-20 space-y-28">
        {/* Brand Story */}
        <motion.section
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <Image
            src="/images/man2.jpeg"
            alt="Shivneri Tea Story"
            width={400}
            height={600}
            className="rounded-3xl shadow-xl object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold text-orange-600 mb-4">
              {t.brandStoryTitle}
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {t.brandStoryDesc}
            </p>
          </div>
        </motion.section>

        {/* Mission */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
            {t.missionTitle}
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {t.missionDesc}
          </p>
        </motion.section>

         {/* Our Journey Section */}
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="max-w-5xl mx-auto py-20 px-4"
>
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-orange-600">
    {t.journeyTitle || "Our Journey"}
  </h2>
  <p className="text-center text-gray-600 mb-16">
    {t.journeySubtitle || "Our development journey from 2018 to today"}
  </p>

  <div className="relative before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-1 before:h-full before:bg-orange-400">
    {[
      {
        year: "2018",
        title: "Foundation",
        desc: "Started the first Shivneri Tea shop in Lasalgaon",
      },
      {
        year: "2019",
        title: "Expansion",
        desc: "Opened 10 branches in Nashik district",
      },
      {
        year: "2020",
        title: "Innovation",
        desc: "Launched our signature tea blends",
      },
      {
        year: "2022",
        title: "Growth",
        desc: "Reached 50+ outlets across Maharashtra",
      },
      {
        year: "2024",
        title: "Growth",
        desc: "Reached 50+ outlets across Maharashtra",
      },
        {
        year: "2025",
        title: "Growth",
        desc: "Reached 50+ outlets across Maharashtra",
      },

    ].map((item, i) => {
      const isLeft = i % 2 === 0;
      return (
        <div
          key={i}
          className={`mb-12 w-full flex justify-between items-center relative ${
            isLeft ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="w-5/12"></div>
          <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 shadow-lg border-2 border-white">
            <span></span>
          </div>
          <div
            className={`w-5/12 bg-white rounded-xl p-6 shadow-lg ${
              isLeft ? "ml-6 text-left" : "mr-6 text-right"
            }`}
          >
            <h3 className="text-orange-600 font-bold text-xl">{item.year}</h3>
            <h4 className="font-semibold text-gray-800">{item.title}</h4>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        </div>
      );
    })}
  </div>
</motion.section>

        {/* Core Values */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-orange-600 text-center mb-12">
            {t.valuesTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Leaf className="w-12 h-12 text-green-600" />,
                title: t.values.authenticityTitle,
                desc: t.values.authenticityDesc,
              },
              {
                icon: <Heart className="w-12 h-12 text-red-500" />,
                title: t.values.qualityTitle,
                desc: t.values.qualityDesc,
              },
              {
                icon: <Users className="w-12 h-12 text-blue-600" />,
                title: t.values.communityTitle,
                desc: t.values.communityDesc,
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center transition-all hover:shadow-2xl"
              >
                {value.icon}
                <h3 className="text-xl font-semibold mt-5 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Quick Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 text-center"
        >
          {[
            { number: "3", label: "STATE" },
            { number: "25+", label: "CITIES" },
            { number: "25M+", label: "HAPPY FACES" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl p-10 shadow-lg"
            >
              <h3 className="text-4xl font-extrabold text-orange-600 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
