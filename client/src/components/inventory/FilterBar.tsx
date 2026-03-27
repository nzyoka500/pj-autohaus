'use client'

export default function FilterBar({ filters, setFilters }: any) {
  const makes = ["All Makes", "BMW", "Mercedes-Benz", "Audi", "Toyota", "Land Rover"];
  const bodyTypes = ["All Types", "SUV", "Sedan", "Coupe", "Hatchback"];

  return (
    <div className="bg-brand-darkGrey/50 backdrop-blur-md p-6 border border-white/5 sticky top-20 z-30 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Search */}
        <div>
          <label className="text-[10px] uppercase tracking-[0.2em] text-brand-silver mb-2 block">Search Model</label>
          <input 
            type="text" 
            placeholder="e.g. M4 Competition..."
            className="w-full bg-brand-black border border-white/10 p-3 text-white focus:border-brand-red outline-none transition-all"
            onChange={(e) => setFilters({...filters, query: e.target.value})}
          />
        </div>

        {/* Brand Dropdown */}
        <div>
          <label className="text-[10px] uppercase tracking-[0.2em] text-brand-silver mb-2 block">Brand</label>
          <select 
            className="w-full bg-brand-black border border-white/10 p-3 text-white focus:border-brand-red outline-none"
            onChange={(e) => setFilters({...filters, make: e.target.value})}
          >
            {makes.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="text-[10px] uppercase tracking-[0.2em] text-brand-silver mb-2 block">Max Price (KSh)</label>
          <input 
            type="range" 
            min="1000000" 
            max="20000000" 
            step="500000"
            className="w-full accent-brand-red mt-4"
            onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
          />
          <div className="flex justify-between text-[10px] text-brand-silver mt-1">
            <span>1M</span>
            <span>Current: {filters.maxPrice / 1000000}M</span>
            <span>20M+</span>
          </div>
        </div>

        {/* Reset */}
        <div className="flex items-end">
          <button 
            onClick={() => window.location.reload()}
            className="w-full bg-white/5 hover:bg-white/10 text-brand-silver p-3 uppercase text-xs font-bold transition-all"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
}