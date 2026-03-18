import { motion } from "framer-motion";
import brandLogo from "../assets/tanukrit_logo_navbar.webp";

const LoadingSection = ({ className = "" }) => {
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center overflow-hidden ${className}`}>
      <div className="w-full h-full flex flex-col items-center justify-center">
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
          className="w-[80%] h-[80%] flex items-center justify-center"
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