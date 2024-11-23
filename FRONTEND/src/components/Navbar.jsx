import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  function mainOptionVisible() {
    setVisible(true);
  }

  function mainOptionUnvisible() {
    setVisible(false);
  }

  return (
    <div className="flex items-center justify-between font-medium p-4 rounded-xl border-secondary shadow-lg">
      {/* ⏺ LOGO */}
      <Link to="/">
        <div
          className={`relative p-1 transition-all duration-[.3s] border-4 border-transparent hover:border-gray-400 hover:shadow-lg hover:animate-pulse rounded-full ${styles.glow}`}
        >
          <img
            src={assets.logo}
            alt="mac-haven--logo"
            className="w-12 lg:w-20 md:w-14 sm:w-10 rounded-full shadow-2xl cursor-pointer border-2 border-gray-400"
          />
        </div>
      </Link>
      {/* ⏺ LOGO END */}

      {/* ⏺ NAV MAIN OPTION */}
      <ul className="hidden sm:flex lg:gap-5 sm:text-xs md:text-sm lg:text-lg text-gray-300">
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
      {/* ⏺ NAV MAIN OPTION */}

      {/* ⏺ OTHERS OPTION */}
      <div className="flex items-center lg:gap-6 md:gap-4 gap-3">
        <div className="p-2 rounded-full bg-gray-300 bg-opacity-30 backdrop-blur-md flex items-center justify-center shadow-lg border-4 border-gray-400">
          <NavLink to="/collection">
            <img
              src={assets.serach_icon}
              alt="search_icon"
              className="w-4 h-4 sm:w-3 sm:h-3 md:w-5 md:h-5 cursor-pointer"
              // onClick={() => setShowSearch((prev) => !prev)}
              onClick={() => setShowSearch(true)}
            />
          </NavLink>
        </div>

        <div className="dropdown dropdown-end">
          <div className="p-2 rounded-full bg-gray-300 bg-opacity-30 backdrop-blur-md flex items-center justify-center shadow-lg border-4 border-gray-400">
            <img
              src={assets.profile_icon}
              alt="profile_icon"
              className="w-4 h-4 sm:w-3 sm:h-3 md:w-5 md:h-5 cursor-pointer"
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

        <Link to="/cart" className="relative">
          <div className="p-2 rounded-full bg-gray-300 bg-opacity-30 backdrop-blur-md flex items-center justify-center shadow-lg border-4 border-gray-400">
            <img
              src={assets.cart_icon}
              alt="cart_icon"
              className="w-4 h-4 sm:w-3 sm:h-3 md:w-5 md:h-5 cursor-pointer"
            />
            <p className="absolute right-[-8px] bottom-[-8px] w-6 h-6 text-[14px] text-center leading-5 bg-primary text-slate-300 aspect-square rounded-full border-2 border-gray-400">
              {getCartCount()}
            </p>
          </div>
        </Link>
        {/* ⏺ MENU ICON */}
        <div
          className="p-2 rounded-full bg-gray-300 bg-opacity-30 backdrop-blur-md flex items-center justify-center shadow-lg border-4 border-gray-400 sm:hidden cursor-pointer"
          onClick={mainOptionVisible}
        >
          <img
            src={assets.menu_icon}
            alt="menu_icon"
            className="w-4 h-4 sm:w-3 sm:h-3 md:w-5 md:h-5"
          />
        </div>
        {/* ⏺ MENU ICON END */}
      </div>
      {/* ⏺ OTHER'S OPTION END */}

      {/* ⏺ NAV MAIN OPTION FOR SMALL SCREEN */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-brand transition-all shadow-2xl rounded-3xl ${
          visible
            ? "w-1/2 h-1/2 border-l-2 border-b-2 border-gray-400 z-10"
            : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-300">
          <div
            className="flex items-center gap-4 p-3 cursor-pointer border-b-2 border-gray-400"
            onClick={mainOptionUnvisible}
          >
            <div className="p-2 rounded-full bg-gray-300 bg-opacity-30 backdrop-blur-md flex items-center justify-center shadow-lg border-2 border-gray-400">
              <img
                src={assets.dropdown_icon}
                alt="dropdown_icon"
                className="w-3 h-3 cursor-pointer rotate-180"
              />
            </div>
            <span>Back</span>
          </div>

          <NavLink className="py-2 pl-6" to="/" onClick={mainOptionUnvisible}>
            <span className="relative hover:bg-gray-400 px-2 py-1.5 transition-all rounded-md border-2 border-transparent hover:border-gray-300 hover:text-gray-700">
              HOME
            </span>
          </NavLink>
          <NavLink
            className="py-2 pl-6"
            to="/collection"
            onClick={mainOptionUnvisible}
          >
            <span className="relative hover:bg-gray-400 px-2 py-1.5 transition-all rounded-md border-2 border-transparent hover:border-gray-300 hover:text-gray-700">
              COLLECTION
            </span>
          </NavLink>
          <NavLink
            className="py-2 pl-6"
            to="/about"
            onClick={mainOptionUnvisible}
          >
            <span className="relative hover:bg-gray-400 px-2 py-1.5 transition-all rounded-md border-2 border-transparent hover:border-gray-300 hover:text-gray-700">
              ABOUT
            </span>
          </NavLink>
          <NavLink
            className="py-2 pl-6"
            to="/contact"
            onClick={mainOptionUnvisible}
          >
            <span className="relative hover:bg-gray-400 px-2 py-1.5 transition-all rounded-md border-2 border-transparent hover:border-gray-300 hover:text-gray-700">
              CONTACT
            </span>
          </NavLink>
        </div>
      </div>
      {/* ⏺ NAV MAIN OPTION FOR SMALL SCREEN END*/}
    </div>
  );
}
export default Navbar;
