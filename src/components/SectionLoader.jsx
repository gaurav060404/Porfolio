import { motion } from "motion/react";

export function SectionLoader() {
  return (
    <div className="flex items-center justify-center min-h-[200px] py-20">
      <div className="relative">
        {/* Outer ring */}
        <motion.div 
          className="w-16 h-16 border-2 border-royal/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner ring */}
        <motion.div 
          className="absolute top-2 left-2 w-12 h-12 border-2 border-lavender rounded-full border-t-transparent"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Center dot */}
        <motion.div 
          className="absolute top-1/2 left-1/2 w-2 h-2 bg-mint rounded-full transform -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

export default SectionLoader;
