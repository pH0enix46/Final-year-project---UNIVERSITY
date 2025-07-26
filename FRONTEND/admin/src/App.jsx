import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react-refresh/only-export-components
export const backendUrl = import.meta.env.VITE_BACKEND_URL;
// console.log("Backend URL:", backendUrl);

// Currency symbol (Bangladeshi Taka)
export const currency = "৳";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div className="bg-gradient-to-br from-brand to-primary min-h-screen">
      <ToastContainer position="top-right" autoClose={3000} />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <div className="flex flex-col h-screen">
          <NavBar setToken={setToken} setSidebarOpen={setSidebarOpen} />

          <div className="flex flex-1 overflow-hidden">
            {sidebarOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-60 z-40 lg:hidden"
                onClick={() => setSidebarOpen(false)}
              />
            )}

            <div
              className={`fixed lg:static inset-y-0 left-0 transform ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
              } lg:translate-x-0 transition-transform duration-200 ease-in-out z-50 w-72 md:w-64 bg-brand bg-opacity-95 shadow-xl`}
            >
              <Sidebar closeSidebar={() => setSidebarOpen(false)} />
            </div>

            <main className="flex-1 overflow-auto p-4">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/order" element={<Orders token={token} />} />
              </Routes>
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
