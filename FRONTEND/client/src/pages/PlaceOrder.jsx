import Title from "./../components/Title";
import CartTotal from "./../components/CartTotal";
import { assets } from "../assets/frontend_assets/assets";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PlaceOrder() {
  const navigate = useNavigate();
  const {
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);
  // console.log(cartItems);
  const [method, setMethod] = useState("CashOnDelivery");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];

      Object.keys(cartItems).forEach((itemId) => {
        Object.keys(cartItems[itemId]).forEach((size) => {
          if (cartItems[itemId][size] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === itemId)
            );
            if (itemInfo) {
              itemInfo.size = size;
              itemInfo.quantity = cartItems[itemId][size];
              orderItems.push(itemInfo);
            }
          }
        });
      });

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        case "CashOnDelivery": {
          const response = await axios.post(
            `${backendUrl}/api/order/place`,
            orderData,
            { headers: { token } }
          );
          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;
        }

        case "Stripe": {
          const response = await axios.post(
            `${backendUrl}/api/order/stripe`,
            orderData,
            { headers: { token } }
          );
          if (response.data.success) {
            window.location.href = response.data.session_url;
          } else {
            toast.error(response.data.message);
          }
          break;
        }

        default:
          break;
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] items-start"
      onSubmit={onSubmitHandler}
    >
      <input type="hidden" name="cartItems" value={JSON.stringify(cartItems)} />

      {/* ------------------ LEFT SIDE ------------------ */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="border-2 border-gray-500 px-6 py-12 rounded-xl shadow-lg shadow-gray-500 flex flex-col gap-6">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="First Name"
              required
              onChange={onChangeHandler}
              name="firstName"
              value={formData.firstName}
              className="border-2 border-gray-500 rounded-lg py-1 px-2 w-full bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 ease-in-out"
            />
            <input
              required
              onChange={onChangeHandler}
              name="lastName"
              value={formData.lastName}
              type="text"
              placeholder="Last Name"
              className="border-2 border-gray-500 rounded-lg py-1 px-2 w-full bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 ease-in-out"
            />
          </div>
          <input
            required
            onChange={onChangeHandler}
            name="email"
            value={formData.email}
            type="email"
            placeholder="Email address"
            className="border-2 border-gray-500 rounded-lg px-2 w-full bg-transparent text-gray-300 placeholder-gray-500 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 ease-in-out"
          />
          <div className="flex gap-3">
            <input
              required
              onChange={onChangeHandler}
              name="city"
              value={formData.city}
              type="text"
              placeholder="City"
              className="border-2 border-gray-500 rounded-lg py-1 px-2 w-full bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 ease-in-out"
            />
            <input
              required
              onChange={onChangeHandler}
              name="country"
              value={formData.country}
              type="text"
              placeholder="Country"
              className="border-2 border-gray-500 rounded-lg py-1 px-2 w-full bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 ease-in-out"
            />
          </div>
          <input
            required
            onChange={onChangeHandler}
            name="phone"
            value={formData.phone}
            type="number"
            placeholder="Phone number"
            className="border-2 border-gray-500 rounded-lg px-2 w-full bg-transparent text-gray-300 placeholder-gray-500 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* ------------------ RIGHT SIDE ------------------ */}
      <div className="">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex gap-5 flex-col md:flex-row">
            <div
              onClick={() => setMethod("Stripe")}
              className="flex items-center gap-3 border border-gray-500 rounded-md p-2 px-3 cursor-pointer shadow-xl"
            >
              <p
                className={`min-w-3.5 h-3.5 border-2 border-gray-400 rounded-full ${
                  method === "Stripe" ? "bg-green-500" : ""
                }`}
              ></p>
              <img src={assets.stripe_logo} alt="stripe" className="h-6 mx-2" />
            </div>

            <div
              onClick={() => setMethod("CashOnDelivery")}
              className="flex items-center gap-3 border border-gray-500 rounded-md p-2 px-3 cursor-pointer shadow-xl"
            >
              <p
                className={`min-w-3.5 h-3.5 border-2 border-gray-400 rounded-full ${
                  method === "CashOnDelivery" ? "bg-green-500" : ""
                }`}
              ></p>
              <p className="text-sm font-medium">CASH ON DELIVERY</p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button
              // onClick={() => navigate("/orders")}
              type="submit"
              className="bg-transparent px-10 py-3 border-2 border-gray-500 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:bg-gray-600 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
            >
              Place Order!
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default PlaceOrder;
