import { useState } from 'react';

const menuCategories = [
  { id: 'pizzas', name: 'Pizzas' },
  { id: 'pates', name: 'Pâtes' },
  { id: 'entree', name: 'Entrées' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'drinks', name: 'Drinks' }
];

// Liste complète des filtres
const allFilters = [
  { id: 'Tous', name: 'Tous' },
  { id: 'tomate', name: 'Base Tomate' },
  { id: 'creme', name: 'Base Crème' },
  { id: 'vegetarian', name: 'Végétarien' },
  { id: 'halal', name: 'Halal' },
  { id: 'soft', name: 'Soft' }, // Filtre pour les boissons non alcoolisées
  { id: 'alcohol', name: 'Alcoolisé' } // Filtre pour les boissons alcoolisées
];

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  halal: boolean;
  vegetarian: boolean;
  tomate?: boolean;
  creme?: boolean;
  alcohol?: boolean; // Nouvelle propriété pour indiquer si la boisson est alcoolisée
  image: string;
};

type MenuItems = {
  pizzas: MenuItem[];
  pates: MenuItem[];
  entree: MenuItem[];
  desserts: MenuItem[];
  drinks: MenuItem[];
};

const menuItems: MenuItems = {
  pizzas: [
    {
      id: 1,
      name: 'Margherita',
      description: 'Tomates San Marzano, mozzarella fior di latte, basilic frais, huile d\'olive extra vierge',
      price: 12.99,
      halal : true,
      vegetarian: true,
      tomate : true,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80'
    },
    {
      id: 2,
      name: 'Diavola',
      description: 'Sauce tomate, mozzarella, salami épicé, flocons de piment',
      price: 14.99,
      tomate : true,
      halal : false,
      vegetarian: false,

      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80'
    },
    {
      id: 3,
      name: 'Quattro Formaggi',
      description: 'Mozzarella, gorgonzola, parmesan, ricotta, herbes fraîches',
      price: 15.99,
      halal : true,
      vegetarian: true,
      creme : true,
      image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'
    },
    {
      id: 4,
      name: 'Prosciutto e Funghi',
      description: 'Sauce tomate, mozzarella, jambon, champignons, origan',
      price: 16.99,
      tomate : true,
      halal : false,
      vegetarian: false,
      image: 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    }

  ],
  pates: [
    {
      id: 5,
      name: 'Spaghetti Carbonara',
      description: 'Pancetta, jaune d\'oeuf, pecorino romano, poivre noir',
      price: 13.99,
      creme : true,
      halal : false,
      vegetarian: false,
      image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80'
    },
    {
      id: 6,
      name: 'Lasagna',
      description: 'Couches de pâtes, sauce bolognaise, béchamel, parmesan',
      price: 14.99,
      tomate : true,
      halal : false,
      vegetarian: false,
      image: 'https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    }
  ],
  entree: [
    {
      id: 7,
      name: 'Bruschetta',
      description: 'Pain grillé frotté à l\'ail, garni de tomates en dés, de basilic frais et d\'huile d\'olive',
      price: 7.99,
      halal : true,
      vegetarian: true,
      image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    },
    {
      id: 8,
      name: 'Caprese Salad',
      description: 'Mozzarella fraîche, tomates, basilic, glaçage balsamique',
      price: 9.99,
      halal : true,
      vegetarian: true,
      tomate : true,
      image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80'
    }
  ],
  desserts: [
    {
      id: 9,
      name: 'Tiramisu',
      description: 'Biscuits à la cuillère imbibés de café, crème de mascarpone, poudre de cacao',
      price: 8.99,
      halal : true,
      vegetarian: true,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    },
    
  ],
  drinks: [
    {
      id: 11,
      name: 'Italian Red Wine',
      description: 'Un verre de la maison Chianti',
      price: 6.99,
      halal: false,
      vegetarian: true,
      alcohol: true, // Cette boisson est alcoolisée
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    },
    {
      id: 12,
      name: 'Aperol Spritz',
      description: 'Aperol, prosecco, eau gazeuse, tranche d\'orange',
      price: 8.99,
      halal: false,
      vegetarian: true,
      alcohol: true, // Cette boisson est alcoolisée
      image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80'
    },
    {
      id: 13,
      name: 'Limonade',
      description: 'Limonade maison',
      price: 4.99,
      halal: true,
      vegetarian: true,
      alcohol: false, // Cette boisson est non alcoolisée
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    }
  ]
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('pizzas');
  const [activeFilter, setActiveFilter] = useState('Tous');

  // Détermine les filtres disponibles en fonction de la catégorie active
  const availableFilters = activeCategory === 'drinks'
    ? allFilters.filter(filter => filter.id === 'Tous' || filter.id === 'soft' || filter.id === 'alcohol') // Filtres pour les boissons
    : allFilters.filter(filter => filter.id !== 'soft' && filter.id !== 'alcohol'); // Filtres pour les pizzas (exclut soft et alcohol)

  const filteredItems = menuItems[activeCategory as keyof MenuItems].filter(item => {
    if (activeFilter === 'Tous') {
      return true;
    }

    if (activeCategory === 'pizzas') {
      if (activeFilter === 'tomate') {
        return item.tomate === true;
      }
      if (activeFilter === 'creme') {
        return item.creme === true;
      }
      if (activeFilter === 'vegetarian') {
        return item.vegetarian;
      }
      if (activeFilter === 'halal') {
        return item.halal;
      }
    }

    if (activeCategory === 'drinks') {
      if (activeFilter === 'soft') {
        return item.alcohol === false;
      }
      if (activeFilter === 'alcohol') {
        return item.alcohol === true;
      }
    }

    return true;
  });

  return (
    <section id="menu" className="py-20 bg-stone-100 dark:bg-stone-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-stone-900 dark:text-stone-100">Notre Menu</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-red-700 text-white'
                  : 'bg-stone-200 hover:bg-stone-300 dark:bg-stone-700 dark:hover:bg-stone-600 dark:text-stone-100'
              }`}
              onClick={() => {
                setActiveCategory(category.id);
                setActiveFilter('Tous'); // Réinitialiser le filtre lors du changement de catégorie
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
        {(activeCategory === 'pizzas' || activeCategory === 'drinks') && (
          <div className="flex justify-center mb-6">
            <select
              className="px-4 py-2 border rounded dark:bg-stone-700 dark:border-stone-600 dark:text-stone-100"
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
            >
              {availableFilters.map((filter) => (
                <option key={filter.id} value={filter.id} className="dark:bg-stone-700 dark:text-stone-100">
                  {filter.name}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row dark:bg-stone-700 dark:text-stone-100"
            >
              <div className="md:w-1/3 h-64 md:h-auto">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="md:w-2/3 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-stone-600 mb-4 dark:text-stone-300">{item.description}</p>
                  <p className="text-lg font-bold">€{item.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
};

export default Menu;