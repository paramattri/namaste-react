import { Link } from "react-router-dom";
import useRestaurantsData from "../utils/useRestaurantsData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const RestaurantList = () => {
  const restaurantsData = useRestaurantsData();

  if (restaurantsData.length === 0) return <Shimmer />;

  const restaurantList =
    restaurantsData?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

  return (
    <div className="flex flex-wrap mx-48 justify-between">
      {restaurantList.map((restaurant) => (
        <Link
          key={restaurant?.info?.id}
          to={"/restaurants/" + restaurant?.info?.id}
        >
          <RestaurantCard restaurantInfo={restaurant?.info} />
        </Link>
      ))}
    </div>
  );
};

export default RestaurantList;
