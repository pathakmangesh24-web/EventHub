import React from 'react';

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
            <button className="mt-6 rounded-[10px] border border-slate-700 bg-[#4c3a2f] px-8 py-4 text-lg font-medium text-white transition hover:bg-[#362b24]">
              See Our Vendors
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
