import { WeatherData } from "@/app/API/types";
import { useFavorite } from "@/hooks/use-favorite";

interface FavoriteButtonProps {
  data: WeatherData;
}
const FavoriteButton = ({ data }: FavoriteButtonProps) => {
  const { addToFavorite } = useFavorite();
  return <div>FavoriteButton</div>;
};

export default FavoriteButton;
