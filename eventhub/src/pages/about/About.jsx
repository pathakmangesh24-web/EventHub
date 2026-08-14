import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="w-full bg-[#f4f4f4]">
      <section
        className="relative flex min-h-[500px] items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[rgba(255,255,255,0.25)]" />
        <h1 className="relative z-10 text-[clamp(3.5rem,5vw,6rem)] font-light tracking-[-0.04em] text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.25)]">
          About Us
        </h1>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-[0_15px_30px_rgba(15,23,42,0.04)]">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
              alt="Team meeting"
              className="h-[420px] w-full rounded-[18px] object-cover"
            />
          </div>

          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-light leading-none tracking-[-0.04em] text-slate-800">
              Themeland Night Market
            </h2>
            <p className="text-[1.7rem] italic text-slate-700">Operating since 2020</p>
            <p className="text-lg leading-8 text-slate-700">
              This is a paragraph. You can write your own content here, and fill in the blanks.
              What&apos;s your story and where do you go from here? Tell the world about your business,
              and make this text yours. This is a paragraph. You can write your own content here,
              and fill in the blanks.
            </p>
            <Link
              to="/craft-vendors"
              className="inline-block mt-6 rounded-[10px] border border-slate-700 bg-[#4c3a2f] px-8 py-4 text-lg font-medium text-white transition hover:bg-[#362b24]"
            >
              See Our Vendors
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-light leading-none tracking-[-0.04em] text-slate-800">
              Find the Perfect Gift!
            </h2>
            <p className="text-2xl italic text-slate-700">Handmade with Love</p>
            <p className="text-lg leading-8 text-slate-600">
              Discover unique, handcrafted gifts made with love. Whether you're shopping for a friend, family, or yourself, our vendors offer something special for everyone.
            </p>
            <a
              href="https://in.bookmyshow.com/explore/events"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 rounded-[10px] border border-slate-700 bg-[#4c3a2f] px-8 py-4 text-lg font-medium text-white transition hover:bg-[#362b24]"
            >
              Buy Tickets
            </a>
          </div>

          <div className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-[0_15px_30px_rgba(15,23,42,0.04)]">
            <img
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80"
              alt="Beautifully wrapped handmade gifts"
              className="h-[400px] w-full rounded-[18px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-purple-600 px-6 py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-light text-white">
              Follow Us <a href="https://instagram.com/themelandnm" className="underline hover:opacity-80">@ThemelandNM</a>
            </h2>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {/* Image 1 - Food */}
            <div className="min-w-[260px] flex-shrink-0 overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=400&h=260&q=80"
                alt="Food vendor"
                className="h-[260px] w-full object-cover"
              />
            </div>

            {/* Image 2 - Ceramics */}
            <div className="min-w-[260px] flex-shrink-0 overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=400&h=260&q=80"
                alt="Ceramic bowls"
                className="h-[260px] w-full object-cover"
              />
            </div>

            {/* Image 3 - Winter Event */}
            <div className="min-w-[260px] flex-shrink-0 overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&h=260&q=80"
                alt="Winter celebration"
                className="h-[260px] w-full object-cover"
              />
            </div>

            {/* Image 4 - Community */}
            <div className="min-w-[260px] flex-shrink-0 overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&h=260&q=80"
                alt="Community gathering"
                className="h-[260px] w-full object-cover"
              />
            </div>

            {/* Image 5 - Handmade */}
            <div className="min-w-[260px] flex-shrink-0 overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=400&h=260&q=80"
                alt="Handmade crafts"
                className="h-[260px] w-full object-cover"
              />
            </div>

            {/* Image 6 - Market */}
            <div className="min-w-[260px] flex-shrink-0 overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=400&h=260&q=80"
                alt="Market vibes"
                className="h-[260px] w-full object-cover"
              />
            </div>

            {/* Image 7 - Event */}
            <div className="min-w-[260px] flex-shrink-0 overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&h=260&q=80"
                alt="Event celebration"
                className="h-[260px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
