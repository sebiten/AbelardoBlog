import  { useState, useEffect } from "react";

type FavoriteProps = {
  id: string;
  imageUrl: string;
  date: string;
  categories: string | string[];
  title: string;
};

function Favorite({ id, imageUrl, date, categories, title}: FavoriteProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Verificar si el id ya está en favoritos al cargar el componente
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.some((fav: any) => fav.id === id));
  }, [id]);

  const toggleFavorite = () => {
    // Obtener favoritos existentes del localStorage
    const existingFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    // Encontrar el índice del favorito en el arreglo
    const index = existingFavorites.findIndex((fav: any) => fav.id === id);

    if (index !== -1) {
      existingFavorites.splice(index, 1);
    } else {
      existingFavorites.push({ id, imageUrl, date, categories, title });
    }

    localStorage.setItem("favorites", JSON.stringify(existingFavorites));
    setIsFavorite(!isFavorite); // Cambiar el estado después de guardar en localStorage
  };

  return (
    <div className={`favorite ${isFavorite ? "filled" : "empty"}`} onClick={toggleFavorite}>
      {isFavorite ? "❤️" : "🤍"}
    </div>
  );
}

export default Favorite;
