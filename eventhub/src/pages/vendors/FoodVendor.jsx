import React from 'react';

const foodVendors = [
  { name: 'Pancake Stack', image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=80' },
  { name: 'Berry Crumble', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80' },
  { name: 'Dessert Delight', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80' },
  { name: 'Pizza Slice', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80' },
  { name: 'Fresh Dumplings', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80' },
  { name: 'Pasta Bowl', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=900&q=80' },
];

const FoodVendor = () => {
  return (
    <main className="w-full bg-[#d29aa5] px-6 py-12">
      <div className="mx-auto grid max-w-[1200px] gap-8 md:grid-cols-3">
        {foodVendors.map((vendor, index) => (
          <div key={index} className="overflow-hidden rounded-[18px] border border-white/30 bg-white/10 shadow-lg backdrop-blur-sm">
            <img src={vendor.image} alt={vendor.name} className="h-[340px] w-full object-cover" />
          </div>
        ))}
      </div>
    </main>
  );
};

export default FoodVendor;
