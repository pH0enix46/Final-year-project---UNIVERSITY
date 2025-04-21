import { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategoy] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "api/product/add",
        formData,
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="w-full max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6 sm:p-8 flex flex-col gap-6"
    >
      {/* Image Upload */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[image1, image2, image3, image4].map((img, i) => (
          <label
            key={i}
            htmlFor={`image${i + 1}`}
            className="aspect-square rounded-xl overflow-hidden border-2 border-dashed border-gray-300 cursor-pointer hover:border-black transition"
          >
            <img
              className="w-full h-full object-cover"
              src={!img ? assets.upload_area : URL.createObjectURL(img)}
              alt=""
            />
            <input
              onChange={(e) => {
                const setImage = [setImage1, setImage2, setImage3, setImage4][
                  i
                ];
                setImage(e.target.files[0]);
              }}
              type="file"
              id={`image${i + 1}`}
              className="hidden"
            />
          </label>
        ))}
      </div>

      {/* Inputs */}
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium mb-1">Product Name</p>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="input-style"
            type="text"
            placeholder="e.g. Polo T-shirt"
            required
          />
        </div>

        <div>
          <p className="text-sm font-medium mb-1">Product Description</p>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="input-style h-24 resize-none"
            placeholder="Describe the product..."
            required
          />
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <p className="text-sm font-medium mb-1">Category</p>
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              className="input-style"
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          <div>
            <p className="text-sm font-medium mb-1">Sub Category</p>
            <select
              onChange={(e) => setSubCategoy(e.target.value)}
              value={subCategory}
              className="input-style"
            >
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>

          <div>
            <p className="text-sm font-medium mb-1">Price ($)</p>
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              className="input-style"
              type="number"
              placeholder="25"
            />
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <p className="text-sm font-medium mb-2">Select Sizes</p>
        <div className="flex gap-2 flex-wrap">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div
              key={size}
              onClick={() =>
                setSizes((prev) =>
                  prev.includes(size)
                    ? prev.filter((item) => item !== size)
                    : [...prev, size]
                )
              }
              className={`px-4 py-1 rounded-full text-sm cursor-pointer transition ${
                sizes.includes(size)
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      {/* Bestseller */}
      <div className="flex items-center gap-2">
        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
          className="w-4 h-4"
        />
        <label htmlFor="bestseller" className="text-sm cursor-pointer">
          Mark as Bestseller
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-900 transition"
      >
        Add Product
      </button>
    </form>
  );
};

export default Add;
