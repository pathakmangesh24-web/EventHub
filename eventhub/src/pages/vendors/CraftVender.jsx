import React from 'react';

const craftVendors = [
  { name: 'Madelyn Yang', type: 'Local Vendor', website: 'Visit Website', instagram: 'Instagram' },
  { name: 'Emily Williams', type: 'Local Vendor', website: 'Visit Website', instagram: 'Instagram' },
  { name: 'Lee Woodworking', type: 'Local Vendor', website: 'Visit Website', instagram: 'Instagram' },
  { name: 'Cooke Crafts', type: 'Local Vendor', website: 'Visit Website', instagram: 'Instagram' },
  { name: 'Wolfe Designs', type: 'Local Vendor', website: 'Visit Website', instagram: 'Instagram' },
  { name: 'Clementine Jewelry', type: 'Local Vendor', website: 'Visit Website', instagram: 'Instagram' },
  { name: 'Figueroa Chocolates', type: 'Local Vendor', website: 'Visit Website', instagram: 'Instagram' },
  { name: 'Violet Pham', type: 'Local Vendor', website: 'Visit Website', instagram: 'Instagram' },
  { name: 'Anise', type: 'French cuisine', website: 'Visit Website', instagram: 'Instagram' },
  { name: 'Pomme & Grenadine', type: 'French cuisine', website: 'Visit Website', instagram: 'Instagram' },
  { name: 'Breadowl', type: 'Vegan & Gluten-Free Bakery', website: 'Visit Website', instagram: 'Instagram' },
  { name: 'Harvest', type: 'Catering Company', website: 'Visit Website', instagram: 'Instagram' },
  { name: 'Mellon', type: 'Brunch Eatery', website: 'Visit Website', instagram: 'Instagram' },
  { name: 'Milk & Flour', type: 'French Bakery', website: 'Visit Website', instagram: 'Instagram' },
  { name: 'Root & Stem', type: 'Vegan & Gluten-Free Eatery', website: 'Visit Website', instagram: 'Instagram' },
  { name: 'Drift Coffee Bar', type: 'Micro Coffee Roastery', website: 'Visit Website', instagram: 'Instagram' },
];

const CraftVender = () => {
  return (
    <main className="w-full bg-[#d9a7b1] px-6 py-12 text-white">
      <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-3">
        {craftVendors.map((vendor) => (
          <div key={vendor.name} className="space-y-4 py-4">
            <h3 className="text-[clamp(2.1rem,2.8vw,3.1rem)] font-light leading-tight tracking-[-0.03em] text-white">
              {vendor.name}
            </h3>
            <p className="text-[1.2rem] italic text-white/90">{vendor.type}</p>
            <p className="text-[1.1rem] underline decoration-white/80 underline-offset-4">Visit Website</p>
            <p className="text-[1.1rem] underline decoration-white/80 underline-offset-4">Instagram</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CraftVender;
