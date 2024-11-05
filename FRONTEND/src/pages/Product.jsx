import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

function Product() {
  const { productID } = useParams();
  // console.log(productID);
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");

  async function fetchProductData() {
    products.map((item) => {
      if (item._id === productID) {
        setProductData(item);
        // console.log(item);
        setImage(item.image[0]);
        return null;
      }
    });
  }

  useEffect(
    function () {
      fetchProductData();
    },
    [productID, products]
  );

  return productData ? (
    <div className="border-t-gray-500 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* ⏺ PRODUCT DATA */}
      <div className="flex gap-12 sm:gap-0 flex-col sm:flex-row">
        {/* ⏺ PRODUCT IMAGE */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col justify-around sm:justify-normal sm:w-[18.7%] w-full opacity-70">
            {productData.image.map((item, i) => (
              <img
                src={item}
                alt="product_image"
                key={i}
                className="w-[24%] sm:w-full lg:w-[80%] sm:mb-3 flex-shrink-0 cursor-pointer object-cover shadow-sm rounded-lg border-2 border-gray-500"
                onClick={() => setImage(item)}
              />
            ))}
          </div>

          <div className="w-full flex justify-center sm:justify-start">
            <img
              src={image}
              alt="product_image"
              className="object-cover border-2 rounded-lg border-gray-500 shadow-lg sm:w-[90%] h-full sm:h-[50%] md:h-[60%] lg:h-[80%]"
            />
          </div>
        </div>
        {/* ⏺ PRODUCT IMAGE END */}

        {/* ⏺ PRODUCT INFO */}
        <div className="flex-1">
          <h1 className="text-xl sm:text-base md:text-xl lg:text-2xl font-semibold">
            {productData.name}
          </h1>

          <div className="opacity-80 mt-4 flex items-center gap-2 mb-4">
            <div className="rating gap-1 ">
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400 w-[20px]"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-orange-400 w-[20px]"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-yellow-400 w-[20px]"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-lime-400 w-[20px]"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-green-400 w-[20px]"
              />
            </div>
            <span className="text-lg">(76)</span>
          </div>

          <span className="text-3xl text-teal-600 border-b-2 border-b-gray-500 shadow-lg rounded-sm">
            {productData.price}
            {currency}
          </span>

          <p className="mt-4">{productData.description}</p>

          <div className="flex flex-col gap-2 my-8">
            <h6>Select Color</h6>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 bg-gray-400 border-2 border-gray-600 rounded-full cursor-pointer shadow-xl ${
                    color === "Silver" ? "border-blue-600 border-4" : ""
                  }`}
                  title="Silver"
                  onClick={() => setColor("Silver")}
                ></div>
                <span className="text-xs mt-1">Silver</span>
              </div>

              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 bg-[#4B4B4B] border-2 border-gray-500 rounded-full cursor-pointer shadow-xl ${
                    color === "Space Gray" ? "border-blue-600 border-4" : ""
                  }`}
                  title="Space Gray"
                  onClick={() => setColor("Space Gray")}
                ></div>
                <span className="text-xs mt-1">Space Gray</span>
              </div>

              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 bg-[#D8CBAF] border-2 border-gray-500 rounded-full cursor-pointer shadow-xl ${
                    color === "Starlight" ? "border-blue-600 border-4" : ""
                  }`}
                  title="Starlight"
                  onClick={() => setColor("Starlight")}
                ></div>
                <span className="text-xs mt-1">Starlight</span>
              </div>

              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 bg-[#1D1D1F] border-2 border-gray-500 rounded-full cursor-pointer shadow-xl ${
                    color === "Midnight" ? "border-blue-600 border-4" : ""
                  }`}
                  title="Midnight"
                  onClick={() => setColor("Midnight")}
                ></div>
                <span className="text-xs mt-1">Midnight</span>
              </div>
            </div>
          </div>

          <button className="btn btn-outline btn-success uppercase border-2 border-gray-500 text-base shadow-md">
            Add To Cart
          </button>
        </div>
        {/* ⏺ PRODUCT INFO END */}
      </div>
      {/* ⏺ PRODUCT DATA END */}
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}
export default Product;
