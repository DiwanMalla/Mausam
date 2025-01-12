import { useFavorite } from "@/hooks/use-favorite";

const FavoriteCities = () => {
  const { favorites, removeFavorite } = useFavorite();
  if (favorites.length) {
    return null;
  }
  return <div>FavoriteCities</div>;
};

export default FavoriteCities;
