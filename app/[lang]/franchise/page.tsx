"use client";

import { CheckCircle, Phone, FileText } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

// Import translations
import en from "../../../locales/en/common.json";
import hi from "../../../locales/hi/common.json";
import mr from "../../../locales/mr/common.json";

export default function FranchisePage() {
  const params = useParams();
  const lang = (params?.lang as string) || "en";

  // Pick translations
  const translations: any = { en, hi, mr };
  const t = translations[lang];
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
     
      <Navbar />
      {/* ✅ Hero Section */}
<section
  className="relative text-center py-20 px-6 text-white overflow-hidden"
  style={{
    backgroundImage: "url('/images/herocommon.png')", // 👈 your hero image
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark/Gradient Overlay for readability */}
  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-red-600/80 to-yellow-600/70"></div>

  {/* Pattern Overlay */}
  <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern.svg')] bg-cover bg-center"></div>

  {/* Content */}
  <div className="relative z-10">
    <motion.h1
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg"
    > 
Franchise Details

    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-lg md:text-xl max-w-2xl mx-auto"
    >
      
Learn all the rules, fees and procedures of Shivneri Tea Franchise
    </motion.p>
  </div>
</section>
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Franchise Rules */}
        <section>
          <h2 className="text-2xl font-bold text-orange-600 mb-4">
            Franchise Rules
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Free Tea on Shiv Jayanti — Provide free tea to all customers",
              "No Tobacco/Gutkha — Strictly no tobacco, gutkha or smoking",
              "Only Tea & Biscuits — Do not sell other food items",
              "Maintain Quality — Always provide excellent tea and service",
            ].map((rule, i) => (
              <div
                key={i}
                className="flex items-start bg-white rounded-xl shadow p-4"
              >
                <CheckCircle className="text-green-500 w-6 h-6 mt-1 mr-3" />
                <p>{rule}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fee Structure */}
        <section>
          <h2 className="text-2xl font-bold text-orange-600 mb-4">
            Fee Structure
          </h2>
          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-lg font-semibold text-gray-700 mb-2">
              Total Amount
            </p>
            <p className="text-3xl font-bold text-orange-600 mb-4">
              ₹2,00,000 <span className="text-sm font-normal">(GST Included)</span>
            </p>

            <p className="text-lg font-semibold text-gray-700 mb-2">Inclusions</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Brand License (5 years)</li>
              <li>Signboard & Branding</li>
              <li>Initial Masala Stock</li>
              <li>Complete Equipment</li>
              <li>Training & Support</li>
            </ul>
          </div>
        </section>

        {/* Expected Returns */}
        <section>
          <h2 className="text-2xl font-bold text-orange-600 mb-4">
            Expected Returns
          </h2>
          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-lg">
              Expected monthly profit{" "}
              <span className="font-semibold text-green-600">
                ₹15,000 - ₹25,000
              </span>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              * Actual profit depends on location and management
            </p>
          </div>
        </section>

        {/* Training Process */}
        <section>
          <h2 className="text-2xl font-bold text-orange-600 mb-6">
            Training Process
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Lasalgaon Training Center",
                desc: "7 days intensive training — Tea preparation, customer service, business management",
              },
              {
                step: "2",
                title: "Site Setup",
                desc: "Setup at your location — Equipment installation, signboard setup, initial stock",
              },
              {
                step: "3",
                title: "3 Days Onsite Support",
                desc: "Direct guidance — Practical training, problem solving, customer attraction",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex bg-white rounded-xl shadow p-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white text-lg font-bold mr-4">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-orange-600 mb-4">
            {t.franchiseFaq ? "Frequently Asked Questions" : t.faqTitle}
          </h2>
          <div className="space-y-4">
            {(t.franchiseFaq || t.faq).map((faq: any, i: number) => (
              <div key={i} className="bg-white rounded-xl shadow p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-white shadow">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start?
          </h2>
          <p className="mb-6">
            Apply for Shivneri Tea Franchise today and become a successful entrepreneur
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Apply Now
            </button>
            <button className="bg-green-500 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-green-600 transition flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now
            </button>
          </div>
        </section>
        
      </main>
       <Footer />
    </div>
  );
}
