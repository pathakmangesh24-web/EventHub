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
];

const CraftVender = () => {
  return (
    <main className="w-full">
      <section
        className="relative flex min-h-[550px] items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[rgba(217,167,177,0.4)]" />
        <h1 className="relative z-10 text-[clamp(3.5rem,5vw,6rem)] font-light tracking-[-0.04em] text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.25)]">
          Vendors
        </h1>
      </section>

      <div className="w-full bg-[#d9a7b1] px-6 py-12 text-white">
        <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-3">
        {craftVendors.map((vendor) => (
          <div key={vendor.name} className="space-y-4 py-4 text-center">
            <h3 className="text-[1.8rem] font-normal leading-tight tracking-normal text-white">
              {vendor.name}
            </h3>
            <p className="text-[0.9rem] font-normal text-white/90">{vendor.type}</p>
            <p className="text-[0.9rem] font-bold text-white">Visit Website</p>
            <p className="text-[0.9rem] font-bold text-white">Instagram</p>
          </div>
        ))}
        </div>
      </div>

      <div className="w-full bg-[#d9a7b1] px-6 py-12">
        <div className="mx-auto max-w-[1200px] flex flex-wrap justify-between gap-8">
          {/* Image 1 - Food/Pasta */}
          <div className="overflow-hidden rounded-3xl w-full md:w-[calc(33.333%-22px)]">
            <img
              src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=600&h=500&q=80"
              alt="Food vendor - Pasta"
              className="h-[400px] sm:h-[550px] md:h-[700px] w-full object-cover"
            />
          </div>

          {/* Image 2 - Jewelry */}
          <div className="overflow-hidden rounded-3xl w-full md:w-[calc(33.333%-22px)]">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&h=500&q=80"
              alt="Jewelry vendor"
              className="h-[400px] sm:h-[550px] md:h-[700px] w-full object-cover"
            />
          </div>

          {/* Image 3 - Candies/Sweets */}
          <div className="overflow-hidden rounded-3xl w-full md:w-[calc(33.333%-22px)]">
            <img
              src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&h=500&q=80"
              alt="Candy vendor - Sweets"
              className="h-[400px] sm:h-[550px] md:h-[700px] w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#d9a7b1] px-6 py-12">
        <div className="mx-auto max-w-[1200px] flex flex-wrap justify-between gap-8">
          {/* Image 4 - Candies */}
          <div className="overflow-hidden rounded-3xl w-full md:w-[calc(33.333%-22px)]">
            <img
              src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Colorful candies and sweets"
              className="h-[400px] sm:h-[550px] md:h-[700px] w-full object-cover"
            />
          </div>

          {/* Image 5 - Community Event */}
          <div className="overflow-hidden rounded-3xl w-full md:w-[calc(33.333%-22px)]">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&h=500&q=80"
              alt="Community event illustration"
              className="h-[400px] sm:h-[550px] md:h-[700px] w-full object-cover"
            />
          </div>

          {/* Image 6 - Sale */}
          <div className="overflow-hidden rounded-3xl w-full md:w-[calc(33.333%-22px)]">
            <img
              src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&h=500&q=80"
              alt="Sale event"
              className="h-[400px] sm:h-[550px] md:h-[700px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CraftVender;
