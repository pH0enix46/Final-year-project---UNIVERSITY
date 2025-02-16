import Title from "./../components/Title";
import CartTotal from "./../components/CartTotal";
import { assets } from "../assets/frontend_assets/assets";
import { useState } from "react";

function PlaceOrder() {
  const [method, setMethod] = useState("CashOnDelivery");

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] items-start">
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
              className="border-2 border-gray-500 rounded-lg py-1 px-2 w-full bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 ease-in-out"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border-2 border-gray-500 rounded-lg py-1 px-2 w-full bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 ease-in-out"
            />
          </div>
          <input
            type="email"
            placeholder="Email address"
            className="border-2 border-gray-500 rounded-lg px-2 w-full bg-transparent text-gray-700 placeholder-gray-500 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 ease-in-out"
          />
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="City"
              className="border-2 border-gray-500 rounded-lg py-1 px-2 w-full bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 ease-in-out"
            />
            <input
              type="text"
              placeholder="Country"
              className="border-2 border-gray-500 rounded-lg py-1 px-2 w-full bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 ease-in-out"
            />
          </div>
          <input
            type="number"
            placeholder="Phone number"
            className="border-2 border-gray-500 rounded-lg px-2 w-full bg-transparent text-gray-700 placeholder-gray-500 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 ease-in-out"
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
            <button className="bg-transparent px-10 py-3 border-2 border-gray-500 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:bg-gray-600 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">
              Place Order!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PlaceOrder;
