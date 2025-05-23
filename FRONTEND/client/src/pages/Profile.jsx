import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { LoadingContext } from "../App";
import { toast } from "react-toastify";
import Title from "../components/Title";
import Loader from "../components/Loader";

const Profile = () => {
  const { token, navigate } = useContext(ShopContext);
  const { setIsLoading: setGlobalLoading } = useContext(LoadingContext);
  const [userData, setUserData] = useState({
    name: localStorage.getItem("userName") || "User",
    email: localStorage.getItem("userEmail") || "user@example.com",
    phone: localStorage.getItem("userPhone") || "",
    address: localStorage.getItem("userAddress") || "",
    image: localStorage.getItem("userImage") || "/default_img.png",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!token) {
      navigate("/login");
      return;
    }
    
    // Show global loading initially
    setGlobalLoading(true);
    
    // Simulate loading data
    setTimeout(() => {
      setIsLoading(false);
      setGlobalLoading(false);
    }, 800);
    
  }, [token, navigate, setGlobalLoading]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Show loading indicator
      setGlobalLoading(true);
      
      // Since we don't have a backend endpoint for updating profile,
      // we'll store the data in localStorage for now
      localStorage.setItem("userName", userData.name);
      localStorage.setItem("userEmail", userData.email);
      localStorage.setItem("userPhone", userData.phone);
      localStorage.setItem("userAddress", userData.address);
      localStorage.setItem("userImage", userData.image);
      
      // Simulate API call delay
      setTimeout(() => {
        toast.success("Profile updated successfully");
        setIsEditing(false);
        setGlobalLoading(false);
      }, 800);
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Something went wrong");
      setGlobalLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Loader size="large" fullScreen={true} />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10">
      <Title title="My Profile" />
      
      <div className="max-w-2xl mx-auto bg-teal-900 rounded-xl shadow-lg p-6 mt-8 border-2 border-gray-400">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gray-300 bg-opacity-30 backdrop-blur-md flex items-center justify-center shadow-lg border-4 border-gray-400 overflow-hidden">
              <img
                src={userData.image}
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/default_img.png";
                }}
              />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-200">{userData.name}</h2>
            <p className="text-gray-300 mt-1">{userData.email}</p>
          </div>
          
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 bg-teal-700 hover:bg-teal-600 text-white rounded-lg transition-all duration-300 border border-gray-300"
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
        </div>

        <div className="border-t border-gray-500 pt-6">
          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-teal-800 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-200"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-teal-800 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-200"
                    required
                    disabled
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={userData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-teal-800 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-200"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-300 mb-2">Address</label>
                  <textarea
                    name="address"
                    value={userData.address}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2 bg-teal-800 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-200"
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-lg transition-all duration-300 border border-gray-300"
                >
                  Save Changes
                </button>
              </div>
            </form>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-gray-400 text-sm">Phone Number</h3>
                <p className="text-gray-200 mt-1">{userData.phone || "Not provided"}</p>
              </div>
              
              <div>
                <h3 className="text-gray-400 text-sm">Address</h3>
                <p className="text-gray-200 mt-1">{userData.address || "Not provided"}</p>
              </div>
              
              <div className="md:col-span-2 mt-4">
                <h3 className="text-gray-400 text-sm mb-2">Account Security</h3>
                <p className="text-gray-300 text-sm italic mb-2">Password management will be available in a future update.</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="border-t border-gray-500 mt-8 pt-6">
          <h3 className="text-xl font-semibold text-gray-200 mb-4">Recent Orders</h3>
          <button
            onClick={() => navigate("/orders")}
            className="px-4 py-2 bg-teal-800 hover:bg-teal-700 text-white rounded-lg transition-all duration-300 border border-gray-500"
          >
            View All Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
