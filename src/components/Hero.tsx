import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] bg-black">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundBlendMode: "overlay"
        }}
      ></div>
      
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
             <span className='text-yellow-500'>Pizza</span> Authentique
          </h1>
          <p className="text-xl mb-8">
            Fabriqué à la main avec amour en utilisant des recettes traditionnelles et les meilleurs ingrédients importés d'Italie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#menu" 
              className="bg-red-700 text-white-900 px-6 py-3 rounded-md font-medium hover:bg-yellow-400 transition-colors text-center"
            >
              Voir Notre Menu
            </a>
            {/* <a 
              href="tel:+123456789" 
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-stone-900 transition-colors text-center"
            >
              Commander Maintenant
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;