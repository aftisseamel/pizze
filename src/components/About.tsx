import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1969&q=80" 
                alt="Chef making pizza" 
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 p-6 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">Since 1985</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-stone-600 mb-6">
              Bella Napoli was founded in 1985 by the Rossi family who immigrated from Naples, Italy, bringing with them authentic recipes passed down through generations. What started as a small family restaurant has grown into a beloved establishment known for its commitment to traditional Italian cuisine.
            </p>
            <p className="text-lg text-stone-600 mb-6">
              Our pizzas are made in the true Neapolitan style - with a thin, soft, and chewy crust cooked in a wood-fired oven at extremely high temperatures for just 60-90 seconds. We use only San Marzano tomatoes, fresh mozzarella, and the finest ingredients imported directly from Italy.
            </p>
            <p className="text-lg text-stone-600 mb-8">
              Every dish at Bella Napoli tells a story of tradition, passion, and the rich culinary heritage of Italy. We invite you to experience the authentic flavors of Naples right here in your neighborhood.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-stone-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Authentic Recipes</h3>
                <p className="text-stone-600">Traditional recipes passed down through generations</p>
              </div>
              <div className="bg-stone-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Quality Ingredients</h3>
                <p className="text-stone-600">Premium ingredients imported directly from Italy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;