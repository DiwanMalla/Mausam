import { useFavorite } from "@/hooks/use-favorite";

const FavoriteCities = () => {
  const { favorites, removeFavorite } = useFavorite();
  if (!favorites.length) {
    return null;
  }
  return (
    <>
      <h1>Favorites</h1>
    </>
  );
};

export default FavoriteCities;
