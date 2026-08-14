import React from 'react';

const foodVendors = [
  { name: 'Breadbowl', type: 'Vegan & Gluten-Free Eatery', website: 'Visit Website', instagram: 'Instagram' },
  { name: 'Harvest', type: 'Catering Company', website: 'Visit Website', instagram: 'Instagram' },
  { name: 'Mellon', type: 'Brunch Eatery', website: 'Visit Website', instagram: 'Instagram' },
  { name: 'Pomme & Grenadine', type: 'French cuisine', website: 'Visit Website', instagram: 'Instagram' },
  { name: 'Milk & Flour', type: 'French Bakery', website: 'Visit Website', instagram: 'Instagram' },
  { name: 'Hibachi Japanese', type: 'Japanese cuisine', website: 'Visit Website', instagram: 'Instagram' },
  { name: 'Anise', type: 'French cuisine', website: 'Visit Website', instagram: 'Instagram' },
  { name: 'Root & Stem', type: 'Vegan & Gluten-Free Eatery', website: 'Visit Website', instagram: 'Instagram' },
  { name: 'Drift Coffee Bar', type: 'Micro Coffee Roastery', website: 'Visit Website', instagram: 'Instagram' },
];

const FoodVendor = () => {
  return (
    <main className="w-full">
      <section
        className="relative flex min-h-[550px] items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[rgba(210,154,165,0.4)]" />
        <h1 className="relative z-10 text-[clamp(3.5rem,5vw,6rem)] font-light tracking-[-0.04em] text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.25)]">
          Food Trucks
        </h1>
      </section>

      <div className="w-full bg-[#d29aa5] px-6 py-12 text-white">
        <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-3">
          {foodVendors.map((vendor) => (
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

      <div className="w-full bg-[#d29aa5] px-6 py-12">
        <div className="mx-auto max-w-[1200px] flex flex-wrap justify-between gap-8">
          {/* Image 1 - Pancakes */}
          {/* <div className="overflow-hidden rounded-3xl w-full md:w-[calc(33.333%-22px)]">
            <img
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&h=500&q=80"
              alt="Pancakes"
              className="h-[280px] sm:h-[300px] md:h-[320px] w-full object-cover"
            />
          </div> */}
          <div className="group overflow-hidden rounded-3xl w-full md:w-[calc(33.333%-22px)]">
            <img
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&h=500&q=80"
              alt="Pancakes"
              className="h-[280px] sm:h-[300px] md:h-[320px] w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>

          {/* Image 2 - Berry Pie */}
          {/* <div className="overflow-hidden rounded-3xl w-full md:w-[calc(33.333%-22px)]">
            <img
              src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&h=500&q=80"
              alt="Berry Pie"
              className="h-[280px] sm:h-[300px] md:h-[320px] w-full object-cover"
            />
          </div> */}
          <div className="group overflow-hidden rounded-3xl w-full md:w-[calc(33.333%-22px)]">
            <img
              src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&h=500&q=80"
              alt="Berry Pie"
              className="h-[280px] sm:h-[300px] md:h-[320px] w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>

          {/* Image 3 - Chocolate Cake */}
          {/* <div className="overflow-hidden rounded-3xl w-full md:w-[calc(33.333%-22px)]">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&h=500&q=80"
              alt="Chocolate Cake"
              className="h-[280px] sm:h-[300px] md:h-[320px] w-full object-cover"
            />
          </div> */}
          <div className="group overflow-hidden rounded-3xl w-full md:w-[calc(33.333%-22px)]">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&h=500&q=80"
              alt="Chocolate Cake"
              className="h-[280px] sm:h-[300px] md:h-[320px] w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>

          {/* Image 4 - Pizza */}
          {/* <div className="overflow-hidden rounded-3xl w-full md:w-[calc(33.333%-22px)]">
            <img
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&h=500&q=80"
              alt="Pizza"
              className="h-[280px] sm:h-[300px] md:h-[320px] w-full object-cover"
            />
          </div> */}
          <div className="group overflow-hidden rounded-3xl w-full md:w-[calc(33.333%-22px)]">
            <img
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&h=500&q=80"
              alt="Pizza"
              className="h-[280px] sm:h-[300px] md:h-[320px] w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>

          {/* Image 5 - Asian Dumplings */}
          {/* <div className="overflow-hidden rounded-3xl w-full md:w-[calc(33.333%-22px)]">
            <img
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=600&h=500&q=80"
              alt="Dumplings"
              className="h-[280px] sm:h-[300px] md:h-[320px] w-full object-cover"
            />
          </div> */}
          <div className="group overflow-hidden rounded-3xl w-full md:w-[calc(33.333%-22px)]">
            <img
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=600&h=500&q=80"
              alt="Dumplings"
              className="h-[280px] sm:h-[300px] md:h-[320px] w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>

          {/* Image 6 - Pasta */}
          {/* <div className="overflow-hidden rounded-3xl w-full md:w-[calc(33.333%-22px)]">
            <img
              src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=600&h=500&q=80"
              alt="Pasta"
              className="h-[280px] sm:h-[300px] md:h-[320px] w-full object-cover"
            />
          </div> */}
          <div className="group overflow-hidden rounded-3xl w-full md:w-[calc(33.333%-22px)]">
            <img
              src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=600&h=500&q=80"
              alt="Pasta"
              className="h-[280px] sm:h-[300px] md:h-[320px] w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>

        </div>
      </div>
    </main>
  );
};

export default FoodVendor;
