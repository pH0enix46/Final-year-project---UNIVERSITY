import { Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import styles from "./Footer.module.css";

function Footer() {
  function onSubmitHandler(e) {
    e.preventDefault();
  }

  return (
    <div className="mt-24 border-t-2 border-gray-500">
      <footer className="footer text-base-content p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start justify-between grid-flow-row gap-6">
        <nav className="text-gray-400">
          <h6 className="footer-title text-base text-gray-200 border-b border-gray-300">
            Services
          </h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        <nav className="text-gray-400">
          <h6 className="footer-title text-base text-gray-200 border-b border-gray-300">
            Company
          </h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </nav>

        <nav className="text-gray-400">
          <h6 className="footer-title text-base text-gray-200 border-b border-gray-300">
            Legal
          </h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>

        <form onClick={onSubmitHandler}>
          <h6 className="footer-title text-base text-gray-200 border-b border-gray-300">
            Newsletter
          </h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-gray-400">
                Enter your email address
              </span>
            </label>

            <div className="join">
              <input
                className="input input-bordered join-item bg-primary"
                placeholder="meow@gmail.com"
                type="email"
                required
              />
              <button className="btn join-item rounded-r-full transition-all bg-slate-900 hover:bg-slate-950 text-base text-gray-400 border-gray-900">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>

      <aside className="flex gap-8 items-center pb-4 px-4 justify-center">
        <Link to="/">
          <div
            className={`relative p-1 transition-all duration-[.3s] border-2 border-transparent hover:border-gray-400 hover:shadow-lg hover:animate-pulse rounded-full ${styles.glow}`}
          >
            <img
              src={assets.logo}
              alt="mac-haven--logo"
              className="w-8 rounded-full shadow-2xl cursor-pointer border-2 border-gray-400"
            />
          </div>
        </Link>

        <p className="text-xs sm:text-sm lg:text-base">
          Copyright © {new Date().getFullYear()} macHaven. All Rights Reserved
        </p>
      </aside>
    </div>
  );
}
export default Footer;
