import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ closeSidebar }) => {
  const linkStyle =
    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-gray-100 hover:bg-white hover:bg-opacity-10 hover:shadow-lg group relative overflow-hidden backdrop-blur-sm";
  const activeStyle =
    "bg-gradient-to-r from-primary to-secondary text-white shadow-xl border-l-3 border-white transform scale-102";

  const handleLinkClick = () => {
    // Close sidebar on mobile when a link is clicked
    if (window.innerWidth < 1024 && closeSidebar) {
      closeSidebar();
    }
  };

  return (
    <aside className="w-full h-full bg-gradient-to-br from-brand via-primary to-secondary shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl border-r border-white border-opacity-10">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-white border-opacity-10 bg-white bg-opacity-5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white to-gray-200 flex items-center justify-center shadow-md">
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Admin Panel</h2>
            <p className="text-xs text-gray-300 opacity-70">
              Dashboard Control
            </p>
          </div>
        </div>

        {/* Close button for mobile */}
        {closeSidebar && (
          <button
            onClick={closeSidebar}
            className="lg:hidden p-2 rounded-lg bg-white bg-opacity-10 text-white hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm"
            aria-label="Close sidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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

      {/* Navigation Links */}
      <div className="flex-1 p-4 space-y-2 overflow-y-auto">
        <NavLink
          to="/dashboard"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : ""}`
          }
        >
          <div className="p-2.5 rounded-lg bg-white bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm">
            <img
              className="w-4 h-4 filter brightness-0 invert"
              src={assets.dashboard_icon}
              alt="Dashboard"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Dashboard</span>
            <span className="text-xs text-gray-300 opacity-60">
              Analytics & Overview
            </span>
          </div>
        </NavLink>

        <NavLink
          to="/add"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : ""}`
          }
        >
          <div className="p-2.5 rounded-lg bg-white bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm">
            <img
              className="w-4 h-4 filter brightness-0 invert"
              src={assets.add_icon}
              alt="Add"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Add Products</span>
            <span className="text-xs text-gray-300 opacity-60">
              Create New Items
            </span>
          </div>
        </NavLink>

        <NavLink
          to="/list"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : ""}`
          }
        >
          <div className="p-2.5 rounded-lg bg-white bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm">
            <img
              className="w-4 h-4 filter brightness-0 invert"
              src={assets.order_icon}
              alt="List"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Product Inventory</span>
            <span className="text-xs text-gray-300 opacity-60">
              Manage Products
            </span>
          </div>
        </NavLink>

        <NavLink
          to="/order"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : ""}`
          }
        >
          <div className="p-2.5 rounded-lg bg-white bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm">
            <img
              className="w-4 h-4 filter brightness-0 invert"
              src={assets.order_icon}
              alt="Order"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Customer Orders</span>
            <span className="text-xs text-gray-300 opacity-60">
              Order Management
            </span>
          </div>
        </NavLink>
      </div>

      {/* Help Section */}
      <div className="p-4 border-t border-white border-opacity-10">
        <div className="p-3 rounded-xl bg-gradient-to-r from-white to-gray-100 bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-800">Need Help?</h3>
          </div>
          <p className="text-xs text-gray-800 opacity-70 mb-2">
            Check the documentation or contact support for assistance.
          </p>
          <button className="w-full py-1.5 px-3 rounded-lg bg-white bg-opacity-10 text-white text-xs font-medium hover:bg-opacity-20 transition-all duration-300">
            Get Support
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
