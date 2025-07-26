import { assets } from "../assets/assets";
import styles from "./logo.module.css";

// eslint-disable-next-line react/prop-types
const NavBar = ({ setToken, setSidebarOpen, sidebarOpen }) => {
  return (
    <nav className="bg-gradient-to-r from-brand via-primary to-secondary backdrop-blur-xl shadow-2xl sticky top-0 z-40 border-b border-white border-opacity-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* Mobile menu button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-3 rounded-xl bg-white bg-opacity-10 text-white hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          <div className="flex items-center gap-4">
            <div
              className={`flex-shrink-0 ${styles.glow} rounded-2xl p-1 bg-gradient-to-br from-white to-gray-100 shadow-2xl`}
            >
              <img
                src={assets.logo}
                alt="mac-haven--logo"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl shadow-xl border-2 border-white transition-all duration-300 hover:scale-110"
              />
            </div>

            <div className="flex flex-col">
              <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2">
                <span className="hidden md:inline">Welcome,</span>
                <span className="font-extrabold">Admin</span>
                <img
                  src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Waving%20Hand.webp"
                  alt="Waving Hand"
                  width="32"
                  height="32"
                  className="w-7 h-7 sm:w-8 sm:h-8"
                />
              </h2>
              <p className="hidden lg:block text-sm text-gray-200 opacity-80 font-medium">
                mac🍏Haven Dashboard
              </p>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Notification Bell */}
            <button className="p-3 rounded-xl bg-white bg-opacity-10 text-white hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm relative">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-5 5v-5zM4.83 2.83l4.24 4.24M20 12a8 8 0 11-16 0 8 8 0 0116 0z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile Avatar */}
            <div className="hidden sm:flex items-center gap-3 p-2 rounded-xl bg-white bg-opacity-10 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white to-gray-200 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-brand"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-semibold text-white">Admin User</p>
                <p className="text-xs text-gray-200 opacity-80">
                  Administrator
                </p>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={() => setToken("")}
              className="inline-flex items-center justify-center px-4 py-2.5 border border-white border-opacity-20 text-sm font-semibold rounded-xl text-white bg-white bg-opacity-10 hover:bg-opacity-20 focus:outline-none transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl"
              aria-label="Logout"
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
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
