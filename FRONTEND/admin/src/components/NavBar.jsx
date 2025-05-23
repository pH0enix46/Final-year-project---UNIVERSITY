import { assets } from "../assets/assets";
import styles from "./logo.module.css";

// eslint-disable-next-line react/prop-types
const NavBar = ({ setToken }) => {
  return (
    <nav className="bg-brand bg-opacity-95 backdrop-filter backdrop-blur-lg shadow-lg sticky top-0 z-50 py-4 mb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className={`flex-shrink-0 ${styles.glow} rounded-full`}>
              <img
                src={assets.logo}
                alt="mac-haven--logo"
                className="w-12 h-12 rounded-full shadow-xl border-2 border-secondary transition-all duration-300 hover:scale-110"
              />
            </div>

            <h2 className="ml-4 text-gray-100 text-xl md:text-2xl font-medium flex items-center">
              <span className="hidden md:inline">Welcome,</span>
              <span className="font-semibold ml-1">Admin</span>
              <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Waving%20Hand.webp"
                alt="Waving Hand"
                width="35"
                height="35"
                className="ml-2"
              />
              <span className="hidden lg:inline ml-2 text-gray-200 opacity-80">
                mac🍏Haven Dashboard
              </span>
            </h2>
          </div>

          <div className="flex items-center">
            <button
              onClick={() => setToken("")}
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-secondary hover:bg-primary focus:outline-none transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
