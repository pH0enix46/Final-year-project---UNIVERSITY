import { assets } from "../assets/frontend-assets/assets";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <div
        className={`relative p-1 transition-all duration-[.3s] border-4 border-transparent hover:border-gray-400 hover:shadow-lg hover:animate-pulse rounded-full ${styles.glow}`}
      >
        <img
          src={assets.logo}
          alt="mac-haven--logo"
          className="w-20 rounded-full shadow-2xl cursor-pointer border-2 border-gray-400"
        />
      </div>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-300">
        <NavLink to="/" className="flex flex-col items-center gap-1 font-bold">
          <span className="relative hover:bg-gray-400 px-2 py-1.5 transition-all rounded-md border-2 border-transparent hover:border-gray-300 hover:text-gray-700">
            HOME
          </span>
          <hr className="w-3/5 border-none h-[2px] bg-gray-300" />
        </NavLink>

        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1 font-bold"
        >
          <span className="relative hover:bg-gray-400 px-2 py-1.5 transition-all rounded-md border-2 border-transparent hover:border-gray-300 hover:text-gray-700">
            COLLECTION
          </span>
          <hr className="w-3/5 border-none h-[2px] bg-gray-300" />
        </NavLink>

        <NavLink
          to="/about"
          className="flex flex-col items-center gap-1 font-bold"
        >
          <span className="relative hover:bg-gray-400 px-2 py-1.5 transition-all rounded-md border-2 border-transparent hover:border-gray-300 hover:text-gray-700">
            ABOUT
          </span>
          <hr className="w-3/5 border-none h-[2px] bg-gray-300" />
        </NavLink>

        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1 font-bold"
        >
          <span className="relative hover:bg-gray-400 px-2 py-1.5 transition-all rounded-md border-2 border-transparent hover:border-gray-300 hover:text-gray-700">
            CONTACT
          </span>
          <hr className="w-3/5 border-none h-[2px] bg-gray-300" />
        </NavLink>
      </ul>
    </div>
  );
}
export default Navbar;
