import { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

// eslint-disable-next-line react/prop-types
const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        `${backendUrl}api/order/list`,
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
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/status`,
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success("Order status updated");
        await fetchAllOrders();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update status");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Orders</h3>
      <div className="flex flex-col gap-5">
        {orders.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-[0.4fr_2fr_1fr] lg:grid-cols-[0.4fr_2fr_1fr_1fr_1fr] gap-4 items-start border rounded-xl shadow-sm p-5 bg-white"
          >
            <img
              className="w-14 h-14 object-contain"
              src={assets.parcel_icon}
              alt="Parcel Icon"
            />

            {/* Order Details */}
            <div className="text-gray-700 text-sm space-y-1">
              <div>
                {order.items.map((item, idx) => (
                  <p key={idx}>
                    <span className="font-medium">{item.name}</span> x{" "}
                    {item.quantity} ({item.size})
                  </p>
                ))}
              </div>
              <p className="font-semibold pt-2">
                {order.address.firstName} {order.address.lastName}
              </p>
              <div className="text-xs">
                <p>{order.address.street},</p>
                <p>
                  {order.address.city}, {order.address.state},{" "}
                  {order.address.country}, {order.address.zipcode}
                </p>
              </div>
              <p className="text-xs font-medium pt-1">
                📞 {order.address.phone}
              </p>
            </div>

            {/* Meta Info */}
            <div className="text-sm text-gray-600 space-y-1">
              <p className="text-base font-semibold">
                Items: {order.items.length}
              </p>
              <p>Method: {order.paymentMethod}</p>
              <p>Payment: {order.payment}</p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            </div>

            {/* Total */}
            <div className="text-base font-bold text-green-700 flex items-center">
              {currency}
              {order.amount}
            </div>

            {/* Status Select */}
            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
              className="p-2 rounded-md border bg-gray-50 font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
