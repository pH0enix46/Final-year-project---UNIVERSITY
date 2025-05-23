import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const linkStyle =
    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-gray-100 hover:bg-secondary hover:shadow-md group";
  const activeStyle =
    "bg-secondary text-white shadow-md border-l-4 border-gray-200";

  return (
    <aside className="w-64 bg-brand bg-opacity-90 backdrop-filter backdrop-blur-sm shadow-xl">
      <div className="h-full px-3 py-8 overflow-y-auto">
        <div className="mb-8 px-4">
          <h2 className="text-xl font-semibold text-gray-100 mb-1">Admin Panel</h2>
          <p className="text-gray-300 text-sm">Manage your products & orders</p>
        </div>
        
        <div className="space-y-2 font-medium">
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            <div className="p-1.5 rounded bg-brand bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300">
              <img className="w-5 h-5" src={assets.add_icon} alt="Add" />
            </div>
            <span>Add Products</span>
          </NavLink>

          <NavLink
            to="/list"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            <div className="p-1.5 rounded bg-brand bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300">
              <img className="w-5 h-5" src={assets.order_icon} alt="List" />
            </div>
            <span>Product Inventory</span>
          </NavLink>

          <NavLink
            to="/order"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            <div className="p-1.5 rounded bg-brand bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300">
              <img className="w-5 h-5" src={assets.order_icon} alt="Order" />
            </div>
            <span>Customer Orders</span>
          </NavLink>
          
          <div className="pt-8 mt-8 border-t border-gray-500 border-opacity-50">
            <div className="px-4 py-3 rounded-lg bg-secondary bg-opacity-30 text-gray-200 text-sm">
              <p className="font-semibold mb-1">Need Help?</p>
              <p className="opacity-80">Check the documentation or contact support for assistance.</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
