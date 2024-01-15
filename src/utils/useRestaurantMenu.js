import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [restaurantMenuInfo, setRestaurantMenuInfo] = useState([]);

  useEffect(() => {
    getRestaurantMenuInfo();
  }, []);

  const getRestaurantMenuInfo = async () => {
    const data = await fetch(RESTAURANT_MENU_API + resId);
    const json = await data.json();
    setRestaurantMenuInfo(json.data);
  };

  return restaurantMenuInfo;
};

export default useRestaurantMenu;
