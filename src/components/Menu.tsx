import { useState, useEffect } from "react";

const Menu = () => {
  const [menuItems, setMenuItems] = useState<Record<string, any>>({});
  const [activeCategory, setActiveCategory] = useState("Pizzas");
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Données de catégories et filtres
  const menuCategories = [
    { id: "Pizzas", name: "Pizzas" },
    { id: "Pastas", name: "Pastas" },
    { id: "Starters", name: "Entrées" },
    { id: "Boissons", name: "Boissons" },
    { id: "Desserts", name: "Desserts" },
  ];

  const availableFilters = [
    { id: "Tous", name: "Tous" },
    { id: "Base Tomate", name: "Base Tomate" },
    { id: "Végétarien", name: "Végétarien" },
    { id: "Halal", name: "Halal" },
    { id: "Alcoolisé", name: "Alcoolisé" },
  ];

  useEffect(() => {
    fetch("https://backoffice.artred02.fr/api/getProducts")
      .then((response) => {
        if (!response.ok) throw new Error("Erreur lors de la récupération des données");
        return response.json();
      })
      .then((data) => {
        setMenuItems(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filtrer les éléments en fonction de la catégorie et du filtre actif
  const filteredItems = menuItems[activeCategory]
    ? activeFilter === "Tous"
      ? [menuItems[activeCategory]] // Afficher l'élément unique de la catégorie
      : menuItems[activeCategory].filtres && menuItems[activeCategory].filtres.includes(activeFilter)
      ? [menuItems[activeCategory]] // Appliquer le filtre
      : []
    : [];

  if (loading) return <p className="text-center py-20">Chargement...</p>;
  if (error) return <p className="text-center py-20 text-red-600">Erreur : {error}</p>;

  return (
    <section id="menu" className="py-20 bg-stone-100 dark:bg-stone-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-stone-900 dark:text-stone-100">Notre Menu</h2>
        </div>

        {/* Boutons de catégories */}
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
                setActiveFilter("Tous"); // Réinitialiser le filtre lors du changement de catégorie
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Filtres (affichés uniquement pour les catégories avec filtres) */}
        {(activeCategory === "Pizzas" || activeCategory === "Boissons") && (
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

        {/* Grille des éléments du menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row dark:bg-stone-700 dark:text-stone-100"
            >
              <div className="md:w-1/3 h-64 md:h-auto">
                <img
                  src={"https://backoffice.artred02.fr/"+item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-stone-600 mb-4 dark:text-stone-300">{item.description}</p>
                  <p className="text-lg font-bold">€{item.price.toFixed(2)}</p>
                </div>
                {item.filtres && item.filtres.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-stone-500">
                      Filtres : {item.filtres.join(", ")}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
};

export default Menu;