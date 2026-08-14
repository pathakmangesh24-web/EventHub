import React from "react";
 
function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
 
      {/* Hero Section */}
      <section
        className="relative h-[300px] w-full bg-cover bg-center sm:h-[400px] lg:h-[510px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245, 166, 75, 0.72), rgba(245, 166, 75, 0.72)), url('https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=1600&q=80')",
         }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white drop-shadow-lg sm:text-4xl lg:text-5xl">
            Contact Us
          </h1>
        </div>
      </section>
 
      {/* Contact Information */}
      <section className="mx-auto max-w-6xl px-5 py-8 text-center sm:px-6 lg:py-12">
 
        <div className="space-y-2 text-sm leading-6 sm:text-base">
          <p>888 Griffiths Way, Themeland ML 12345</p>
 
          <p>Tel: (987) 654-3210</p>
 
          <p className="break-words">
            Email:{" "}
            <a
              href="mailto:kirandighe1945@gmail.com"
              className="text-blue-600 hover:underline"
            >
              mukundpatil75145git@gmail.com
            </a>
          </p>
        </div>
 
        {/* Opening Hours */}
        <div className="mt-10 space-y-2 text-sm sm:mt-12 sm:text-base">
          <p className="font-medium">Open Hours:</p>
          <p>Monday-Friday: 9:00AM-7:00PM</p>
          <p>Saturday: 10:30AM-8:00PM</p>
          <p>Sunday: Closed</p>
        </div>
 
      </section>
 
      {/* Contact Form */}
      <section className="mx-auto w-full max-w-5xl px-5 pb-12 sm:px-6 lg:pb-16">
 
        <form className="space-y-6 sm:space-y-7">
 
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="mb-2 block text-sm font-bold sm:text-base"
            >
              First Name*
            </label>
 
            <input
              id="firstName"
              type="text"
              className="h-12 w-full rounded border border-gray-300 px-4 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:h-[50px]"
            />
          </div>
 
          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="mb-2 block text-sm font-bold sm:text-base"
            >
              Last Name*
            </label>
 
            <input
              id="lastName"
              type="text"
              className="h-12 w-full rounded border border-gray-300 px-4 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:h-[50px]"
            />
          </div>
 
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-bold sm:text-base"
            >
              Email*
            </label>
 
            <input
              id="email"
              type="email"
              className="h-12 w-full rounded border border-gray-300 px-4 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:h-[50px]"
            />
          </div>
 
          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-bold sm:text-base"
            >
              Message*
            </label>
 
            <textarea
              id="message"
              rows="5"
              className="w-full resize-y rounded border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            ></textarea>
          </div>
 
          {/* Submit Button */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="w-full rounded-xl bg-[#4b382e] px-8 py-3 text-base font-medium text-white transition hover:bg-[#382920] active:scale-95 sm:w-auto sm:px-20 sm:py-4 sm:text-lg"
            >
              Submit
            </button>
          </div>
 
        </form>
      </section>
 
      {/* Back To Top Button */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-lg transition hover:bg-blue-700 sm:h-12 sm:w-12 sm:text-2xl"
        aria-label="Back to top"
      >
        ↑
      </button>
 
<div class="h-[500px] w-full">
  <iframe
    class="h-full w-full border-0"
    src="https://www.google.com/maps?q=Pune,Maharashtra,India&output=embed"
    loading="lazy"
    allowfullscreen>
  </iframe>
</div>
    </div>
  );
}
 
export default Contact;
 