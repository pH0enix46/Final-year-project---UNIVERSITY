import { assets } from "../assets/assets";
import styles from "./logo.module.css";

// eslint-disable-next-line react/prop-types
const NavBar = ({ setToken }) => {
  return (
    <nav
      className={`flex items-center justify-between px-6 sm:px-12 py-4 shadow-md bg-brand border-b-2 border-b-gray-500`}
    >
      <div
        className={`relative p-1 transition-all duration-[.3s] border-4 border-transparent hover:border-gray-400 hover:shadow-lg hover:animate-pulse rounded-full ${styles.glow}`}
      >
        <img
          src={assets.logo}
          alt="mac-haven--logo"
          className="w-16 rounded-full shadow-2xl cursor-pointer border-2 border-gray-400"
        />
      </div>

      <h2 className="text-gray-300 text-3xl flex gap-2 items-center justify-center">
        <span>Hello Admin</span>
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Waving%20Hand.webp"
          alt="Waving Hand"
          width="55"
          height="55"
        />
        <span>Welcome to mac🍏Haven</span>
      </h2>

      <button
        onClick={() => setToken("")}
        className="bg-primary text-gray-200 px-5 py-2 rounded-full text-lg font-medium hover:bg-brand transition-all duration-300 border-2 border-secondary shadow shadow-gray-500"
      >
        Logout
      </button>
    </nav>
  );
};

export default NavBar;
