/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { products } from "../assets/frontend_assets/assets";
import axios from "axios";

export const ShopContext = createContext();

function ShopContextProvider({ children }) {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  // const [cartItems, setCartItems] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [productData, setProductData] = useState([]);
  const [token, setToken] = useState("");
  const currency = "৳";
  const delivery_fee = 40;
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // ⏺ Add to cart logic with backend
  async function addToCart(itemID, color) {
    if (!color) {
      toast.error("Select Product Color", {
        style: {
          backgroundColor: "#6666ffd8",
          color: "#ddd",
          fontWeight: "bold",
        },
      });
      return;
    }

    let cartData = structuredClone(cartItems);
    console.log(itemID);
    // Ensure cartData is initialized as an object if it is undefined or null
    cartData = cartData || {}; // If cartData is undefined or null, initialize it as an empty object

    // Ensure that cartData[itemID] exists, if not initialize it
    if (!cartData[itemID]) {
      cartData[itemID] = {}; // Initialize cartData[itemID] if it doesn't exist
    }
    if (cartData[itemID][color]) {
      cartData[itemID][color] += 1;
    } else {
      cartData[itemID][color] = 1;
    }

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/add`,
          { itemId: itemID, size: color },
          { headers: { token } }
        );
      } catch (err) {
        toast.error(err.message);
      }
    }
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

  async function updatedQuantity(itemID, color, quantity) {
    let cartData = structuredClone(cartItems);
    cartData[itemID][color] = quantity;
    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/update`,
          { itemId: itemID, size: color, quantity },
          { headers: { token } }
        );
      } catch (err) {
        toast.error(err.message);
      }
    }
  }

  function getCartAmount() {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
    return totalAmount;
  }

  const fetchProducts = useCallback(async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/product/list`);
      if (res.data.success) {
        // Set productData to the API products
        setProductData(res.data.products);
      }
    } catch (err) {
      toast.error(err.message);
    }
  }, [backendUrl, setProductData]);

  const fetchCart = useCallback(
    async (token) => {
      try {
        const res = await axios.post(
          `${backendUrl}/api/cart/get`,
          {},
          { headers: { token } }
        );
        if (res.data.success) {
          setCartItems(res.data.cartData);
        }
      } catch (err) {
        toast.error(err.message);
      }
    },
    [backendUrl, setCartItems]
  );

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!token && storedToken) {
      setToken(storedToken);
      fetchCart(storedToken);
    }
  }, [token, fetchCart]);

  // Combine static products with dynamic products from API
  const combinedProducts = [...products];
  
  // Add products from API that aren't in the static list
  if (productData && productData.length > 0) {
    const staticIds = products.map(p => p._id);
    const newProducts = productData.filter(p => !staticIds.includes(p._id));
    combinedProducts.push(...newProducts);
  }

  const value = {
    productData,
    // Use combinedProducts as the main products list
    products: combinedProducts,
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
    getCartAmount,
    navigate,
    backendUrl,
    token,
    setToken,
    setProductData,
    setCartItems,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
export default ShopContextProvider;
