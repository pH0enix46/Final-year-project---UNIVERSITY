import { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

// eslint-disable-next-line react/prop-types
const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(null);

  const fetchAllOrders = async () => {
    if (!token) return;
    
    setLoading(true);
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/list`,
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const deleteOrderHandler = async (orderId) => {
    if (!window.confirm('Are you sure you want to delete this order?')) return;
    
    setDeleteLoading(orderId);
    try {
      // Since there's no dedicated delete endpoint, we'll mark the order as "Deleted"
      // using the existing status update endpoint
      const response = await axios.post(
        `${backendUrl}/api/order/status`,
        { orderId, status: "Deleted" },
        { headers: { token } }
      );
      
      if (response.data.success) {
        toast.success("Order marked as deleted");
        // Update the orders list by filtering out the deleted order from UI
        setOrders(orders.filter(order => order._id !== orderId));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete order");
    } finally {
      setDeleteLoading(null);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="mt-4 sm:mt-6">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-300 mb-4 sm:mb-6">Customer Orders</h3>
      
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 sm:gap-5">
          {orders.length === 0 ? (
            <div className="card p-6 text-center text-gray-300">
              <p>No orders found</p>
            </div>
          ) : (
          orders.map((order, index) => (
            <div
              key={index}
              className="card overflow-hidden"
            >
              <div className="p-4 sm:p-5 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-[1fr_1fr_auto] items-start">
                {/* Order Details Column */}
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-12 h-12 sm:w-14 sm:h-14 object-contain bg-secondary bg-opacity-20 p-2 rounded-full"
                      src={assets.parcel_icon}
                      alt="Parcel Icon"
                    />
                  </div>
                  
                  <div className="text-gray-300 text-sm sm:text-md space-y-1 flex-1">
                    <div className="space-y-0.5">
                      {order.items.map((item, idx) => (
                        <p key={idx} className="line-clamp-1">
                          <span className="font-medium">{item.name}</span> x{" "}
                          {item.quantity} {item.size && `(${item.size})`}
                        </p>
                      ))}
                    </div>
                    <p className="font-semibold pt-2">
                      {order.address.firstName} {order.address.lastName}
                    </p>
                    <div className="text-xs">
                      <p>
                        {order.address.city}, {order.address.country}
                      </p>
                    </div>
                    <p className="text-base font-medium pt-1">
                      📳 {order.address.phone}
                    </p>
                  </div>
                </div>
                
                {/* Meta Info Column */}
                <div className="text-sm text-gray-300 space-y-1 flex flex-col sm:flex-row md:flex-col justify-between sm:items-center md:items-start gap-2 sm:gap-4">
                  <div>
                    <p className="text-base font-semibold">
                      Items: {order.items.length}
                    </p>
                    <p>Method: {order.paymentMethod}</p>
                    <p>Payment: {order.payment ? "Paid" : "Pending"}</p>
                    <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                  </div>
                  
                  <div className="text-lg font-bold text-green-500 flex items-center">
                    {currency}
                    {order.amount}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex justify-end items-center mt-2 sm:mt-0">
                  <button
                    onClick={() => deleteOrderHandler(order._id)}
                    disabled={deleteLoading === order._id}
                    className={`btn btn-outline ${deleteLoading === order._id ? 'bg-gray-500 bg-opacity-20 cursor-not-allowed' : 'bg-red-500 bg-opacity-10 hover:bg-red-500 hover:bg-opacity-20'} border-red-400 border-opacity-30 text-red-100 py-1.5 sm:py-2 px-3 sm:px-4 text-sm flex items-center`}
                    aria-label="Delete order"
                  >
                    {deleteLoading === order._id ? (
                      <div className="animate-spin h-4 w-4 sm:h-5 sm:w-5 mr-1 border-t-2 border-b-2 border-red-100 rounded-full"></div>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span className="hidden xs:inline">Delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))
          )}
        </div>
      )}
    </div>
  );
};

export default Orders;
