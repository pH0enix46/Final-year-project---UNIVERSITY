import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const linkStyle =
    "flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 text-gray-700 hover:bg-gray-100 hover:scale-[1.02]";
  const activeStyle = "bg-black text-white hover:bg-black";

  return (
    <aside className="w-[18%] min-h-screen border-r border-gray-200 bg-white shadow-sm">
      <div className="flex flex-col gap-3 pt-8 px-6 text-[15px] font-medium">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : ""}`
          }
        >
          <img className="w-5 h-5" src={assets.add_icon} alt="Add" />
          <span>Add Items</span>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : ""}`
          }
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="List" />
          <span>List Items</span>
        </NavLink>

        <NavLink
          to="/order"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : ""}`
          }
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="Order" />
          <span>Order Items</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
