import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import RestaurantMenuItemCard from "./RestaurantMenuItemCard";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="px-36 mt-16 mx-48">
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        cartItems.map((item) => (
          <RestaurantMenuItemCard
            key={item?.id}
            itemInfo={item}
            hideAddButton={true}
          />
        ))
      )}
    </div>
  );
};

export default Cart;
