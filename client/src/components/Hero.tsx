'use client'
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-brand-black flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('/hero-car.jpg')] bg-cover bg-center opacity-40 grayscale-[50%]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-black" />

      <div className="relative z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter"
        >
          P&J <span className="text-brand-red">AUTOHAUS</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-brand-silver text-xl md:text-2xl uppercase tracking-[0.3em] font-light"
        >
          Driven by Quality. Powered by Trust.
        </motion.p>

        <motion.div 
          className="mt-10 flex gap-4 justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button className="bg-brand-red text-white px-8 py-4 font-bold rounded-sm hover:bg-white hover:text-brand-black transition-all duration-300">
            EXPLORE INVENTORY
          </button>
          <button className="border border-brand-silver text-white px-8 py-4 font-bold rounded-sm hover:bg-brand-silver hover:text-brand-black transition-all">
            BOOK INSPECTION
          </button>
        </motion.div>
      </div>
    </section>
  );
}