// eslint-disable-next-line no-unused-vars
import React from "react";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./../components/Title";
import axios from "axios";
import { FiPackage, FiTruck, FiCheck, FiAlertTriangle } from "react-icons/fi";
import { Link } from "react-router-dom";

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */

function Orders() {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load order data function
  const fetchOrders = async () => {
    setIsLoading(true);
    setError(null);

    try {
      if (!token) {
        setIsLoading(false);
        return;
      }

      const response = await axios.post(
        `${backendUrl}/api/order/userOrders`,
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        // Keep the original order structure instead of flattening
        setOrders(
          response.data.orders.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          )
        );
      } else {
        setError(response.data.message || "Failed to load orders");
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
          error.message ||
          "An error occurred while loading orders"
      );
      console.error("Order loading error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Call fetchOrders when component mounts
  useEffect(() => {
    fetchOrders();
  }, []);

  // Helper function to get status icon and color
  const getStatusInfo = (status) => {
    switch (status) {
      case "Order Placed":
        return {
          icon: <FiPackage className="text-blue-500" />,
          className: "text-blue-500",
        };
      case "Shipped":
        return {
          icon: <FiTruck className="text-orange-500" />,
          className: "text-orange-500",
        };
      case "Delivered":
        return {
          icon: <FiCheck className="text-green-500" />,
          className: "text-green-500",
        };
      case "Cancelled":
        return {
          icon: <FiAlertTriangle className="text-red-500" />,
          className: "text-red-500",
        };
      default:
        return {
          icon: <FiPackage className="text-blue-500" />,
          className: "text-blue-500",
        };
    }
  };

  // Format date to be more readable
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="pt-16 pb-10">
      <div className="text-2xl mb-6">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-10">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-500"></div>
        </div>
      ) : error ? (
        <div className="text-center py-8">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={fetchOrders}
            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      ) : orders.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-400 mb-4">
            You haven't placed any orders yet.
          </p>
          <Link
            to="/collections"
            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border border-gray-700 rounded-lg overflow-hidden bg-gray-900 shadow-lg"
            >
              <div className="bg-gray-800 p-4 flex justify-between items-center">
                <div>
                  <p className="text-gray-300 text-sm">
                    Order Date:{" "}
                    <span className="font-medium">
                      {formatDate(order.date)}
                    </span>
                  </p>
                  <p className="text-gray-300 text-sm mt-1">
                    Order ID:{" "}
                    <span className="font-mono text-xs">{order._id}</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusInfo(order.status).icon}
                  <span
                    className={`${
                      getStatusInfo(order.status).className
                    } font-medium`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>

              <div className="p-4">
                {order.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-4 border-b border-gray-800 last:border-b-0"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        className="w-16 sm:w-20 h-16 sm:h-20 object-cover rounded-md overflow-hidden shadow-lg"
                        src={item.image[0]}
                        alt={item.name}
                      />

                      <div>
                        <p className="text-gray-300 font-medium">{item.name}</p>
                        <div className="flex flex-wrap items-center gap-3 mt-2 text-gray-400">
                          <p className="text-lg">
                            {currency}
                            {item.price}
                          </p>
                          <p>Quantity: {item.quantity || 1}</p>
                          {item.color && <p>Color: {item.color}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-800 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="text-gray-300 text-sm">
                    Payment Method:{" "}
                    <span className="font-medium">{order.paymentMethod}</span>
                  </p>
                  <p className="text-gray-300 text-sm mt-1">
                    Payment Status:
                    <span
                      className={
                        order.payment
                          ? "text-green-500 ml-1"
                          : "text-yellow-500 ml-1"
                      }
                    >
                      {order.payment ? "Paid" : "Pending"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
