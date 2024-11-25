import { useState } from "react";
import styles from "./Login.module.css";

function Login() {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <>
      <form className="w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-400 px-4 py-8 border-t-primary border-t-2 rounded-lg shadow-lg flex flex-col items-center">
        <div className="inline-flex items-center gap-2 mb-2 mt-4">
          <h2 className="text-3xl">{currentState}</h2>
          <hr className="border-none h-[2px] w-8 bg-gray-400" />
        </div>

        {currentState === "Login" ? (
          ""
        ) : (
          <label className="input input-bordered flex items-center gap-2 w-full bg-brand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Username"
              required
            />
          </label>
        )}

        <label className="input input-bordered flex items-center gap-2 w-full bg-brand">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="text" className="grow" placeholder="Email" required />
        </label>

        <label className="input input-bordered flex items-center gap-2 w-full bg-brand">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Password"
            required
          />
        </label>

        <div className="w-full flex justify-between text-sm">
          <span className="cursor-pointer">Forgot your password?</span>
          {currentState === "Login" ? (
            <span
              className="cursor-pointer"
              onClick={() => setCurrentState("Sign Up")}
            >
              Create account
            </span>
          ) : (
            <span
              className="cursor-pointer"
              onClick={() => setCurrentState("Login")}
            >
              Login here
            </span>
          )}
        </div>
      </form>
      <div className="flex justify-center mt-8">
        <button
          className={`btn border w-[90%] sm:max-w-96 bg-primary text-gray-400 hover:bg-brand hover:border-primary ${styles.animate} text-lg`}
        >
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </div>
    </>
  );
}
export default Login;
