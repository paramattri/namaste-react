import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="flex items-center justify-between shadow-md px-36">
      <img className="w-20 cursor-pointer" src={LOGO_URL} alt="Swiggy Logo" />
      <ul className="flex items-center">
        <li className="mx-7">Search</li>
        <li className="mx-7">Offers</li>
        <li className="mx-7">Help</li>
        <li className="mx-7">Sign In</li>
        <li className="mx-7">Cart</li>
      </ul>
    </div>
  );
};

export default Header;
