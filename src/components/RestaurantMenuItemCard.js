import { useDispatch, useSelector } from "react-redux";
import { RESTAURANT_MENU_ITEM_IMAGE_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const RestaurantMenuItemCard = ({ itemInfo, hideAddButton = false }) => {
  const { name, description, imageId, price, itemAttribute, defaultPrice } =
    itemInfo;

  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const isItemInCart = cartItems.find((item) => name === item?.name);
  const itemCountInCart =
    isItemInCart && cartItems.filter((item) => item?.name === name).length;

  return (
    <div>
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
          <p className="mt-[14px] text-sm text-slate-400 w-[800px]">
            {description}
          </p>
        </div>
        <div className="flex flex-col items-center relative">
          <img
            className="w-[118px] h-[96px] object-cover rounded-md"
            src={RESTAURANT_MENU_ITEM_IMAGE_URL + imageId}
            alt={name}
          />
          {!hideAddButton && (
            <div className="w-24 h-9 border text-center rounded-md absolute z-10 bg-white bottom-[-4px]">
              {isItemInCart ? (
                <div className="flex justify-between items-center px-1 cursor-pointer">
                  <p
                    className="font-bold text-green-500"
                    onClick={() => dispatch(removeItem(name))}
                  >
                    -
                  </p>
                  <p className="font-bold text-green-500 text-sm pt-[6px]">
                    {itemCountInCart}
                  </p>
                  <p
                    className="font-bold text-green-500"
                    onClick={() => dispatch(addItem(itemInfo))}
                  >
                    +
                  </p>
                </div>
              ) : (
                <div
                  className="relative cursor-pointer"
                  onClick={() => dispatch(addItem(itemInfo))}
                >
                  <p className="font-bold text-green-500 text-sm pt-[6px]">
                    ADD
                  </p>
                  <p className="absolute font-bold text-green-500 top-[-8px] right-0">
                    +
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <hr className="mb-5" />
    </div>
  );
};

export default RestaurantMenuItemCard;
