import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SubFooter from './components/footer/subFooter';
import Home from './pages/home/Home';
import About from './pages/about/About';
import CraftVender from './pages/vendors/CraftVender';
import FoodVendor from './pages/vendors/FoodVendor';
import Application from './pages/vendors/Application';
import Event from './pages/event/Event';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#f4f4f4] text-slate-800">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/craft-vendors" element={<CraftVender />} />
          <Route path="/food-vendors" element={<FoodVendor />} />
          <Route path="/application" element={<Application />} />
          <Route path="/events" element={<Event />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <SubFooter />
      <Footer />
    </div>
  );
}

export default App;