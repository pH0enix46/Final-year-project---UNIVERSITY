import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ closeSidebar }) => {
  const linkStyle =
    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-gray-100 hover:bg-secondary hover:shadow-md group";
  const activeStyle =
    "bg-secondary text-white shadow-md border-l-4 border-gray-200";

  const handleLinkClick = () => {
    // Close sidebar on mobile when a link is clicked
    if (window.innerWidth < 1024 && closeSidebar) {
      closeSidebar();
    }
  };

  return (
    <aside className="w-full h-full bg-brand bg-opacity-95 shadow-xl flex flex-col overflow-hidden">
      <div className="flex items-center justify-between p-5 border-b border-gray-700 border-opacity-50">
        <div>
          <h2 className="text-xl font-semibold text-gray-100">
            Admin Panel
          </h2>
        </div>
        
        {/* Close button for mobile */}
        {closeSidebar && (
          <button
            onClick={closeSidebar}
            className="lg:hidden p-2 rounded-md bg-gray-800 bg-opacity-30 text-gray-300"
            aria-label="Close sidebar"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      <div className="p-5 space-y-5 font-medium overflow-y-auto">
        <NavLink
          to="/dashboard"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : ""}`
          }
        >
          <div className="p-2 rounded bg-brand bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300">
            <img className="w-5 h-5" src={assets.dashboard_icon} alt="Dashboard" />
          </div>
          <span className="text-base">Dashboard</span>
        </NavLink>

        <NavLink
          to="/add"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : ""}`
          }
        >
          <div className="p-2 rounded bg-brand bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300">
            <img className="w-5 h-5" src={assets.add_icon} alt="Add" />
          </div>
          <span className="text-base">Add Products</span>
        </NavLink>

        <NavLink
          to="/list"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : ""}`
          }
        >
          <div className="p-2 rounded bg-brand bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300">
            <img className="w-5 h-5" src={assets.order_icon} alt="List" />
          </div>
          <span className="text-base">Product Inventory</span>
        </NavLink>

        <NavLink
          to="/order"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : ""}`
          }
        >
          <div className="p-2 rounded bg-brand bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300">
            <img className="w-5 h-5" src={assets.order_icon} alt="Order" />
          </div>
          <span className="text-base">Customer Orders</span>
        </NavLink>

        <div className="pt-8 mt-8 border-t border-gray-500 border-opacity-50">
          <div className="px-4 py-3 rounded-lg bg-secondary bg-opacity-30 text-gray-200 text-sm">
            <p className="font-semibold mb-1">Need Help?</p>
            <p className="opacity-80">
              Check the documentation or contact support for assistance.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
