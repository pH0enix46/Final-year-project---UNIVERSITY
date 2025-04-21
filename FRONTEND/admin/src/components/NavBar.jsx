import { assets } from "../assets/assets";

// eslint-disable-next-line react/prop-types
const NavBar = ({ setToken }) => {
  return (
    <nav className="flex items-center justify-between px-6 sm:px-12 py-4 shadow-md bg-white">
      <img
        src={assets.logo}
        alt="Logo"
        className="w-16 object-contain shadow-lg shadow-gray-400 rounded-full"
      />
      <button
        onClick={() => setToken("")}
        className="bg-gray-700 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-300"
      >
        Logout
      </button>
    </nav>
  );
};

export default NavBar;
