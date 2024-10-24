import { assets } from "../assets/frontend-assets/assets";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} alt="mac-haven--logo" className="w-16" />

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <li></li>
      </ul>
    </div>
  );
}
export default Navbar;
