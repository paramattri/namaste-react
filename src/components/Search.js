import { useState } from "react";
import useRestaurantsData from "../utils/useRestaurantsData";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import SearchShimmer from "./SearchShimmer";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const restaurantsData = useRestaurantsData();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  if (restaurantsData.length === 0) return <SearchShimmer />;

  const restaurantList =
    restaurantsData?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

  return (
    <div className="px-36 mt-16 mx-48">
      <input
        className="w-full border h-12 p-4 mb-10 border-slate-300 rounded-sm text-lg placeholder:text-slate-500 placeholder:font-medium focus:outline-none"
        type="text"
        placeholder="Search for restaurants"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          const filteredRestaurants = restaurantList?.filter(
            (restaurant) =>
              e.target.value.length > 0 &&
              restaurant.info.name
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
          );
          setFilteredRestaurants(filteredRestaurants);
        }}
      />
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
            className="mr-[50px]"
          >
            <RestaurantCard restaurantInfo={restaurant?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
