import React from "react";

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <section
        className="min-h-[545px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="bg-black/70 text-white w-[500px] rounded-2xl p-10 text-center">

          <h1 className="text-4xl font-serif mb-6">
            Themeland Night
          </h1>

          <p className="text-lg font-semibold mb-14">
            Open Every Weekend from March 1 to 31, 2025
          </p>

          <div className="flex justify-center gap-4">

            {/* <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white">
              GET TICKETS
            </button> */}
            <a
              href="https://in.bookmyshow.com/explore/events"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white inline-block"
            >
              GET TICKETS
            </a>

            <a
              href="#craft-market"
              className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black inline-block text-white transition-colors"
            >
              LEARN MORE
            </a>

            
          </div>

        </div>
      </section>


      {/* Cards Section */}
      <section id="craft-market" className="py-10 bg-white scroll-smooth">

        <div className="text-center mb-8">

          <h2 className="text-3xl font-serif text-[#35271f]">
            A Local Craft Market
          </h2>

          <p className="mt-5 text-lg text-[#51453f]">
            Explore the finest local crafts and specialty items in Maryland.
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

          {/* Card 1 */}
          <div className="border rounded-2xl p-4 shadow-sm text-center">

            <img
              src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80"
              className="w-full h-[285px] object-cover rounded-lg"
              alt="Vendors"
            />

            <h3 className="text-2xl font-serif mt-4">
              500+ Vendors
            </h3>

            <p className="mt-4 leading-6">
              Discover a variety of unique items from local artisans and
              entrepreneurs.
            </p>

            <button className="mt-5 bg-[#4a382f] text-white px-10 py-3 rounded-lg">
              LEARN MORE
            </button>

          </div>


          {/* Card 2 */}
          <div className="border rounded-2xl p-4 shadow-sm text-center">

            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
              className="w-full h-[285px] object-cover rounded-lg"
              alt="Food Trucks"
            />

            <h3 className="text-2xl font-serif mt-4">
              Local Food Trucks
            </h3>

            <p className="mt-4 leading-6">
              Savor meals and snacks from our diverse selection of local
              food trucks.
            </p>

            <button className="mt-5 bg-[#4a382f] text-white px-10 py-3 rounded-lg">
              LEARN MORE
            </button>

          </div>


          {/* Card 3 */}
          <div className="border rounded-2xl p-4 shadow-sm text-center">

            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
              className="w-full h-[285px] object-cover rounded-lg"
              alt="Events"
            />

            <h3 className="text-2xl font-serif mt-4">
              Events Schedule
            </h3>

            <p className="mt-4 leading-6">
              Enjoy performances and live entertainment during the event.
            </p>

            <button className="mt-5 bg-[#4a382f] text-white px-10 py-3 rounded-lg">
              LEARN MORE
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;