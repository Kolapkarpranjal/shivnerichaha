"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaTimes } from "react-icons/fa";

interface StateSelectionPopupProps {
  onStateSelect: (state: string) => void;
}

const states = [
  {
    code: "MH",
    name: "Maharashtra",
    capital: "Mumbai",
    color: "from-orange-500 to-red-500"
  },
  {
    code: "GJ", 
    name: "Gujarat",
    capital: "Gandhinagar",
    color: "from-green-500 to-blue-500"
  },
  {
    code: "UP",
    name: "Uttar Pradesh", 
    capital: "Lucknow",
    color: "from-purple-500 to-pink-500"
  }
];

export default function StateSelectionPopup({ onStateSelect }: StateSelectionPopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already selected a state
    const selectedState = localStorage.getItem('selectedState');
    if (!selectedState) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleStateSelect = (stateCode: string) => {
    localStorage.setItem('selectedState', stateCode);
    setIsVisible(false);
    onStateSelect(stateCode);
  };

  const handleClose = () => {
    setIsVisible(false);
    // Set a default state if user closes without selecting
    localStorage.setItem('selectedState', 'MH');
    onStateSelect('MH');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden mx-2 sm:mx-0"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 sm:p-6 text-white relative">
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <FaTimes size={16} className="sm:w-5 sm:h-5" />
              </button>
              <div className="flex items-center gap-2 sm:gap-3 pr-8">
                <FaMapMarkerAlt size={20} className="sm:w-6 sm:h-6" />
                <div>
                  <h2 className="text-lg sm:text-2xl font-bold">Select Your State</h2>
                  <p className="text-orange-100 text-sm sm:text-base">Choose your location for personalized content</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
              <p className="text-gray-600 mb-4 sm:mb-6 text-center text-sm sm:text-base">
                We provide state-specific materials and setup information. Please select your state to continue.
              </p>

              {/* State Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {states.map((state, index) => (
                  <motion.button
                    key={state.code}
                    onClick={() => handleStateSelect(state.code)}
                    className="group relative overflow-hidden rounded-xl sm:rounded-2xl p-4 sm:p-6 text-left transition-all hover:scale-105 hover:shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${state.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <span className="text-xl sm:text-2xl font-bold text-gray-800">{state.code}</span>
                        <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r ${state.color}`}></div>
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{state.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-600">{state.capital}</p>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-400 rounded-xl sm:rounded-2xl transition-colors"></div>
                  </motion.button>
                ))}
              </div>

              {/* Footer Note */}
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-orange-50 rounded-lg sm:rounded-xl border border-orange-200">
                <p className="text-xs sm:text-sm text-orange-800 text-center">
                  <strong>Note:</strong> You can change your state selection anytime from the navigation menu.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
