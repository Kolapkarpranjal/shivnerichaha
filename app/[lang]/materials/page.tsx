"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Info, Wallet, StickyNote } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useAppState } from "../../contexts/StateContext";

type MaterialItem = {
  name: string;
  qty: number | string;
  cost: number; // unit cost
  image: string;
};

type MaterialCategory = {
  category: string;
  items: MaterialItem[];
  showItemCosts?: boolean; // ✅ control visibility
  overrideTotal?: number; // ✅ manual total
};

// ✅ Helper to format ₹
const formatCurrency = (amount: number) =>
  `₹${amount.toLocaleString("en-IN")}`;

const materialsData: MaterialCategory[] = [
  {
    category: "Kheteshwar Balaji Company",
    items: [
      { name: "Tik Tok stool", qty: 20, cost: 0, image: "/images/tiktokstool.jpeg" },
      { name: "Tokyo table", qty: 3, cost: 0, image: "/images/tokyotable.jpg" },
      { name: "60 liter Dustbin", qty: 1, cost: 0, image: "/images/60dust1.jpg" },
      { name: "40 liter Dustbin", qty: 1, cost: 0, image: "/images/dust2.jpg" },
      { name: "18¾ liter water jar", qty: 1, cost: 11900, image: "/images/waterjar.jpg" },
      { name: "Gala Broom", qty: 1, cost: 0, image: "/images/galabroom.jpg" },
      { name: "Gala Mop", qty: 1, cost: 0, image: "/images/galamop.jpg" },
    ],
    showItemCosts: true,
  },
  {
    category: "Adinath Kirana",
    items: [
      { name: "vim gel bottle", qty: 2, cost: 200, image: "/images/vimgel.jpg" },
      { name: "Sugar (1KG)", qty: 1, cost: 50, image: "/images/sugar1.webp" },
      { name: "Tea Patti (250gm)", qty: 1, cost: 150, image: "/images/teapatti.jpg" },
      { name: "Nescafe (45g)", qty: 1, cost: 300, image: "/images/nescafe.webp" },
      { name: "Colin (500ml)", qty: 1, cost: 120, image: "/images/colin.jpg" },
      { name: "Lizol (500ml)", qty: 1, cost: 120, image: "/images/lizol.webp" },
      { name: "Comfort (210ml)", qty: 1, cost: 80, image: "/images/comfort.webp" },
      { name: "Dettol Hand Wash", qty: 1, cost: 74, image: "/images/dettolhandwash.jpg" },
      { name: "Wheel Powder (500g)", qty: 1, cost: 30, image: "/images/wheel.jpg" },
      { name: "Bhaiya Powder (200gm)", qty: 1, cost: 20, image: "/images/bhaiyyapow.webp" },
    ],
    showItemCosts: false,
    overrideTotal: 1144,
  },
  {
    category: "Nescafe Gold Blend",
    items: [
      { name: "Nescafe Gold Blend", qty: 1, cost: 950, image: "/images/nescafegold.jpg" },
    ],
    showItemCosts: true,
  },
  {
    category: "Sony Gift Material",
    items: [
      { name: "Milton Thermos (2.5L)", qty: 2, cost: 0, image: "/images/milton1.jpg" },
      { name: "Tray (White)", qty: 1, cost: 0, image: "/images/tray1.jpg" },
      { name: "Banana Tray (Green)", qty: 5, cost: 0, image: "/images/bananatray.jpg" },
      { name: "Barni/Can", qty: 3, cost: 0, image: "/images/barni.png" },
      { name: "Tea Strainer", qty: 4, cost: 0, image: "/images/teastainer.webp" },
      { name: "Scissors", qty: 2, cost: 0, image: "/images/scissor.webp" },
      { name: "Knife", qty: 1, cost: 0, image: "/images/knife.jpg" },
      { name: "Packar/Spatula", qty: 1, cost: 0, image: "/images/spatula.jpg" },
      { name: "Tea Bottle", qty: 2, cost: 0, image: "/images/teabottle.webp" },
      { name: "Gala Ghasani (Wire)", qty: 1, cost: 0, image: "/images/gala.jpg" },
      { name: "Round Spoon", qty: 1, cost: 0, image: "/images/roundspoon.jpg" },
      { name: "Small Wiper", qty: 1, cost: 0, image: "/images/wiper.webp" },
      { name: "Bottle Spoon", qty: 2, cost: 0, image: "/images/bottlespoon.webp" },
      { name: "Milk Container", qty: 1, cost: 0, image: "/images/milkcontainer.jpeg" },
    ],
    showItemCosts: false,
    overrideTotal: 8044,
  },
  {
    category: "Kitchen Materials",
    items: [
      { name: "Gala Scrub", qty: 5, cost: 175, image: "/images/galascrub.jpg" },
      { name: "Air Freshner", qty: 2, cost: 320, image: "/images/aircon.jpg" },
      { name: "Stopwatch", qty: 2, cost: 360, image: "/images/stopwatch.jpg" },
      { name: "Tea Filter Cloth", qty: 1, cost: 1300, image: "/images/FilterClothtea.webp" },
      { name: "Cleaning cloth(24), Apron(2), Side Bag(1)", qty: 3, cost: 950, image: "/images/sidebag.jpeg" },
      { name: "Dustbin (Bag), Tea Parcel Bag", qty: 2, cost: 450, image: "/images/scissor.webp" },
      { name: "Kettle(2), Lighter(1), pala", qty: 3, cost: 1500, image: "/images/lighter.webp" },
      { name: "Coffee Container", qty: 1, cost: 250, image: "/images/coffeecont.jpg" },
      { name: "Water Measurement Mug", qty: 2, cost: 80, image: "/images/watermapping.jpg" },
      { name: "Brass cookware Containers(large & small)", qty: 2, cost: 7300, image: "/images/teacontainerboth.jpg" },
      { name: "Gas Hydraulic Cable", qty: 1, cost: 300, image: "/images/gashydro.webp" },
      { name: "Gas Regulator", qty: 1, cost: 400, image: "/images/gasregultor.jpg" },
      { name: "Shivneri Tea Cups", qty: 100, cost: 3072, image: "/images/tea.png" },
      { name: "Shivneri Frame", qty: 1, cost: 0, image: "/images/board.png" },
      { name: "Krishna Sudama Frame", qty: 1, cost: 0, image: "/images/krishnasudana.jpeg" },
    ],
    showItemCosts: true,
    overrideTotal: 16457,
  },
  {
    category: "Steel Setup",
    items: [
      { name: "Wash Counter + Cash Counter", qty: 1, cost: 0, image: "/images/cashcounter.jpg" },
      { name: "Gas Stove", qty: 1, cost: 0, image: "/images/gasstove.webp" },
      { name: "Wash Basin (two)", qty: 1, cost: 0, image: "/images/washbasin.webp" },
      { name: "Table", qty: 1, cost: 0, image: "/images/tabel.avif" },
      { name: "Cup Tray", qty: 5, cost: 0, image: "/images/traysteel.jpg" },
    ],
    showItemCosts: false,
    overrideTotal: 90000,
  },
  {
    category: "Shivneri Jaggery Masala",
    items: [{ name: "Masala Packets (500g * 60)", qty: 60, cost: 0, image: "/images/gudmasala.jpg" }],
    showItemCosts: false,
    overrideTotal: 30000,
  },
  {
    category: "Shivneri Board",
    items: [{ name: "Company Provided Boards", qty: 2, cost: 0, image: "/images/board.png" }],
    showItemCosts: false,
    overrideTotal: 37000,
  },
];

export default function MaterialsPage() {
  const { selectedState, getStateInfo } = useAppState();
  const stateInfo = getStateInfo(selectedState);
  
  // ✅ Calculate totals (use override if present)
  const categoryTotals = materialsData.map(cat =>
    cat.overrideTotal !== undefined
      ? cat.overrideTotal
      : cat.items.reduce((sum, item) => sum + item.cost, 0)
  );
  const grandTotal = categoryTotals.reduce((acc, val) => acc + val, 0);

  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* Hero Section */}
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
            🛠 Materials & Equipment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Explore all the essential equipment and materials required for your Shivneri Chaha setup in {stateInfo?.name || 'your state'}
          </motion.p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {materialsData.map((cat, i) => (
          <div key={i} className="mb-16">
            {/* Category Heading */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-lg p-6 mb-8 flex flex-col md:flex-row items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-3 rounded-full">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">
                  {cat.category} – Total {formatCurrency(categoryTotals[i])}
                </h2>
              </div>
              <span className="mt-3 md:mt-0 bg-white text-orange-600 font-semibold px-4 py-2 rounded-xl shadow">
                {formatCurrency(categoryTotals[i])}
              </span>
            </div>

            {/* Items Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {cat.items.map((item, j) => (
                <motion.div
                  key={j}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
                >
                  <div className="relative h-40 w-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-orange-500 text-white text-sm px-3 py-1 rounded-full shadow">
                      Qty: {item.qty}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                    {cat.showItemCosts && (
                      <p className="text-sm font-semibold text-orange-600 mt-2">
                        {item.cost > 0 ? formatCurrency(item.cost) : "-"}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Grand Total */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl shadow-lg p-12 text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-4 rounded-full">
              <Wallet className="w-10 h-10 text-white" />
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold">Total Investment</h3>
          <p className="text-5xl font-extrabold mt-4 drop-shadow-lg">
            {formatCurrency(grandTotal)}
          </p>
          <p className="mt-3 text-lg md:text-xl opacity-90">
            (All Materials & Equipment Included)
          </p>
        </div>

        {/* State-specific Notes */}
        <div className="bg-yellow-100 border-l-8 border-yellow-500 rounded-xl shadow p-8">
          <div className="flex items-center gap-3 mb-4">
            <StickyNote className="w-6 h-6 text-yellow-700" />
            <h3 className="text-xl font-bold text-yellow-800">Important Instructions for {stateInfo?.name || 'your state'}</h3>
          </div>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li>After the steel setup is placed there, you will have to install water tap and drainage pipe.</li>
            <li>You will have to buy gas bottle and other things from your place.</li>
            <li>Do not use soap to wash the steel setup as it turns the colour of the steel black.</li>
            <li>Shivneri Jaggery Masala : 500 × 60 = ₹30,000 (Keep in safe & clean place).</li>
            <li>Shivneri Board : ₹37,000 (Company will fit them, but ensure your shop shed/structure is ready).</li>
            <li>The price of boards may change according to the location.</li>
            <li>Arrange water properly before inauguration; without water, the shop will not open.</li>
            <li>Transport charges for materials are your responsibility.</li>
            {selectedState === 'GJ' && (
              <li className="font-semibold text-blue-700">Gujarat specific: Additional permits may be required for food business registration.</li>
            )}
            {selectedState === 'UP' && (
              <li className="font-semibold text-purple-700">Uttar Pradesh specific: Check local municipal requirements for tea stall setup.</li>
            )}
            {selectedState === 'MH' && (
              <li className="font-semibold text-orange-700">Maharashtra specific: Ensure compliance with FSSAI regulations for food business.</li>
            )}
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
