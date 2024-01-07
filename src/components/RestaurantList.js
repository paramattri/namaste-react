import useRestaurantsData from "../utils/useRestaurantsData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const RestaurantList = () => {
  const restaurantsData = useRestaurantsData();
  const restaurantList =
    restaurantsData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

  if (restaurantsData.length === 0) return <Shimmer />;
  return (
    <div className="flex flex-wrap mx-48 justify-between">
      {restaurantList.map((restaurant) => (
        <RestaurantCard
          key={restaurant.info.id}
          restaurantInfo={restaurant.info}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
