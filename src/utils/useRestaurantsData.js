import { useEffect, useState } from "react";
import { RESTAURANTS_API } from "./constants";

const useRestaurantsData = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);

  useEffect(() => {
    getRestaurantsData();
  }, []);

  const getRestaurantsData = async () => {
    const data = await fetch(RESTAURANTS_API);
    const json = await data.json();
    setRestaurantsData(json.data);
  };

  return restaurantsData;
};

export default useRestaurantsData;
