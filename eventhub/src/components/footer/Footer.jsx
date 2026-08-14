import React from "react";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full bg-gradient-to-r from-[#3d3f41] to-[#15191d] text-white">

      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left Section */}
          <div className="flex flex-col justify-between">

            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center gap-2">

                <div className="text-5xl font-bold leading-none">
                  K
                </div>

                <div className="text-2xl font-bold tracking-[3px]">
                  MANGESH PATHAK
                </div>

              </div>
            </div>

            {/* Copyright */}
            <p className="mt-16 text-sm font-medium">
              © 2025 Mangesh Pathak. All Rights Reserved.
            </p>

          </div>


          {/* Right Section */}
          <div className="flex flex-col">

            {/* Contact Details */}
            <div className="space-y-3 text-sm font-medium">

              {/* Location */}
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
                </svg>

                <span>
                  Walur, Selu, Parbhani
                </span>
              </div>


              {/* Email */}
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>

                <a
                  href="mailto:pathakmangesh24@gmail.com"
                  className="hover:text-blue-400 transition"
                >
                  kirandighe2004@gmail.com
                </a>
              </div>


              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.16 21 3 13.84 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
                </svg>

                <span>
                  +91 9860561254
                </span>
              </div>

            </div>


            {/* Social Icons */}
            <div className="flex items-center gap-7 mt-16 ml-[235px]">

              {/* Facebook */}
              {/* <a
                href="#"
                className="hover:text-blue-400 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.67.33-1 1-1z" />
                </svg>
              </a> */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition hover:text-blue-600"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.7.3-1 1-1z" />
                </svg>
              </a>


              {/* Instagram */}
              {/* <a
                href="#"
                className="hover:text-pink-400 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a> */}
              <a
                href="https://www.instagram.com/mangesh_p31?igsh=bDM5YWJ1bnA2eDN4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-400 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>


              {/* LinkedIn */}
              {/* <a
                href="#"
                className="hover:text-blue-500 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.5 3A2.5 2.5 0 1 0 4.5 8 2.5 2.5 0 0 0 4.5 3zM3 9h3v12H3V9zm5 0h3v1.7c.8-1.2 2.1-2 4-2 3 0 5 1.9 5 6v6h-3v-5.5c0-1.9-.7-3.3-2.5-3.3-1.5 0-2.5 1-2.5 3.1V21H8V9z" />
                </svg>
              </a> */}
              <a
                href="https://www.linkedin.com/in/mangesh-pathak-7a900b384?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-500 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.5 3A2.5 2.5 0 1 0 4.5 8 2.5 2.5 0 0 0 4.5 3zM3 9h3v12H3V9zm5 0h3v1.7c.8-1.2 2.1-2 4-2 3 0 5 1.9 5 6v6h-3v-5.5c0-1.9-.7-3.3-2.5-3.3-1.5 0-2.5 1-2.5 3.1V21H8V9z" />
                </svg>
              </a>

            </div>

          </div>

        </div>


        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-8">

          <span className="text-sm font-medium">
            Website Created & Hosted By
          </span>

          <span className="text-4xl font-[cursive] italic opacity-90">
            Kiran Dighe
          </span>

        </div>

      </div>


      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className="
          fixed
          bottom-5
          right-5
          w-11
          h-11
          rounded-full
          bg-blue-600
          hover:bg-blue-700
          flex
          items-center
          justify-center
          shadow-lg
          transition
          duration-300
          z-50
        "
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="white"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12l7-7 7 7M12 5v14"
          />
        </svg>
      </button>

    </footer>
  );
};

export default Footer;