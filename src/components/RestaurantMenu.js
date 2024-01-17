import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import React from "react";
import RestaurantMenuAccordion from "./RestaurantMenuAccordion";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantMenuData = useRestaurantMenu(resId);

  if (restaurantMenuData.length === 0)
    return (
      <div className="px-36 mt-16">
        <Shimmer />
      </div>
    );

  const { name, cuisines, areaName, totalRatingsString, avgRating, sla } =
    restaurantMenuData?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurantMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;

  const filteredItemCategoryCards =
    restaurantMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="px-36 mt-16 mx-48">
      <div className="flex justify-between items-center mb-[18px]">
        <div>
          <p className="font-bold text-xl mb-2">{name}</p>
          <p className="text-slate-500 text-sm mb-1">{cuisines.join(", ")}</p>
          <p className="text-slate-500 text-sm">{areaName}</p>
        </div>
        <div className="p-2 shadow-sm border rounded-md">
          <p className="font-extrabold text-green-600 text-center pb-[10px]">
            <span className="text-xl">&#9733;</span> {avgRating}
          </p>
          <hr className="mb-2" />
          <p className="text-xs font-bold text-slate-500">
            {totalRatingsString}
          </p>
        </div>
      </div>
      <hr className="border-dashed mb-[18px]" />
      <div>
        {filteredItemCategoryCards.map((card) => (
          <RestaurantMenuAccordion
            key={card?.card?.card?.title}
            menuCategoryData={card?.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
