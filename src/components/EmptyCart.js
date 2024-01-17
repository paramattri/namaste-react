const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        className="w-72 h-64 object-cover"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
        alt="empty cart"
      />
      <p className="mt-6 text-xl font-semibold text-slate-600">
        Your cart is empty
      </p>
      <p className="mt-2 text-sm font-light text-slate-400">
        You can go to home page to view more restaurants
      </p>
    </div>
  );
};

export default EmptyCart;
