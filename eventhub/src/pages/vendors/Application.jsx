import React from 'react';

const Application = () => {
  return (
    <main className="w-full">
      <section
        className="relative flex min-h-[450px] items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[rgba(210,154,165,0.5)]" />
        <div className="relative z-10 text-center">
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-light tracking-[-0.04em] text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.25)]">
            Vendor Applications
          </h1>
          <p className="mt-4 text-lg text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
            For Craft & Food Vendors, please provide the following information to register for our next event.
          </p>
        </div>
      </section>

      <main className="min-h-screen bg-[#f7f7f7] px-5 py-14 text-slate-800">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 space-y-3 text-left">
          <label htmlFor="firstName" className="mt-1 block text-[1.2rem] font-bold">
            First Name*
          </label>
          <input
            id="firstName"
            type="text"
            className="h-12 w-full rounded-md border border-slate-300 bg-white px-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div className="mb-8 space-y-3 text-left">
          <label htmlFor="lastName" className="mt-1 block text-[1.2rem] font-bold">
            Last Name*
          </label>
          <input
            id="lastName"
            type="text"
            className="h-12 w-full rounded-md border border-slate-300 bg-white px-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div className="mb-8 space-y-3 text-left">
          <label htmlFor="email" className="mt-1 block text-[1.2rem] font-bold">
            Email*
          </label>
          <input
            id="email"
            type="email"
            className="h-12 w-full rounded-md border border-slate-300 bg-white px-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div className="mb-8 space-y-3 text-left">
          <label htmlFor="comments" className="mt-1 block text-[1.2rem] font-bold">
            Comments and/or Questions
          </label>
          <textarea
            id="comments"
            rows="5"
            className="w-full resize-y rounded-md border border-slate-300 bg-white px-3 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          ></textarea>
        </div>

        <div className="mb-8 space-y-3 text-left">
          <label htmlFor="requests" className="mt-1 block text-[1.2rem] font-bold">
            Any special requests?
          </label>
          <textarea
            id="requests"
            rows="5"
            className="w-full resize-y rounded-md border border-slate-300 bg-white px-3 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          ></textarea>
        </div>

        <div className="flex justify-center pt-2">
          <button className="rounded-xl bg-[#4d372d] px-10 py-3 text-lg font-medium text-white transition hover:bg-[#382920]">
            Submit
          </button>
        </div>
      </div>
      </main>
    </main>
  );
};

export default Application;
