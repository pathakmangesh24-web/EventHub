import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-[1350px] mx-auto h-[70px] px-5 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <div className="text-2xl font-bold tracking-wide text-black">
            KIRAN DIGHE
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-9 text-[15px] ml-85">
          <a
            href="#home"
            className="text-gray-600 font-medium hover:text-blue-800"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-gray-800 hover:text-blue-600 transition"
          >
            About
          </a>

          <a
            href="#vendors"
            className="text-gray-800 hover:text-blue-600 transition"
          >
            Vendors
          </a>

          <a
            href="#events"
            className="text-gray-800 hover:text-blue-600 transition"
          >
            Events
          </a>

          <a
            href="#contact"
            className="text-gray-800 hover:text-blue-600 transition"
          >
            Contact
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* Buy Tickets */}
          <button
            className="
              bg-[#51453f]
              text-white
              px-5
              py-2.5
              rounded-xl
              border-2
              border-gray-400
              shadow-sm
              hover:bg-[#3f3631]
              transition
              text-sm
              font-medium
            "
          >
            Buy Tickets
          </button>

          {/* Social Icons */}
          <div className="hidden sm:flex items-center gap-5 text-gray-700">

            {/* Facebook */}
            <a href="#" className="hover:text-blue-600 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.7.3-1 1-1z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" className="hover:text-pink-600 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" className="hover:text-blue-700 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.5 3A2.5 2.5 0 1 0 4.5 8 2.5 2.5 0 0 0 4.5 3zM3 9h3v12H3V9zm5 0h3v1.7c.8-1.2 2.1-2 4-2 3 0 5 1.9 5 6v6h-3v-5.5c0-1.9-.7-3.3-2.5-3.3-1.5 0-2.5 1-2.5 3.1V21H8V9z" />
              </svg>
            </a>

          </div>

          {/* Mobile Menu */}
          <button className="md:hidden text-2xl">
            ☰
          </button>

        </div>
      </div>
    </header>
  );
};

export default Header;