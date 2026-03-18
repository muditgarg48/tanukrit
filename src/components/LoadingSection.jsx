import { motion } from "framer-motion";
import brandLogo from "../assets/tanukrit_logo_navbar.webp";

const LoadingSection = ({ className = "" }) => {
  return (
    <div className={`w-full flex flex-col items-center justify-center bg-[#F9F9F9] overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto w-full px-4 flex flex-col items-center justify-center h-full">
        {/* Actual Branded Logo with 100-0-100 Opacity Oscillation */}
        <motion.div
          animate={{
            opacity: [0.7, 0.3, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-32 md:w-48 lg:w-56 aspect-square flex items-center justify-center"
        >
          <img
            src={brandLogo}
            alt="Tanukrit Logo"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingSection;