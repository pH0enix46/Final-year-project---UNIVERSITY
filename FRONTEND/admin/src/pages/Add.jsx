import { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl, currency } from "../App";
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
  const [category, setCategory] = useState("M1");
  const [subCategory, setSubCategoy] = useState("Air");
  const [bestseller, setBestseller] = useState(false);
  const [colors, setColors] = useState([]);
  const [colorInput, setColorInput] = useState("");

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
      formData.append("colors", JSON.stringify(colors));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
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
        setColors([]);
        setColorInput("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleAddColor = () => {
    const trimmed = colorInput.trim();
    if (trimmed && !colors.includes(trimmed)) {
      setColors((prev) => [...prev, trimmed]);
    }
    setColorInput("");
  };

  const handleRemoveColor = (color) => {
    setColors((prev) => prev.filter((c) => c !== color));
  };

  return (
    <div className="card animate-fade-in p-6 sm:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-100 mb-2">Add New Product</h1>
        <p className="text-gray-300 text-sm">Fill in the details to add a new product to your inventory</p>
      </div>

      <form onSubmit={onSubmitHandler} className="flex flex-col gap-6">
        {/* Image Upload */}
        <div className="mb-2">
          <p className="text-md font-medium mb-3 text-gray-200">Product Images</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[image1, image2, image3, image4].map((img, i) => (
              <label
                key={i}
                htmlFor={`image${i + 1}`}
                className="aspect-square rounded-xl overflow-hidden border-2 border-dashed border-gray-400 border-opacity-50 cursor-pointer hover:border-secondary hover:border-opacity-70 transition-all duration-300 bg-gray-700 bg-opacity-20 flex items-center justify-center"
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
          <p className="text-xs text-gray-400 mt-2">Upload up to 4 product images. First image will be used as the main product image.</p>
        </div>

        {/* Inputs */}
        <div className="space-y-5">
          <div>
            <label htmlFor="product-name" className="block text-sm font-medium mb-2 text-gray-200">Product Name</label>
            <input
              id="product-name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="input-style"
              type="text"
              placeholder="e.g. MacBook Pro M2"
              required
            />
          </div>

          <div>
            <label htmlFor="product-description" className="block text-sm font-medium mb-2 text-gray-200">Product Description</label>
            <textarea
              id="product-description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="input-style h-24 resize-none"
              placeholder="Describe the product features, specifications, and benefits..."
              required
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            <div>
              <label htmlFor="product-category" className="block text-sm font-medium mb-2 text-gray-200">Category</label>
              <select
                id="product-category"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                className="input-style"
              >
                <option value="M1">M1</option>
                <option value="M2">M2</option>
                <option value="M3">M3</option>
              </select>
            </div>

            <div>
              <label htmlFor="product-subcategory" className="block text-sm font-medium mb-2 text-gray-200">Sub Category</label>
              <select
                id="product-subcategory"
                onChange={(e) => setSubCategoy(e.target.value)}
                value={subCategory}
                className="input-style"
              >
                <option value="Air">Air</option>
                <option value="Pro">Pro</option>
                <option value="Max">Max</option>
              </select>
            </div>

            <div>
              <label htmlFor="product-price" className="block text-sm font-medium mb-2 text-gray-200">Price ({currency})</label>
              <input
                id="product-price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                className="input-style"
                type="number"
                placeholder="999"
                min="0"
                step="0.01"
              />
            </div>
          </div>
        </div>

        {/* Color Tags */}
        <div className="pt-2">
          <label htmlFor="product-colors" className="block text-sm font-medium mb-2 text-gray-200">Available Colors</label>
          <div className="flex gap-2 flex-wrap mb-3">
            {colors.length === 0 && (
              <p className="text-sm text-gray-400 italic">No colors added yet</p>
            )}
            {colors.map((color, idx) => (
              <div
                key={idx}
                className="bg-secondary bg-opacity-30 text-sm px-3 py-1.5 rounded-full flex items-center gap-2 border border-gray-500 border-opacity-30"
              >
                {color}
                <button
                  type="button"
                  onClick={() => handleRemoveColor(color)}
                  className="text-gray-300 hover:text-red-400 transition-colors"
                  aria-label={`Remove ${color}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              id="product-colors"
              value={colorInput}
              onChange={(e) => setColorInput(e.target.value)}
              className="input-style"
              placeholder="Silver, Space Gray, Starlight, Midnight"
            />
            <button
              type="button"
              onClick={handleAddColor}
              className="btn btn-secondary whitespace-nowrap"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add
            </button>
          </div>
        </div>

        {/* Bestseller */}
        <div className="flex items-center gap-3 pt-2">
          <div className="relative flex items-center">
            <input
              onChange={() => setBestseller((prev) => !prev)}
              checked={bestseller}
              type="checkbox"
              id="bestseller"
              className="w-5 h-5 rounded border-gray-400 text-secondary focus:ring-secondary"
            />
            <div className="absolute w-5 h-5 pointer-events-none"></div>
          </div>
          <label
            htmlFor="bestseller"
            className="text-md font-medium text-gray-200 cursor-pointer select-none"
          >
            Mark as Bestseller
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary mt-6 py-3 text-base"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Add;
