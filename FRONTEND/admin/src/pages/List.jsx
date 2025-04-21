import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

const List = () => {
  const [list, setList] = useState([]);
  console.log(...list);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const removeProduct = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Authentication token not found");
        return;
      }

      const response = await axios.post(
        backendUrl + "api/product/remove",
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="w-full mt-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        All Products List
      </h2>

      <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] bg-gray-50 text-gray-600 text-sm font-medium border-y rounded-t-md px-4 py-3">
        <span>Image</span>
        <span>Name</span>
        <span>Category</span>
        <span>Price</span>
        <span className="text-center">Action</span>
      </div>

      <div className="flex flex-col">
        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center border-b px-4 py-3 text-sm hover:bg-gray-50 transition duration-200"
          >
            <img
              className="w-14 h-14 object-cover rounded shadow-sm"
              src={item.image?.[0]}
              alt={item.name}
            />
            <p className="text-gray-800 font-medium">{item.name}</p>
            <p className="text-gray-500">{item.category}</p>
            <p className="text-gray-700 font-semibold">
              {currency}
              {item.price}
            </p>
            <button
              onClick={() => removeProduct(item._id)}
              className="text-red-500 font-bold hover:text-red-700 transition text-right md:text-center"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
