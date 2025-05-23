import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import styles from "./Navbar.module.css";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  function mainOptionVisible() {
    setVisible(true);
  }

  function mainOptionUnvisible() {
    setVisible(false);
  }

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems([]);
    setDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
        <div 
          className="p-2 rounded-full bg-gray-300 bg-opacity-30 backdrop-blur-md flex items-center justify-center shadow-lg border-4 border-gray-400 cursor-pointer"
          onClick={() => setShowSearch(true)}
        >
          <img
            src={assets.serach_icon}
            alt="search_icon"
            className="w-4 h-4 sm:w-3 sm:h-3 md:w-5 md:h-5"
          />
        </div>

        <div className="dropdown dropdown-end" ref={dropdownRef}>
          <div 
            className="p-2 rounded-full bg-gray-300 bg-opacity-30 backdrop-blur-md flex items-center justify-center shadow-lg border-4 border-gray-400 cursor-pointer"
            onClick={toggleDropdown}
          >
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
            className={`dropdown-content menu bg-teal-950 z-[1] w-44 p-2 mt-2 rounded-xl border-4 border-teal-800 shadow-xl ${dropdownOpen ? 'block' : 'hidden'}`}
          >
            {token ? (
              <>
                <li>
                  <a onClick={() => {
                    navigate("/profile");
                    setDropdownOpen(false);
                  }}>My Profile</a>
                </li>
                <li>
                  <a onClick={() => {
                    navigate("/orders");
                    setDropdownOpen(false);
                  }}>Orders</a>
                </li>
                <li>
                  <a onClick={logout}>Logout</a>
                </li>
              </>
            ) : (
              <li>
                <a onClick={() => {
                  navigate("/login");
                  setDropdownOpen(false);
                }}>Login</a>
              </li>
            )}
          </ul>
        </div>

        <div className="relative">
          <div 
            className="p-2 rounded-full bg-gray-300 bg-opacity-30 backdrop-blur-md flex items-center justify-center shadow-lg border-4 border-gray-400 cursor-pointer"
            onClick={() => navigate('/cart')}
          >
            <img
              src={assets.cart_icon}
              alt="cart_icon"
              className="w-4 h-4 sm:w-3 sm:h-3 md:w-5 md:h-5"
            />
            <p className="absolute right-[-8px] bottom-[-8px] w-6 h-6 text-[14px] text-center leading-5 bg-primary text-slate-300 aspect-square rounded-full border-2 border-gray-400">
              {getCartCount()}
            </p>
          </div>
        </div>
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
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={mainOptionUnvisible}
      >
        <div 
          className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-brand shadow-2xl transition-transform duration-300 ease-in-out transform ${visible ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full text-gray-300">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center gap-2">
                <img
                  src={assets.logo}
                  alt="mac-haven--logo"
                  className="w-8 h-8 rounded-full shadow-md border border-gray-400"
                />
                <span className="font-bold text-lg">Mac Haven</span>
              </div>
              <button
                className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors"
                onClick={mainOptionUnvisible}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-2">
              <div className="px-4 py-2 mb-4 border-b border-gray-700">
                <NavLink 
                  to="/" 
                  className={({isActive}) => `block py-3 px-4 rounded-lg transition-colors ${isActive ? 'bg-teal-800 text-white' : 'hover:bg-gray-700'}`}
                  onClick={mainOptionUnvisible}
                >
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>HOME</span>
                  </div>
                </NavLink>
              </div>

              <div className="px-4 py-2">
                <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Navigation</h3>
                <NavLink 
                  to="/collection" 
                  className={({isActive}) => `block py-3 px-4 rounded-lg transition-colors ${isActive ? 'bg-teal-800 text-white' : 'hover:bg-gray-700'}`}
                  onClick={mainOptionUnvisible}
                >
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span>COLLECTION</span>
                  </div>
                </NavLink>

                <NavLink 
                  to="/about" 
                  className={({isActive}) => `block py-3 px-4 rounded-lg transition-colors ${isActive ? 'bg-teal-800 text-white' : 'hover:bg-gray-700'}`}
                  onClick={mainOptionUnvisible}
                >
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>ABOUT</span>
                  </div>
                </NavLink>

                <NavLink 
                  to="/contact" 
                  className={({isActive}) => `block py-3 px-4 rounded-lg transition-colors ${isActive ? 'bg-teal-800 text-white' : 'hover:bg-gray-700'}`}
                  onClick={mainOptionUnvisible}
                >
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>CONTACT</span>
                  </div>
                </NavLink>
              </div>

              {token && (
                <div className="px-4 py-2 mt-4 border-t border-gray-700">
                  <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold my-2">Account</h3>
                  <button 
                    className="w-full text-left py-3 px-4 rounded-lg transition-colors hover:bg-gray-700 flex items-center gap-3"
                    onClick={() => {
                      navigate("/profile");
                      mainOptionUnvisible();
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>My Profile</span>
                  </button>
                  <button 
                    className="w-full text-left py-3 px-4 rounded-lg transition-colors hover:bg-gray-700 flex items-center gap-3"
                    onClick={() => {
                      navigate("/orders");
                      mainOptionUnvisible();
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span>Orders</span>
                  </button>
                  <button 
                    className="w-full text-left py-3 px-4 rounded-lg transition-colors hover:bg-gray-700 flex items-center gap-3 text-red-400"
                    onClick={() => {
                      logout();
                      mainOptionUnvisible();
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* ⏺ NAV MAIN OPTION FOR SMALL SCREEN END*/}
    </div>
  );
}

export default Navbar;
