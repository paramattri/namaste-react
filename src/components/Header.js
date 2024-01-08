import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="flex items-center justify-between shadow-md px-36">
      <Link to="/">
        <img className="w-20 cursor-pointer" src={LOGO_URL} alt="Swiggy Logo" />
      </Link>
      <ul className="flex items-center">
        <li className="mx-7">Search</li>
        <li className="mx-7">
          <Link to="/offers">Offers</Link>
        </li>
        <li className="mx-7">
          <Link to="/help">Help</Link>
        </li>
        <li className="mx-7">Sign In</li>
        <li className="mx-7">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
