import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-stone-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1969&q=80" 
                alt="Chef making pizza" 
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 p-6 rounded-lg shadow-lg" style={{ backgroundColor: "#be1622", color: "#ffffff" }}>
                <p className="text-2xl font-bold">Depuis 1985</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-stone-900 dark:text-stone-100">Notre histoire</h2>
            <p className="text-lg text-stone-600 mb-6 dark:text-stone-300">
              Bella Napoli a été fondée en 1985 par la famille Rossi, qui a immigré de Naples, en Italie, apportant avec elle des recettes authentiques transmises de génération en génération. Ce qui a commencé comme un petit restaurant familial est devenu un établissement apprécié, connu pour son engagement envers la cuisine italienne traditionnelle.
            </p>
            <p className="text-lg text-stone-600 mb-6 dark:text-stone-300">
              Nos pizzas sont préparées dans le plus pur style napolitain : avec une croûte fine, moelleuse et moelleuse cuite dans un four à bois à des températures extrêmement élevées pendant seulement 60 à 90 secondes. Nous utilisons uniquement des tomates San Marzano, de la mozzarella fraîche et les meilleurs ingrédients importés directement d'Italie.
            </p>
            <p className="text-lg text-stone-600 mb-8 dark:text-stone-300">
              Chaque plat du Bella Napoli raconte une histoire de tradition, de passion et du riche héritage culinaire de l'Italie. Nous vous invitons à découvrir les saveurs authentiques de Naples ici même dans votre quartier.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-stone-100 p-6 rounded-lg dark:bg-stone-600">
                <h3 className="text-xl font-bold mb-2 text-stone-900 dark:text-stone-100">Recettes authentiques</h3>
                <p className="text-stone-600 dark:text-stone-300">Recettes traditionnelles transmises de génération en génération</p>
              </div>
              <div className="bg-stone-100 p-6 rounded-lg dark:bg-stone-600">
                <h3 className="text-xl font-bold mb-2 text-stone-900 dark:text-stone-100">Ingrédients de qualité</h3>
                <p className="text-stone-600 dark:text-stone-300">Ingrédients de première qualité importés directement d'Italie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
