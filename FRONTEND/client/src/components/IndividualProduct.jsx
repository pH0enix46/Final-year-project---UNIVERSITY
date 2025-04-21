import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import RelatedProducts from "./RelatedProducts";

function IndividualProduct() {
  const { productID } = useParams();
  // console.log(productID);
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");
  // console.log(productData);

  const colorToImageMapping = {
    Silver: 1,
    Space_Gray: 2,
    Starlight: 3,
    Midnight: 4,
  };

  async function fetchProductData() {
    products.map((item) => {
      if (item._id === productID) {
        setProductData(item);
        // console.log(item);
        setImage(item.image[1]);
        return null;
      }
    });
  }

  useEffect(
    function () {
      fetchProductData();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [productID, products]
  );

  const handleColorChange = (colorName) => {
    setColor(colorName);

    const imageIndex = colorToImageMapping[colorName];

    // Ensure that the imageIndex is valid and within bounds
    if (imageIndex && productData.image[imageIndex]) {
      setImage(productData.image[imageIndex]);
    } else {
      // Fallback to the default image if the index is invalid
      setImage(productData.image[0]);
    }
  };

  return productData ? (
    <div className="border-t-gray-500 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* ⏺ PRODUCT DATA */}
      <div className="flex gap-12 sm:gap-0 flex-col sm:flex-row">
        {/* ⏺ PRODUCT IMAGE */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col justify-around sm:justify-normal sm:w-[18.7%] w-full opacity-70">
            {productData.image.slice(1).map((item, i) => (
              <img
                src={item}
                alt="product_image"
                key={i}
                className="w-[22%] sm:w-full lg:w-[80%] sm:mb-3 flex-shrink-0 cursor-pointer object-cover shadow-sm rounded-lg border-2 border-gray-500"
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
                  className={`w-8 h-8 bg-gray-400 rounded-full cursor-pointer shadow-xl ${
                    color === "Silver"
                      ? "border-4 border-blue-600"
                      : "border-2 border-gray-600"
                  }`}
                  title="Silver"
                  onClick={() => handleColorChange("Silver")}
                ></div>
                <span className="text-sm mt-1">Silver</span>
              </div>

              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 bg-[#4B4B4B] ${
                    color === "Space_Gray"
                      ? "border-4 border-blue-600"
                      : "border-2 border-gray-500"
                  } rounded-full cursor-pointer shadow-xl`}
                  title="Space Gray"
                  onClick={() => handleColorChange("Space_Gray")}
                ></div>
                <span className="text-sm mt-1">Space Gray</span>
              </div>

              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 bg-[#D8CBAF] ${
                    color === "Starlight"
                      ? "border-4 border-blue-600"
                      : "border-2 border-gray-500"
                  } rounded-full cursor-pointer shadow-xl`}
                  title="Starlight"
                  onClick={() => handleColorChange("Starlight")}
                ></div>
                <span className="text-sm mt-1">Starlight</span>
              </div>

              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 bg-[#1D1D1F] rounded-full cursor-pointer shadow-xl ${
                    color === "Midnight"
                      ? "border-4 border-blue-600"
                      : "border-2 border-gray-500"
                  }`}
                  title="Midnight"
                  onClick={() => handleColorChange("Midnight")}
                ></div>
                <span className="text-sm mt-1">Midnight</span>
              </div>
            </div>
          </div>

          <button
            className="btn btn-outline btn-success uppercase border-2 shadow-md border-gray-500 text-base"
            onClick={() => addToCart(productData._id, color)}
          >
            Add To Cart
          </button>
        </div>
        {/* ⏺ PRODUCT INFO END */}
      </div>
      {/* ⏺ PRODUCT DATA END */}

      {/* ⏺ MAIN DESCRIPTION */}
      <div className="w-full md:w-[80%] lg:w-[70%] mt-12">
        <div className="shadow-xl rounded-xl p-4 px-6 border-2 mt-1 border-primary">
          <h3 className="mt-4 text-3xl flex items-center gap-4 mb-8">
            Specification
            <progress className="progress w-56"></progress>
          </h3>

          <div>
            <div className="mb-4 border-2 rounded-xl border-secondary p-2 shadow-lg">
              <h4 className="text-xl text-amber-600">Processor</h4>
              <h6 className="md:text-lg flex items-center gap-2">
                Processor Brand
                <span className="loading loading-ring loading-xs"></span>
                {productData.brand}
              </h6>
              <h6 className="md:text-lg flex items-center gap-2">
                Processor Model
                <span className="loading loading-ring loading-xs"></span>
                {productData.model}
              </h6>
            </div>

            <div className="mb-4 border-2 rounded-xl border-secondary p-2 shadow-lg">
              <h4 className="text-xl text-amber-600">Display</h4>
              <h6 className="md:text-lg flex items-center gap-2">
                Display Size
                <span className="loading loading-ring loading-xs"></span>
                {productData.displaySize}
              </h6>
              <h6 className="md:text-lg flex items-center gap-2">
                Display Type
                <span className="loading loading-ring loading-xs"></span>
                {productData.displayType}
              </h6>
              <h6 className="md:text-lg flex items-center gap-2">
                Display Resolution
                <span className="loading loading-ring loading-xs"></span>
                {productData.resolution}
              </h6>
            </div>

            <div className="mb-4 border-2 rounded-xl border-secondary p-2 shadow-lg">
              <h4 className="text-xl text-amber-600">Memory & Storage</h4>
              <h6 className="md:text-lg flex items-center gap-2">
                RAM
                <span className="loading loading-ring loading-xs"></span>
                {productData.ram}
              </h6>
              <h6 className="md:text-lg flex items-center gap-2">
                Storage Type
                <span className="loading loading-ring loading-xs"></span>
                {productData.storageType}
              </h6>
              <h6 className="md:text-lg flex items-center gap-2">
                Storage Capacity
                <span className="loading loading-ring loading-xs"></span>
                {productData.storageCapacity}
              </h6>
            </div>

            <div className="mb-4 border-2 rounded-xl border-secondary p-2 shadow-lg">
              <h4 className="text-xl text-amber-600">
                Keyboard, Camera & Audio
              </h4>
              <h6 className="md:text-lg flex items-center gap-2">
                Keyboard Type
                <span className="loading loading-ring loading-xs"></span>
                {productData.keyboardType}
              </h6>
              <h6 className="md:text-lg flex items-center gap-2">
                WebCam
                <span className="loading loading-ring loading-xs"></span>
                {productData.webCam}
              </h6>
              <h6 className="md:text-lg flex items-center gap-2">
                Speaker
                <span className="loading loading-ring loading-xs"></span>
                {productData.speaker}
              </h6>
            </div>

            <div className="mb-4 border-2 rounded-xl border-secondary p-2 shadow-lg">
              <h4 className="text-xl text-amber-600">Network & Connectivity</h4>
              <h6 className="md:text-lg flex items-center gap-2">
                WiFi
                <span className="loading loading-ring loading-xs"></span>
                {productData.wifi}
              </h6>
            </div>

            <div className="mb-4 border-2 rounded-xl border-secondary p-2 shadow-lg">
              <h4 className="text-xl text-amber-600">Software</h4>
              <h6 className="md:text-lg flex items-center gap-2">
                Operating System
                <span className="loading loading-ring loading-xs"></span>
                {productData.operatingSystem}
              </h6>
            </div>

            <div className="mb-4 border-2 rounded-xl border-secondary p-2 shadow-lg">
              <h4 className="text-xl text-amber-600">Power</h4>
              <h6 className="md:text-lg flex items-center gap-2">
                Battery Type
                <span className="loading loading-ring loading-xs"></span>
                {productData.batteryType}
              </h6>
              <h6 className="md:text-lg flex items-center gap-2">
                Battery Capacity
                <span className="loading loading-ring loading-xs"></span>
                {productData.batteryCapacity}
              </h6>
            </div>

            <div className="mb-4 border-2 rounded-xl border-secondary p-2 shadow-lg">
              <h4 className="text-xl text-amber-600">Warranty</h4>
              <h6 className="md:text-lg flex items-center gap-2">
                Warranty Details
                <span className="loading loading-ring loading-xs"></span>
                {productData.warrantyDetails}
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* ⏺ MAIN DESCRIPTION END */}

      {/* ⏺ RELATED PRODUCTS */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
        currentProductID={productData._id}
      />
      {/* ⏺ RELATED PRODUCTS END */}
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}
export default IndividualProduct;
