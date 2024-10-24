import { NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className="carousel w-full">
      {/* ⏺ SLIDE 1 */}
      <div className="carousel-item w-full relative" id="prev">
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
                Explore our top-selling Mac essentials that enhance productivity
                and creativity. These high-performance products are beloved by
                users for their reliability, sleek design, and seamless
                integration within the Apple ecosystem.
              </p>

              <NavLink to="/collection">
                <button className="btn btn-outline btn-primary shadow-lg border-2 text-base border-indigo-500">
                  SHOP NOW
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* ⏺ CAROUSEL CONTROLS */}
        <div className="absolute left-1 right-1 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#next" className="btn btn-circle btn-outline border-2">
            ❮
          </a>
          <a href="#next" className="btn btn-circle btn-outline border-2">
            ❯
          </a>
        </div>
      </div>

      {/* ⏺ SLIDE 2 */}
      <div className="carousel-item w-full relative" id="next">
        <div className="hero mt-8 shadow-2xl rounded-xl p-4 border-2 border-slate-500">
          <div className="hero-content flex-col lg:flex-row-reverse justify-between md:gap-10 gap-8">
            <img
              src={assets.hero_}
              className="sm:max-w-md h-auto rounded-xl shadow-2xl border-2 border-primary"
            />

            <div>
              <h2
                className={`font-sofia text-4xl mb-4 ${styles.animate} font-bold`}
              >
                NEW ARRIVALS
              </h2>

              <p className="text-lg mb-8">
                Discover the latest Mac essentials designed to boost your
                productivity and style. Our new arrivals feature cutting-edge
                technology with sleek designs, perfect for elevating your Mac
                experience. Stay ahead with these must-have products, built to
                seamlessly integrate into your Apple ecosystem
              </p>

              <NavLink to="/collection">
                <button className="btn btn-outline btn-primary shadow-lg border-2 text-base border-indigo-500">
                  EXPLORE NOW
                </button>
              </NavLink>
            </div>
          </div>

          {/* ⏺ CAROUSEL CONTROLS */}
          <div className="absolute left-1 right-1 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#prev" className="btn btn-circle btn-outline border-2">
              ❮
            </a>
            <a href="#prev" className="btn btn-circle btn-outline border-2">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
