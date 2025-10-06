"use client";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  FileText,
  Shield,
  ScrollText,
  Megaphone,
  Download,
  CheckCircle,
  Scale,
  Eye,
} from "lucide-react";

const sections = [
  {
    id: "agreements",
    title: "Agreements",
    icon: <ScrollText size={20} />,
    description:
      "Official agreements for franchise, dealership, and confidentiality.",
    docs: [
      { name: "Franchise Agreement", href: "/docs/franchise-agreement.pdf" },
      { name: "Dealer Agreement", href: "/docs/dealer-agreement.pdf" },
      { name: "NDA (Mutual)", href: "/docs/nda.pdf" },
    ],
  },
  {
    id: "policies",
    title: "Policies",
    icon: <Shield size={20} />,
    description: "Company policies for compliance and transparency.",
    docs: [
      { name: "Privacy Policy", href: "/docs/privacy-policy.pdf" },
      { name: "Terms of Service", href: "/docs/terms.pdf" },
      { name: "Refund & Cancellation Policy", href: "/docs/refund-policy.pdf" },
    ],
  },
  {
    id: "marketing",
    title: "Marketing Guidelines",
    icon: <Megaphone size={20} />,
    description:
      "Approved brand usage, social media policies, and logo assets.",
    docs: [
      { name: "Brand Guidelines", href: "/docs/brand-guidelines.pdf" },
      { name: "Logo Pack (ZIP)", href: "/docs/logo-pack.zip" },
      { name: "Social Media Policy", href: "/docs/social-media-policy.pdf" },
    ],
  },
  {
    id: "certificates",
    title: "Certificates",
    icon: <CheckCircle size={20} />,
    description: "Legal registrations and quality certifications of Shivneri Tea.",
    docs: [
      { name: "FSSAI License Certificate", href: "/docs/fssai-certificate.pdf" },
      { name: "GST Registration", href: "/docs/gst-certificate.pdf" },
      { name: "Trademark Registration", href: "/docs/trademark.pdf" },
      { name: "MSME (Udyam) Certificate", href: "/docs/msme-certificate.pdf" },
      { name: "ISO 9001 Quality Certificate", href: "/docs/iso-certificate.pdf" },
    ],
  },
  {
    id: "compliance",
    title: "Compliance Documents",
    icon: <Scale size={20} />,
    description:
      "Regulatory compliance documents and operational checklists.",
    docs: [
      { name: "Food Safety Standards Compliance", href: "/docs/food-safety.pdf" },
      { name: "Hygiene Checklist", href: "/docs/hygiene-checklist.pdf" },
      { name: "Employee Code of Conduct", href: "/docs/employee-code.pdf" },
    ],
  },
  {
    id: "legal",
    title: "Legal Notices & Disclaimers",
    icon: <FileText size={20} />,
    description:
      "Official disclaimers and legal notices regarding franchise and brand operations.",
    docs: [
      { name: "Risk Disclaimer", href: "/docs/risk-disclaimer.pdf" },
      { name: "Compliance with Food Safety Laws", href: "/docs/food-law.pdf" },
      { name: "Franchise Earnings Disclaimer", href: "/docs/earnings-disclaimer.pdf" },
    ],
  },
];

export default function DocumentsPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

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
            📑 Shivneri Tea Legal Center
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Access all agreements, policies, certificates, and compliance documents in one place.
          </motion.p>
        </div>
      </section>

      <main className="flex-1 max-w-5xl mx-auto px-6 py-12 space-y-10">
        {/* Agreements and Policies */}
        <div className="flex flex-col md:flex-row gap-6">
          {sections.slice(0, 2).map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="flex-1 bg-white rounded-2xl shadow-md border border-gray-200 p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-orange-100 text-orange-700">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-semibold">{section.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{section.description}</p>
              <ul className="space-y-3">
                {section.docs.map((doc, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-orange-50 transition"
                  >
                    <span className="flex items-center gap-2 text-gray-800 font-medium">
                      <FileText size={18} className="text-orange-600" />
                      {doc.name}
                    </span>
                    <div className="flex gap-3">
                      <a
                        href={doc.href}
                        target="_blank"
                        className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                      >
                        <Eye size={16} /> View
                      </a>
                      <a
                        href={doc.href}
                        download
                        className="text-sm text-orange-600 hover:text-orange-800 flex items-center gap-1"
                      >
                        <Download size={16} /> Download
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Marketing Guidelines + Certificates */}
        <div className="flex flex-col md:flex-row gap-6">
          {sections.slice(2, 4).map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="flex-1 bg-white rounded-2xl shadow-md border border-gray-200 p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-orange-100 text-orange-700">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-semibold">{section.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{section.description}</p>
              <ul className="space-y-3">
                {section.docs.map((doc, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-orange-50 transition"
                  >
                    <span className="flex items-center gap-2 text-gray-800 font-medium">
                      <FileText size={18} className="text-orange-600" />
                      {doc.name}
                    </span>
                    <div className="flex gap-3">
                      <a
                        href={doc.href}
                        target="_blank"
                        className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                      >
                        <Eye size={16} /> View
                      </a>
                      <a
                        href={doc.href}
                        download
                        className="text-sm text-orange-600 hover:text-orange-800 flex items-center gap-1"
                      >
                        <Download size={16} /> Download
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Compliance Documents + Legal Notices & Disclaimers */}
        <div className="flex flex-col md:flex-row gap-6">
          {sections.slice(4, 6).map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="flex-1 bg-white rounded-2xl shadow-md border border-gray-200 p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-orange-100 text-orange-700">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-semibold">{section.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{section.description}</p>
              <ul className="space-y-3">
                {section.docs.map((doc, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-orange-50 transition"
                  >
                    <span className="flex items-center gap-2 text-gray-800 font-medium">
                      <FileText size={18} className="text-orange-600" />
                      {doc.name}
                    </span>
                    <div className="flex gap-3">
                      <a
                        href={doc.href}
                        target="_blank"
                        className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                      >
                        <Eye size={16} /> View
                      </a>
                      <a
                        href={doc.href}
                        download
                        className="text-sm text-orange-600 hover:text-orange-800 flex items-center gap-1"
                      >
                        <Download size={16} /> Download
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
