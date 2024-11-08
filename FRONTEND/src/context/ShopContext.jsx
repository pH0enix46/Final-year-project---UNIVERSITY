/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

function ShopContextProvider({ children }) {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const currency = "৳";
  const delivery_fee = 50;

  async function addToCart(itemID, color) {
    let cartData = structuredClone(cartItems); // ⏺ structuredClone() method/function ES22 creates a deep copy of an object, preserving nested objects and special types (like Dates, Maps, and Sets). It’s ideal for cloning complex data without altering the original

    if (cartData[itemID]) {
      if (cartData[itemID][color]) {
        cartData[itemID][color] += 1;
      } else cartData[itemID][color] = 1;
    } else {
      cartData[itemID] = {};
      cartData[itemID][color] = 1;
    }

    setCartItems(cartData);
  }

  useEffect(
    function () {
      console.log(cartItems);
    },
    [cartItems]
  );

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
export default ShopContextProvider;
