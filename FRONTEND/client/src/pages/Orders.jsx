import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./../components/Title";
import axios from "axios";

function Orders() {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  // console.log(orderData);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post(
        backendUrl + "/api/order/userOrders",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        let allOrderItems = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrderItems.push(item);
          });
        });
        console.log(allOrderItems);
        setOrderData(allOrderItems.reverse());
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div>
        {orderData.map((item, index) => (
          <div
            key={index}
            className="border-t border-b border-gray-500 text-gray-400 p-4  flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img
                className="w-16 sm:w-20 rounded-md overflow-hidden shadow-lg"
                src={item.image[0]}
                alt="product_img"
              />

              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-400">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Color: Starlight</p>
                </div>

                <p className="mt-1">
                  Date:{" "}
                  <span className="text-gray-400">
                    {new Date(item.date).toDateString()}
                  </span>
                </p>
                <p className="mt-1 border-b-2 border-b-green-600 w-fit">
                  Payment:{" "}
                  <span className="text-gray-400">{item.paymentMethod}</span>
                </p>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500 shadow-lg"></p>
                <p className="text-sm sm:text-base">Ready to ship</p>
              </div>

              <button
                className="border-2 border-gray-500 px-4 py-2 text-sm font-medium rounded-lg shadow-xl "
                onClick={loadOrderData}
              >
                Track Order!
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Orders;
