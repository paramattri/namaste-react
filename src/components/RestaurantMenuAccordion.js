import { useState } from "react";
import RestaurantMenuItemCard from "./RestaurantMenuItemCard";

const RestaurantMenuAccordion = ({ menuCategoryData }) => {
  const [showCategoryData, setShowCategoryData] = useState(true);
  return (
    <div>
      <div
        className="flex justify-between items-center cursor-pointer mb-6"
        onClick={() => setShowCategoryData(!showCategoryData)}
      >
        <p className="text-lg font-bold">
          {`${menuCategoryData?.title} (${menuCategoryData?.itemCards?.length})`}
        </p>
        <span className="text-xl font-semibold">
          {showCategoryData ? "⌃" : "⌄"}
        </span>
      </div>
      {showCategoryData &&
        menuCategoryData?.itemCards.map((itemCard) => (
          <RestaurantMenuItemCard itemInfo={itemCard?.card?.info} />
        ))}
    </div>
  );
};

export default RestaurantMenuAccordion;
