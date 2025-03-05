import React from 'react';
import { Pizza, Clock, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link, Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <Navbar />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="menu">
        <Menu />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;