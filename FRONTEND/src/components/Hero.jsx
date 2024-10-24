import { NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className="hero mt-8 shadow-2xl rounded-xl p-4 border-2 border-slate-500">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between md:gap-10 gap-8">
        <img
          src={assets.hero}
          className="sm:max-w-md h-auto rounded-xl shadow-2xl border-2 border-primary"
        />

        <div>
          <h2
            className={`font-sofia text-4xl mb-4 ${styles.animate} font-bold`}
          >
            BEST SELLING
          </h2>

          <p className="text-lg mb-8">
            Explore our top-selling Mac essentials that enhance productivity and
            creativity. These high-performance products are beloved by users for
            their reliability, sleek design, and seamless integration within the
            Apple ecosystem
          </p>

          <NavLink to="/collection">
            <button className="btn btn-outline btn-primary shadow-lg border-2 text-base border-indigo-500">
              SHOP NOW
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Hero;
