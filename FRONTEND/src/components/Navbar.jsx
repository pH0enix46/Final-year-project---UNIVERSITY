import { assets } from "../assets/frontend_assets/assets";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* ✅ LOGO */}
      <div
        className={`relative p-1 transition-all duration-[.3s] border-4 border-transparent hover:border-gray-400 hover:shadow-lg hover:animate-pulse rounded-full ${styles.glow}`}
      >
        <img
          src={assets.logo}
          alt="mac-haven--logo"
          className="w-20 rounded-full shadow-2xl cursor-pointer border-2 border-gray-400"
        />
      </div>
      {/* ⛔️ LOGO END */}

      {/* ✅ NAV */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-300">
        <NavLink to="/" className="flex flex-col items-center gap-1 font-bold">
          <span className="relative hover:bg-gray-400 px-2 py-1.5 transition-all rounded-md border-2 border-transparent hover:border-gray-300 hover:text-gray-700">
            HOME
          </span>
          <hr className="w-3/5 border-none h-[2px] bg-gray-300 hidden transition-all" />
        </NavLink>

        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1 font-bold"
        >
          <span className="relative hover:bg-gray-400 px-2 py-1.5 transition-all rounded-md border-2 border-transparent hover:border-gray-300 hover:text-gray-700">
            COLLECTION
          </span>
          <hr className="w-3/5 border-none h-[2px] bg-gray-300 hidden transition-all" />
        </NavLink>

        <NavLink
          to="/about"
          className="flex flex-col items-center gap-1 font-bold"
        >
          <span className="relative hover:bg-gray-400 px-2 py-1.5 transition-all rounded-md border-2 border-transparent hover:border-gray-300 hover:text-gray-700">
            ABOUT
          </span>
          <hr className="w-3/5 border-none h-[2px] bg-gray-300 hidden transition-all" />
        </NavLink>

        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1 font-bold"
        >
          <span className="relative hover:bg-gray-400 px-2 py-1.5 transition-all rounded-md border-2 border-transparent hover:border-gray-300 hover:text-gray-700">
            CONTACT
          </span>
          <hr className="w-3/5 border-none h-[2px] bg-gray-300 hidden transition-all" />
        </NavLink>
      </ul>
      {/* ⛔️ NAV END */}

      {/* ✅ OTHERS */}
      <div className="flex items-center gap-6">
        <div className="p-2 rounded-full bg-gray-300 bg-opacity-30 backdrop-blur-md flex items-center justify-center shadow-lg border-4 border-gray-400">
          <img
            src={assets.serach_icon}
            alt="search_icon"
            className="w-5 h-5 cursor-pointer"
          />
        </div>

        <div className="dropdown dropdown-end">
          <div className="p-2 rounded-full bg-gray-300 bg-opacity-30 backdrop-blur-md flex items-center justify-center shadow-lg border-4 border-gray-400">
            <img
              src={assets.profile_icon}
              alt="profile_icon"
              className="w-5 h-5 cursor-pointer"
              tabIndex={0}
              role="button"
            />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-teal-950 z-[1] w-44 p-2 mt-2 rounded-xl border-4 border-teal-800 shadow-xl"
          >
            <li>
              <a>My Profile</a>
            </li>
            <li>
              <a>Orders</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
      {/* ⛔️ OTHER'S END */}
    </div>
  );
}
export default Navbar;
