'use client'
import { useState, useMemo } from 'react';
import FilterBar from '@/components/inventory/FilterBar';
import CarCard from '@/components/inventory/CarCard';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data for Design (Replace with API fetch later)
const MOCK_CARS = [
  { id: '1', make: 'BMW', model: 'M4 Competition', year: 2023, price: 14500000, image: '/cars/m4.jpg', transmission: 'Auto', fuel: 'Petrol', mileage: '5,200' },
  { id: '2', make: 'Mercedes-Benz', model: 'G-Wagon G63', year: 2022, price: 32000000, image: '/cars/gwagon.jpg', transmission: 'Auto', fuel: 'Petrol', mileage: '12,000' },
  { id: '3', make: 'Audi', model: 'RS7 Sportback', year: 2023, price: 18900000, image: '/cars/rs7.jpg', transmission: 'Auto', fuel: 'Petrol', mileage: '1,500' },
  // Add more mock items here...
];

export default function InventoryPage() {
  const [filters, setFilters] = useState({ query: '', make: 'All Makes', maxPrice: 40000000 });

  const filteredCars = useMemo(() => {
    return MOCK_CARS.filter(car => {
      const matchesQuery = car.model.toLowerCase().includes(filters.query.toLowerCase());
      const matchesMake = filters.make === 'All Makes' || car.make === filters.make;
      const matchesPrice = car.price <= filters.maxPrice;
      return matchesQuery && matchesMake && matchesPrice;
    });
  }, [filters]);

  return (
    <main className="min-h-screen bg-brand-black pt-32 pb-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-brand-silver text-sm uppercase tracking-[0.5em] mb-4">P&J Showroom</h2>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-12">
          ELITE <span className="text-brand-red">COLLECTION</span>
        </h1>

        <FilterBar filters={filters} setFilters={setFilters} />

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCars.length === 0 && (
          <div className="text-center py-20">
            <p className="text-brand-silver text-xl">No vehicles match your criteria. Try adjusting filters.</p>
          </div>
        )}
      </div>
    </main>
  );
}