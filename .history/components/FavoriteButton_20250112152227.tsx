import { WeatherData } from "@/app/API/types";

interface FavoriteButtonProps {
  data: WeatherData;
}
const FavoriteButton = ({ data }: FavoriteButtonProps) => {
  return <div>FavoriteButton</div>;
};

export default FavoriteButton;
