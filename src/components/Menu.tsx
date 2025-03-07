import { useState, useEffect } from "react";
import { decode } from "blurhash";

const Menu = () => {
  interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    filtres?: string[];
    blurhash: string;
    image: string;
    moyenne: number;
  }

  const [menuItems, setMenuItems] = useState<{ [key: string]: MenuItem[] }>({});
  const [activeCategory, setActiveCategory] = useState("");
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState<string[]>([]);
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentItemId, setCurrentItemId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    contenu: "",
    evaluation: 5,
  });

  const addComment = (
    id: number,
    nom: string,
    prenom: string,
    contenu: string,
    evaluation: number
  ) => {
    fetch("https://backoffice.artred02.fr/api/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: id,
        commentaire: contenu,
        prenom: prenom,
        nom: nom,
        evaluation: evaluation,
      }),
    })
      .then((response) => {
        if (!response.ok)
          throw new Error("Erreur lors de l'ajout du commentaire");
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // Fermer la modale après l'envoi
        setShowModal(false);
        setFormData({ nom: "", prenom: "", contenu: "", evaluation: 5 });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetch("https://backoffice.artred02.fr/api/getProducts")
      .then((response) => {
        if (!response.ok)
          throw new Error("Erreur lors de la récupération des données");
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

  const filteredItems =
    activeCategory && menuItems[activeCategory]
      ? menuItems[activeCategory].filter(
          (item) =>
            activeFilter === "Tous" ||
            (item.filtres && item.filtres.includes(activeFilter))
        )
      : [];

  const generateBlurhashImage = (blurhash: string, width = 32, height = 32) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;

    const pixels = decode(blurhash, width, height);
    if (!context) {
      throw new Error("Failed to get 2D context");
    }
    const imageData = context.createImageData(width, height);

    for (let i = 0; i < pixels.length; i += 4) {
      imageData.data[i] = pixels[i]; // R
      imageData.data[i + 1] = pixels[i + 1]; // G
      imageData.data[i + 2] = pixels[i + 2]; // B
      imageData.data[i + 3] = 255; // Alpha (opaque)
    }
    context.putImageData(imageData, 0, 0);

    return canvas.toDataURL("image/png");
  };

  if (loading) return <p className="text-center py-20">Chargement...</p>;
  if (error)
    return <p className="text-center py-20 text-red-600">Erreur : {error}</p>;

  return (
    <section id="menu" className="py-20 bg-stone-100 dark:bg-stone-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-stone-900 dark:text-stone-100">
            Notre Menu
          </h2>
        </div>

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

        {activeCategory && filters.length > 1 && (
          <div className="flex justify-center mb-6">
            <select
              className="px-4 py-2 border rounded dark:bg-stone-700 dark:border-stone-600 dark:text-stone-100"
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
            >
              {filters.map((filter) => (
                <option
                  key={filter}
                  value={filter}
                  className="dark:bg-stone-700 dark:text-stone-100"
                >
                  {filter}
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
              <div className="md:w-1/3 h-64 md:h-auto relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${generateBlurhashImage(
                      item.blurhash
                    )})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>

                <img
                  src={`https://backoffice.artred02.fr/${item.image}`}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  onLoad={() =>
                    setImageLoaded((prev) => ({ ...prev, [item.id]: true }))
                  }
                  style={{
                    visibility: imageLoaded[item.id] ? "visible" : "hidden",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="md:w-2/3 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-stone-600 mb-4 dark:text-stone-300">
                    {item.description}
                  </p>
                  <p className="text-lg font-bold">€{item.price?.toFixed(2)}</p>
                  {item.moyenne ? (
                    <p className="text-stone-600 dark:text-stone-400">
                      Note moyenne : {item.moyenne}/5
                    </p>
                  ) : (
                    <p className="text-stone-600 dark:text-stone-400">
                      Pas de note
                    </p>
                  )}
                </div>
                <button
                  className="px-4 py-2 bg-red-700 text-white rounded mt-4"
                  onClick={() => {
                    setCurrentItemId(item.id);
                    setShowModal(true);
                  }}
                >
                  Commenter
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modale pour ajouter un commentaire */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 dark:bg-stone-800 dark:text-stone-100">
            <h3 className="text-2xl mb-4">Ajouter un Commentaire</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (currentItemId !== null) {
                  addComment(
                    currentItemId,
                    formData.nom,
                    formData.prenom,
                    formData.contenu,
                    formData.evaluation
                  );
                }
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium">Nom</label>
                <input
                  type="text"
                  value={formData.nom}
                  onChange={(e) =>
                    setFormData({ ...formData, nom: e.target.value })
                  }
                  className="w-full p-2 border rounded dark:bg-stone-700 dark:text-stone-100"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Prénom</label>
                <input
                  type="text"
                  value={formData.prenom}
                  onChange={(e) =>
                    setFormData({ ...formData, prenom: e.target.value })
                  }
                  className="w-full p-2 border rounded dark:bg-stone-700 dark:text-stone-100"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Commentaire</label>
                <textarea
                  value={formData.contenu}
                  onChange={(e) =>
                    setFormData({ ...formData, contenu: e.target.value })
                  }
                  className="w-full p-2 border rounded dark:bg-stone-700 dark:text-stone-100"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Evaluation</label>
                <select
                  value={formData.evaluation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      evaluation: parseInt(e.target.value),
                    })
                  }
                  className="w-full p-2 border rounded dark:bg-stone-700 dark:text-stone-100"
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded dark:bg-stone-600 dark:text-stone-100"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-700 text-white rounded"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Menu;
