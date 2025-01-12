import { useFavorite } from "@/hooks/use-favorite";

const FavoriteCities = () => {
  const { favorites, removeFavorite } = useFavorite();
  return <div>FavoriteCities</div>;
};

export default FavoriteCities;
