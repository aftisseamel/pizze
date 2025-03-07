import { useState, useEffect } from "react";
import { decode } from "blurhash"; // Importer la fonction decode de la bibliothèque blurhash

const Menu = () => {
  const [menuItems, setMenuItems] = useState({});
  const [activeCategory, setActiveCategory] = useState("");
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState([]);
  const [imageLoaded, setImageLoaded] = useState({});

  useEffect(() => {
    fetch("https://backoffice.artred02.fr/api/getProducts")
      .then((response) => {
        if (!response.ok) throw new Error("Erreur lors de la récupération des données");
        return response.json();
      })
      .then((data) => {
        setMenuItems(data);
        const categoryList = Object.keys(data);
        if (categoryList.length > 0) setActiveCategory(categoryList[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Mise à jour des filtres en fonction de la catégorie active
  useEffect(() => {
    if (activeCategory && menuItems[activeCategory]) {
      const allFilters = new Set(["Tous"]);
      menuItems[activeCategory].forEach((item) => {
        if (item.filtres) {
          item.filtres.forEach((filter) => allFilters.add(filter));
        }
      });
      setFilters([...allFilters]);
    }
  }, [activeCategory, menuItems]);

  // Filtrage des éléments de la catégorie active
  const filteredItems =
    activeCategory && menuItems[activeCategory]
      ? menuItems[activeCategory].filter(
          (item) => activeFilter === "Tous" || (item.filtres && item.filtres.includes(activeFilter))
        )
      : [];

  // Fonction pour générer l'image floue à partir du blurhash
  const generateBlurhashImage = (blurhash, width = 32, height = 32) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;

    const pixels = decode(blurhash, width, height);
    const imageData = context.createImageData(width, height);
    
    for (let i = 0; i < pixels.length; i++) {
      imageData.data[i * 4] = pixels[i][0]; // R
      imageData.data[i * 4 + 1] = pixels[i][1]; // G
      imageData.data[i * 4 + 2] = pixels[i][2]; // B
      imageData.data[i * 4 + 3] = 255; // Alpha (opaque)
    }
    context.putImageData(imageData, 0, 0);
    
    return canvas.toDataURL("image/png");
  };

  if (loading) return <p className="text-center py-20">Chargement...</p>;
  if (error) return <p className="text-center py-20 text-red-600">Erreur : {error}</p>;

  return (
    <section id="menu" className="py-20 bg-stone-100 dark:bg-stone-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-stone-900 dark:text-stone-100">Notre Menu</h2>
        </div>

        {/* Boutons des catégories */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {Object.keys(menuItems).map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category
                  ? "bg-red-700 text-white"
                  : "bg-stone-200 hover:bg-stone-300 dark:bg-stone-700 dark:hover:bg-stone-600 dark:text-stone-100"
              }`}
              onClick={() => {
                setActiveCategory(category);
                setActiveFilter("Tous");
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Filtres */}
        {activeCategory && filters.length > 1 && (
          <div className="flex justify-center mb-6">
            <select
              className="px-4 py-2 border rounded dark:bg-stone-700 dark:border-stone-600 dark:text-stone-100"
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
            >
              {filters.map((filter) => (
                <option key={filter} value={filter} className="dark:bg-stone-700 dark:text-stone-100">
                  {filter}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Affichage des produits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row dark:bg-stone-700 dark:text-stone-100"
            >
              <div className="md:w-1/3 h-64 md:h-auto relative">
                {/* Affichage du blurhash comme fond d'image pendant le chargement de l'image réelle */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${generateBlurhashImage(item.blurhash)})`,
                    backgroundSize: "cover", // S'assurer que le fond couvre toute la zone
                    backgroundPosition: "center", // Centrer l'image floue
                  }}
                ></div>

                {/* L'image réelle est cachée jusqu'à ce qu'elle soit chargée */}
                <img
                  src={`https://backoffice.artred02.fr/${item.image}`}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  onLoad={() => setImageLoaded((prev) => ({ ...prev, [item.id]: true }))}
                  style={{
                    visibility: imageLoaded[item.id] ? "visible" : "hidden",
                    position: "absolute", // Positionner l'image réelle par-dessus le fond flou
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // Assurer que l'image couvre bien l'espace
                  }}
                />
              </div>
              <div className="md:w-2/3 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-stone-600 mb-4 dark:text-stone-300">{item.description}</p>
                  <p className="text-lg font-bold">€{item.price?.toFixed(2)}</p>
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
