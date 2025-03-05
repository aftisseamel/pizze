import React, { useState } from 'react';
import { Pizza, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-stone-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-2xl font-bold text-yellow-500">
          <Pizza size={28} />
          <span>Bella Napoli</span>
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-yellow-500 transition-colors">Home</a>
          <a href="#menu" className="hover:text-yellow-500 transition-colors">Menu</a>
          <a href="#about" className="hover:text-yellow-500 transition-colors">About</a>
          <a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a>
          <a href="tel:+123456789" className="bg-yellow-500 text-stone-900 px-4 py-2 rounded-md font-medium hover:bg-yellow-400 transition-colors">
            Order Now
          </a>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-stone-800 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <a href="#" className="block py-2 hover:text-yellow-500 transition-colors" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#menu" className="block py-2 hover:text-yellow-500 transition-colors" onClick={() => setIsOpen(false)}>Menu</a>
            <a href="#about" className="block py-2 hover:text-yellow-500 transition-colors" onClick={() => setIsOpen(false)}>About</a>
            <a href="#contact" className="block py-2 hover:text-yellow-500 transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
            <a href="tel:+123456789" className="bg-yellow-500 text-stone-900 px-4 py-2 rounded-md font-medium hover:bg-yellow-400 transition-colors text-center">
              Order Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;