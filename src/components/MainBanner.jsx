import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <div className="relative">
      <img
        src={assets.main_banner_bg}
        alt="banner"
        className="w-full hidden md:block"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="banner"
        className="w-full md:hidden"
      />
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-16 lg:pl-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-16 ">
          Freshness You Can Trust, Savings You will Love!
        </h1>

        <div className="flex items-center mt-6 font-medium">
          <Link
            className="group flex items-center gap-2 bg-primary text-white px-7 md:px-9 py-3 rounded font-bold transition hover:bg-primary-dull cursor-pointer"
            to="/product"
          >
            Shop Now
            <img
              className="md:hidden transition group-focus:translate-x-1"
              src={assets.white_arrow_icon}
              alt="arrow"
            />
          </Link>
          <Link
            className="group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer"
            to="/product"
          >
            Explore Deals
            <img
              className="transition group-focus:translate-x-1"
              src={assets.black_arrow_icon}
              alt="arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
