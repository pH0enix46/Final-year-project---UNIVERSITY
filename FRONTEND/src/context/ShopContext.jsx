/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

function ShopContextProvider({ children }) {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const currency = "৳";
  const delivery_fee = 50;

  async function addToCart(itemID, color) {
    // ⏺ GUARD CLAUSE
    if (!color) {
      toast.error("Select Product Color", {
        style: {
          backgroundColor: "#6666ffd8",
          color: "#ddd",
          fontWeight: "bold",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        },
      });
      return;
    }

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

  function getCartCount() {
    let totalCount = 0;

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) totalCount += cartItems[items][item];
      }
    }

    return totalCount;
  }

  // useEffect(
  //   function () {
  //     console.log(cartItems);
  //   },
  //   [cartItems]
  // );

  async function updatedQuantity(itemID, color, quantity) {
    let cartData = structuredClone(cartItems);
    cartData[itemID][color] = quantity;
    setCartItems(cartData);
  }

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
    getCartCount,
    updatedQuantity,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
export default ShopContextProvider;
