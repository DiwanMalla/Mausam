import { useFavorite } from "@/hooks/use-favorite";
import { ScrollArea } from "./ui/scroll-area";

const FavoriteCities = () => {
  const { favorites, removeFavorite } = useFavorite();
  if (!favorites.length) {
    return null;
  }
  return (
    <>
      <h1>Favorites</h1>
      <ScrollArea>
        <div></div>
      </ScrollArea>
    </>
  );
};
const FavoriteCityTablet = ({ id, name, lat, lon, onRemove }) => {};
export default FavoriteCities;
