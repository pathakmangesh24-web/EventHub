import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [vendorOpen, setVendorOpen] = useState(false);

  const vendorItems = [
    { name: '•   Craft Vendors', to: '/craft-vendors' },
    { name: '•   Food Vendors', to: '/food-vendors' },
    { name: '•   Applications', to: '/application' },
  ];

  const navLinkClass = ({ isActive }) =>
    `transition ${isActive ? 'text-blue-700 font-semibold' : 'text-slate-700 hover:text-blue-700'
    }`;

  return (
    <header className="w-full border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex h-[70px] max-w-[1350px] items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-2xl font-black tracking-wide text-black">KIRAN DIGHE</div>
        </Link>

        <nav className="hidden items-center gap-8 text-[15px] md:flex ml-100">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <div className="relative">
            <button
              type="button"
              onClick={() => setVendorOpen((prev) => !prev)}
              aria-expanded={vendorOpen}
              className="flex items-center gap-1 text-slate-700 transition hover:text-blue-700"
            >
              Vendors
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform ${vendorOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {vendorOpen && (
              <div className="absolute left-0 top-full z-20 mt-3 w-52 rounded-lg border border-slate-200 bg-white py-2 shadow-lg">
                {vendorItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    onClick={() => setVendorOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm transition ${isActive ? 'bg-slate-100 text-blue-700' : 'text-slate-700 hover:bg-slate-100 hover:text-blue-700'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/events" className={navLinkClass}>
            Events
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center gap-5">
          {/* <button className="rounded-xl border border-slate-400 bg-[#51453f] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#3f3631]">
            Buy Tickets
          </button> */}
          <a
            href="https://in.bookmyshow.com/explore/events"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-400 bg-[#51453f] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#3f3631] inline-block"
          >
            Buy Tickets
          </a>

          <div className="hidden items-center gap-4 text-slate-700 sm:flex">
            {/* <a href="#" aria-label="Facebook" className="transition hover:text-blue-600">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.7.3-1 1-1z" /></svg>
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

            {/* <a href="#" aria-label="Instagram" className="transition hover:text-pink-600">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
            </a> */}
            <a
              href="https://www.instagram.com/mangesh_p31?igsh=bDM5YWJ1bnA2eDN4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition hover:text-pink-600"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-none stroke-current stroke-2"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>

            {/* <a href="#" aria-label="LinkedIn" className="transition hover:text-blue-700">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M4.5 3A2.5 2.5 0 1 0 4.5 8 2.5 2.5 0 0 0 4.5 3zM3 9h3v12H3V9zm5 0h3v1.7c.8-1.2 2.1-2 4-2 3 0 5 1.9 5 6v6h-3v-5.5c0-1.9-.7-3.3-2.5-3.3-1.5 0-2.5 1-2.5 3.1V21H8V9z" /></svg>
            </a> */}
            <a
              href="https://www.linkedin.com/in/mangesh-pathak-7a900b384?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition hover:text-blue-700"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d="M4.5 3A2.5 2.5 0 1 0 4.5 8 2.5 2.5 0 0 0 4.5 3zM3 9h3v12H3V9zm5 0h3v1.7c.8-1.2 2.1-2 4-2 3 0 5 1.9 5 6v6h-3v-5.5c0-1.9-.7-3.3-2.5-3.3-1.5 0-2.5 1-2.5 3.1V21H8V9z" />
              </svg>
            </a>
          </div>

          <button className="text-2xl md:hidden">☰</button>
        </div>
      </div>
    </header>
  );
};

export default Header;