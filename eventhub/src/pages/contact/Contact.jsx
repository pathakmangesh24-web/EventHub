import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section
        className="relative h-[510px] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245, 166, 75, 0.72), rgba(245, 166, 75, 0.72)), url('https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Information */}
      <section className="mx-auto max-w-6xl px-6 py-8 text-center">

        <div className="space-y-2 text-[16px] leading-6">
          <p>888 Griffiths Way, Themeland ML 12345</p>
          <p>Tel: (987) 654-3210</p>
          <p>
            Email:{" "}
            <a
              href="mailto:kirandighe1945@gmail.com"
              className="text-blue-600 hover:underline"
            >
              kirandighe1945@gmail.com
            </a>
          </p>
        </div>

        {/* Opening Hours */}
        <div className="mt-12 space-y-2 text-[16px]">
          <p className="font-medium">Open Hours:</p>
          <p>Monday-Friday: 9:00AM-7:00PM</p>
          <p>Saturday: 10:30AM-8:00PM</p>
          <p>Sunday: Closed</p>
        </div>

      </section>

      {/* Contact Form */}
      <section className="mx-auto max-w-5xl px-6 pb-12">

        <form className="space-y-7">

          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="mb-2 block text-[16px] font-bold"
            >
              First Name*
            </label>

            <input
              id="firstName"
              type="text"
              className="h-[50px] w-full rounded border border-gray-300 px-4 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="mb-2 block text-[16px] font-bold"
            >
              Last Name*
            </label>

            <input
              id="lastName"
              type="text"
              className="h-[50px] w-full rounded border border-gray-300 px-4 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-[16px] font-bold"
            >
              Email*
            </label>

            <input
              id="email"
              type="email"
              className="h-[50px] w-full rounded border border-gray-300 px-4 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-[16px] font-bold"
            >
              Message*
            </label>

            <textarea
              id="message"
              rows="5"
              className="w-full resize-y rounded border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded-xl bg-[#4b382e] px-20 py-4 text-lg font-medium text-white transition hover:bg-[#382920] active:scale-95"
            >
              Submit
            </button>
          </div>

        </form>
      </section>

      {/* Back To Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white shadow-lg transition hover:bg-blue-700"
        aria-label="Back to top"
      >
        ↑
      </button>

    </div>
  );
}

export default Contact;