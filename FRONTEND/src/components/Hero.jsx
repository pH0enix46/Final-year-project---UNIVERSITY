import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import styles from "./Hero.module.css";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slides = [
    {
      title: "BEST SELLING",
      description:
        "Explore our top-selling Mac essentials that enhance productivity and creativity. These high-performance products are beloved by users for their reliability, sleek design, and seamless integration within the Apple ecosystem",
      buttonText: "SHOP NOW",
      image: assets.hero,
      link: "/collection",
    },
    {
      title: "NEW ARRIVALS",
      description:
        "Discover the latest Mac essentials designed to boost your productivity and style. Our new arrivals feature cutting-edge technology with sleek designs, perfect for elevating your Mac experience. Stay ahead with these must-have products",
      buttonText: "EXPLORE NOW",
      image: assets.hero_,
      link: "/collection",
    },
    {
      title: "TOP PICKS",
      description:
        "Explore our curated selection of must-have Mac accessories, chosen for their premium quality, sleek style, and reliable performance. These products are designed to elevate your Mac experience, offering both functionality and aesthetic",
      buttonText: "DISCOVER",
      image: assets.hero__,
      link: "/collection",
    },
  ];
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % (totalSlides + 1));
      setIsTransitioning(true);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  useEffect(() => {
    if (currentSlide === totalSlides) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
      }, 1000);
    }
  }, [currentSlide, totalSlides]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setIsTransitioning(true);
  };

  return (
    <>
      <div className="relative w-full overflow-hidden">
        <div
          className={`flex w-full ${
            isTransitioning
              ? "transition-transform duration-1000 ease-in-out"
              : ""
          }`}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {[...slides, slides[0]].map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="flex justify-center items-center min-h-[400px] lg:min-h-[500px] w-full">
                <div className="hero mt-8 shadow-md p-4 border-t-2 border-b-2 border-slate-500 w-full max-w-full">
                  <div className="hero-content flex flex-col lg:flex-row-reverse justify-between md:gap-10 gap-8 w-full px-4 shadow-lg rounded-lg">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="sm:max-w-md h-auto rounded-xl shadow-lg border-2 border-primary"
                    />

                    <div className="w-full lg:w-1/2">
                      <h2
                        className={`font-itim text-4xl mb-4 font-bold ${styles.animate}`}
                      >
                        {slide.title}
                      </h2>
                      <p className="text-base md:text-lg mb-8">
                        {slide.description}
                      </p>
                      <NavLink to={slide.link}>
                        <button className="btn btn-outline btn-primary border-2 text-base border-indigo-500 shadow-md">
                          {slide.buttonText}
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PAGINATION DOTS */}
      <div className="absolute mt-4 lg:mt-[-30px] left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
              currentSlide === index ? "bg-indigo-600" : "bg-gray-400"
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </>
  );
}
export default Hero;
