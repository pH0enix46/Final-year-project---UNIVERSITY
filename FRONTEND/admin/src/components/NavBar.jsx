import { assets } from "../assets/assets";
import styles from "./logo.module.css";

// eslint-disable-next-line react/prop-types
const NavBar = ({ setToken, setSidebarOpen, sidebarOpen }) => {
  return (
    <nav className="bg-gradient-to-r from-brand via-primary to-secondary backdrop-blur-xl shadow-2xl sticky top-0 z-40 border-b border-white border-opacity-10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-4">
        <div className="flex justify-between items-center h-14 sm:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 sm:p-3 rounded-xl bg-white bg-opacity-10 text-white hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm hover:scale-105 cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Logo and Title */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div
              className={`flex-shrink-0 ${styles.glow} rounded-xl sm:rounded-2xl p-1.5 sm:p-2 bg-gradient-to-br from-white to-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer`}
            >
              <img
                src={assets.logo}
                alt="mac-haven--logo"
                className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl shadow-xl border-2 border-white transition-all duration-300 hover:scale-110"
              />
            </div>

            <div className="flex flex-col">
              <h2 className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl font-bold flex items-center gap-1 sm:gap-3">
                <span className="hidden md:inline text-gray-200">Welcome,</span>
                <span className="font-extrabold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  Admin
                </span>
                <img
                  src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Waving%20Hand.webp"
                  alt="Waving Hand"
                  width="36"
                  height="36"
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 animate-bounce"
                />
              </h2>
              <p className="hidden lg:block text-sm text-gray-200 opacity-80 font-medium mt-1">
                mac🍏Haven Dashboard • Real-time Analytics
              </p>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Logout Button */}
            <button
              onClick={() => setToken("")}
              className="inline-flex items-center justify-center px-3 py-2 sm:px-5 sm:py-3 border border-white border-opacity-20 text-sm font-semibold rounded-full text-white bg-white bg-opacity-10 hover:bg-opacity-20 focus:outline-none transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105 group"
              aria-label="Logout"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 group-hover:animate-pulse"
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
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
