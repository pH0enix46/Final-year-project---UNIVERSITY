import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

function SearchBar() {
  const [visible, setVisible] = useState(false);
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation();

  useEffect(
    function () {
      // console.log(location.pathname);

      if (location.pathname.includes("collection")) setVisible(true);
      else setVisible(false);
    },
    [location, showSearch]
  );

  return showSearch && visible ? (
    <div className="border-t-2 border-b-2 bg-primary text-center border-gray-400">
      <div className="inline-flex items-center justify-center border-2 border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 ">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-base"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={assets.serach_icon} alt="search" className="w-5" />
      </div>

      <img
        src={assets.cross_icon}
        alt="cross"
        className="inline p-2 cursor-pointer border-2 rounded-full bg-brand border-gray-500 shadow-lg"
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
}
export default SearchBar;
