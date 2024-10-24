/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

function ProductItem({ id, image, name, price }) {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className="text-gray-400 cursor-pointer">
      <div className="card bg-base-100 shadow-2xl rounded-lg overflow-hidden h-[370px] border-2 border-gray-600">
        <figure className="relative w-full h-auto sm:h-56 md:h-52">
          <img
            src={image[0]}
            alt="product"
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
          />
        </figure>

        <div className="card-body p-4">
          <h4 className="card-title text-sm md:text-base font-semibold text-gray-400">
            {name}
          </h4>
          <span className="lg:text-lg font-bold text-teal-600">
            {price}
            {currency}
          </span>
        </div>
      </div>
    </Link>
  );
}
export default ProductItem;
