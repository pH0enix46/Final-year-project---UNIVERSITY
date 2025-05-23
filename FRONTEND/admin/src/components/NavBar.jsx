import { assets } from "../assets/assets";
import styles from "./logo.module.css";

// eslint-disable-next-line react/prop-types
const NavBar = ({ setToken, setSidebarOpen, sidebarOpen }) => {
  return (
    <nav className="bg-brand bg-opacity-95 backdrop-filter backdrop-blur-lg shadow-lg sticky top-0 z-40 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 sm:h-14">
          {/* Mobile menu button - visible only on small screens */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-md bg-secondary bg-opacity-20 text-gray-200 hover:bg-opacity-30 transition-colors"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="flex items-center">
            <div className={`flex-shrink-0 ${styles.glow} rounded-full`}>
              <img
                src={assets.logo}
                alt="mac-haven--logo"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-xl border-2 border-secondary transition-all duration-300 hover:scale-110"
              />
            </div>

            <h2 className="ml-3 sm:ml-4 text-gray-100 text-lg sm:text-xl md:text-2xl font-medium flex flex-wrap items-center">
              <span className="hidden md:inline">Welcome,</span>
              <span className="font-semibold ml-0 md:ml-1">Admin</span>
              <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Waving%20Hand.webp"
                alt="Waving Hand"
                width="28"
                height="28"
                className="ml-1 sm:ml-2 w-6 h-6 sm:w-8 sm:h-8"
              />
              <span className="hidden lg:inline ml-2 text-gray-200 opacity-80 text-base">
                mac🍏Haven Dashboard
              </span>
            </h2>
          </div>

          <div className="flex items-center">
            <button
              onClick={() => setToken("")}
              className="inline-flex items-center justify-center px-2 sm:px-4 py-1.5 sm:py-2 border border-transparent text-sm font-medium rounded-md text-white bg-secondary hover:bg-primary focus:outline-none transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Logout"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:mr-2"
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
