import { RESTAURANT_MENU_ITEM_IMAGE_URL } from "../utils/constants";

const RestaurantMenuItemCard = ({ itemInfo }) => {
  console.log("Item Info", itemInfo);
  const { name, description, imageId, price, itemAttribute, defaultPrice } =
    itemInfo;
  return (
    <div className="flex justify-between pb-[14px] mb-11">
      <div>
        {itemAttribute?.vegClassifier.toLowerCase() === "veg" ? (
          <img
            className="w-4 h-4 object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png"
            alt="veg-symbol"
          />
        ) : (
          <img
            className="w-4 h-4 object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/1024px-Non_veg_symbol.svg.png"
            alt="nonveg-symbol"
          />
        )}
        <p className="mt-1 text-[17px] font-medium">{name}</p>
        <p className="mt-1 text-sm">
          &#8377;{price / 100 || defaultPrice / 100}
        </p>
        <p className="mt-[14px] text-sm text-slate-400">{description}</p>
      </div>
      <img
        className="w-[118px] h-[96px] object-cover rounded-md"
        src={RESTAURANT_MENU_ITEM_IMAGE_URL + imageId}
        alt={name}
      />
    </div>
  );
};

export default RestaurantMenuItemCard;
