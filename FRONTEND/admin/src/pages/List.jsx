import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

const List = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(null);

  const fetchList = async () => {
    setLoading(true);
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const removeProduct = async (id) => {
    try {
      setDeleteLoading(id);
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Authentication token not found");
        return;
      }

      const response = await axios.post(
        backendUrl + "/api/product/remove",
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
    } finally {
      setDeleteLoading(null);
    }
  };

  return (
    <div className="w-full mt-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-300">
        All Products List
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
        </div>
      ) : (
        <>
          <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] bg-secondary text-gray-300 text-sm font-medium border-y rounded-t-md px-4 py-3 ">
            <span>Image</span>
            <span>Name</span>
            <span>Category</span>
            <span>Price</span>
            <span className="text-center">Action</span>
          </div>

          <div className="flex flex-col">
            {list.length === 0 ? (
              <div className="text-center py-8 text-gray-300">No products found</div>
            ) : (
              list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center border-b px-4 py-3 text-sm bg-primary transition duration-200"
          >
            <img
              className="w-14 h-14 object-cover rounded shadow-sm"
              src={item.image?.[0]}
              alt={item.name}
            />
            <p className="text-gray-300 font-medium text-xl">{item.name}</p>
            <p className="text-gray-300 text-lg">{item.category}</p>
            <p className="text-gray-300 font-semibold text-lg">
              {currency}
              {item.price}
            </p>

            <div className="text-center">
              <button
                onClick={() => removeProduct(item._id)}
                disabled={deleteLoading === item._id}
                className={`${deleteLoading === item._id ? 'bg-gray-300 text-gray-500' : 'bg-red-200 text-red-600 hover:bg-red-400'} transition-all duration-200 p-2 rounded-full font-bold shadow-sm hover:shadow-md w-10 h-10 flex items-center justify-center`}
                title="Remove Item"
              >
                {deleteLoading === item._id ? (
                  <div className="animate-spin h-5 w-5 border-t-2 border-b-2 border-red-600 rounded-full"></div>
                ) : (
                  '✕'
                )}
              </button>
            </div>
          </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default List;
