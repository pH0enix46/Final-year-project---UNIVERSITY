import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(backendUrl + "api/user/admin", {
        email,
        password,
      });
      if (response.data.success) {
        setToken(response.data.token);
        // console.log("Login response:", response.data);
        toast.success("You are successfully login!");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand px-4">
      <div className="bg-primary w-full max-w-md p-8 rounded-2xl shadow-xl border-2 border-secondary">
        <h1 className="text-3xl font-bold text-gray-300 mb-6 text-center">
          Admin Panel
        </h1>
        <form onSubmit={onSubmitHandler} className="space-y-5">
          <div>
            <label className="block text-md font-medium text-gray-200 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-md font-medium text-gray-200 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 text-gray-200 bg-brand rounded-lg font-medium hover:bg-primary transition border border-gray-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
