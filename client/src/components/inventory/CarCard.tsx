'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGasPump, FaCog, FaRoad } from 'react-icons/fa';

interface CarProps {
  car: {
    id: string;
    make: string;
    model: string;
    year: number;
    price: number;
    image: string;
    transmission: string;
    fuel: string;
    mileage: string;
  }
}

export default function CarCard({ car }: CarProps) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      className="bg-brand-darkGrey group relative overflow-hidden rounded-sm border border-white/5 transition-all hover:border-brand-red/50 shadow-2xl"
    >
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image 
          src={car.image} 
          alt={`${car.make} ${car.model}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-brand-red text-white text-[10px] font-bold px-3 py-1 tracking-widest uppercase">
          Available
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-brand-silver text-xs uppercase tracking-widest">{car.year} {car.make}</p>
            <h3 className="text-xl font-bold text-white group-hover:text-brand-red transition-colors">
              {car.model}
            </h3>
          </div>
          <p className="text-brand-red font-bold text-lg">
            KSh {(car.price / 1000000).toFixed(1)}M
          </p>
        </div>

        {/* Specs Icons */}
        <div className="flex justify-between mt-6 border-t border-white/10 pt-4 text-brand-silver text-sm">
          <div className="flex items-center gap-2">
            <FaRoad className="text-brand-red" />
            <span>{car.mileage}km</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCog className="text-brand-red" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaGasPump className="text-brand-red" />
            <span>{car.fuel}</span>
          </div>
        </div>

        <button className="w-full mt-6 bg-transparent border border-brand-red text-brand-red py-3 font-bold uppercase tracking-tighter hover:bg-brand-red hover:text-white transition-all duration-300">
          View Details
        </button>
      </div>
    </motion.div>
  );
}