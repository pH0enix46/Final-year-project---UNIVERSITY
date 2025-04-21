import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react-refresh/only-export-components
export const backendUrl = import.meta.env.VITE_BACKEND_URL;
// console.log("Backend URL:", backendUrl);
export const currency = "$";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  // console.log(token);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <NavBar setToken={setToken} />
          <hr />
          <div className="flex w-full">
            <Sidebar />
            <div className="flex-1 mx-8 my-8 text-gray-700 text-base">
              <Routes>
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/order" element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
