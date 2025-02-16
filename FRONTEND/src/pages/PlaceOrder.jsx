import Title from "./../components/Title";

function PlaceOrder() {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]">
      {/* ------------------ LEFT SIDE ------------------ */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="border border-gray-600 px-6 py-12 rounded-xl shadow-lg shadow-gray-500 flex flex-col gap-6">
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
    </div>
  );
}
export default PlaceOrder;
