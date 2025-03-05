import React from 'react';
import { Pizza } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 text-2xl font-bold text-yellow-500 mb-4 md:mb-0">
            <Pizza size={28} />
            <span>Bella Napoli</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-yellow-500 transition-colors">Accueil</a>
            <a href="#menu" className="hover:text-yellow-500 transition-colors">Menu</a>
            <a href="#about" className="hover:text-yellow-500 transition-colors">A propos</a>
            {/* <a href="#contact" className="hover:text-yellow-500 transition-colors">Contacts</a> */}
            <a href="#" className="hover:text-yellow-500 transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Conditions d'utilisation</a>
          </div>
        </div>
        
        <hr className="border-stone-800 mb-8" />
        
        <div className="text-center text-stone-400">
          <p>&copy; {new Date().getFullYear()} Bella Napoli Pizzeria. Tous droits réservés.</p>
          <p className="mt-2">Fabriqué à la main avec passion depuis 1985</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;