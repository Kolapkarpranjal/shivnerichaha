"use client";
import { motion } from "framer-motion";
import { useState, ChangeEvent, FormEvent } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useParams } from "next/navigation";

// ✅ Import translations
import en from "../../../locales/en/common.json";
import hi from "../../../locales/hi/common.json";
import mr from "../../../locales/mr/common.json";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  city: string;
  zipCode: string;
  message: string;
}

export default function ContactPage() {
  const params = useParams();
  const lang = (params?.lang as string) || "en";

  // Pick translations
  const translations: any = { en, hi, mr };
  const t = translations[lang]?.contact;

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    city: "",
    zipCode: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const response = await fetch("https://brahmand.online:2060/api/contactus/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          city:formData.city,
          contact_number: formData.contactNumber,
          pincode: formData.zipCode,
          message: formData.message,
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error((data as any)?.message || "Submission failed");
      }

      alert((data as any)?.message || "Contact form submitted successfully");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        city: "",
        zipCode: "",
        message: "",
      });
    } catch (error: any) {
      alert(error?.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // ✅ Keep static info (not translated)
  const infoCards = [
    { icon: FaEnvelope, title: "Email Us", lines: ["info@shivneritea.com", "support@shivneritea.com"] },
    { icon: FaPhone, title: "Call Us", lines: ["+91 98765 43210", "+91 91234 56789"] },
    { icon: FaMapMarkerAlt, title: "Visit Us", lines: ["SHIVNERY FARM NEAR LAXMI NIWAS", "AT-BRAMHANGAON TAL-NIPHAD", "NASHIK Pin 422304"] },
  ];

  return (
    <div className="relative">
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
        <div className="absolute inset-0 bg-gradient-to-r from-orange-700/90 via-red-600/80 to-yellow-600/80"></div>
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

      {/* Info Cards */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {infoCards.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-gradient-to-br from-orange-400 to-yellow-400 rounded-3xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 relative overflow-hidden"
            >
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-cover"></div>

              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20 mb-4 z-10 text-white">
                <item.icon size={28} />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-2 z-10 text-gray-900">{item.title}</h3>

              {/* Lines */}
              {item.lines.map((line, i) => (
                <p key={i} className="z-10 text-gray-800">{line}</p>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Form + Map */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-10 space-y-6"
        >
          <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-4 text-orange-600">
            {t.form.title}
          </motion.h3>
          <motion.p variants={itemVariants} className="text-gray-600 mb-6">
            {t.form.subtitle}
          </motion.p>

          {/* Inputs */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder={t.form.firstName}
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500" required />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder={t.form.lastName}
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500" required />
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t.form.email}
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500" required />
            <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder={t.form.contactNumber}
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500" required />
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder={t.form.city}
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500" required />
            <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} placeholder={t.form.zipCode}
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500" required />
          </motion.div>

          <motion.textarea
            variants={itemVariants}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t.form.message}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 h-36" required
          ></motion.textarea>

          <motion.button
            variants={itemVariants}
            type="submit"
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={submitting}
          >
            {t.form.submit}
          </motion.button>
        </motion.form>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-full w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-400"
        >
          <iframe
            className="w-full h-full min-h-[400px] rounded-3xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.310536640847!2d73.856743!3d18.520430!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06c3e6c7c6d%3A0x7f33a6f4f9c1b6b6!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1693893812345"
            frameBorder={0}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-yellow-600 py-12 text-center text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{t.cta.title}</h3>
        <p className="mb-6">{t.cta.subtitle}</p>
        <a
          href="/franchise"
          className="bg-white text-orange-600 font-bold px-6 py-3 rounded-full hover:bg-yellow-100 transition"
        >
          {t.cta.button}
        </a>
      </section>

      <Footer />
    </div>
  );
}
