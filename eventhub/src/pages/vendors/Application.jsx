import React from 'react';

const Application = () => {
  return (
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
  );
};

export default Application;
