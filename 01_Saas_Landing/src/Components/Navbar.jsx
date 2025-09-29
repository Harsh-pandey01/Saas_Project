import { useState } from "react";
import Logo from "../assets/logo.svg";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="backdrop-blur-lg mx-auto fixed top-0 w-[calc(100%-16px)] left-1/2 -translate-x-1/2 px-2 ">
      <nav className="max-w-310 relative flex items-center justify-between mx-auto py-2 lg:py-5 ">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div
          className={` flex ${
            isMenuOpen ? "block" : "hidden lg:flex"
          } absolute bg-white lg:bg-transparent h-[calc(100vh-78px)] pb-2 lg:py-0 lg:h-fit w-full lg:w-fit lg:relative top-full flex-col justify-between  lg:flex-row gap-10`}
        >
          <ul className="flex flex-col lg:flex-row font-pop items-center lg:gap-10">
            <li
              href="#features"
              className="lg:text-neutral-400 py-5 px-5 hover:bg-blue-300/20  lg:hover:bg-transparent  w-full items-center justify-end text-end text-black lg:hover:text-white transition duration-150 cursor-pointer"
            >
              Features
            </li>
            <li className="lg:text-neutral-400 py-5 px-5 hover:bg-blue-300/20  lg:hover:bg-transparent w-full items-center justify-end text-end text-black lg:hover:text-white transition duration-150 cursor-pointer">
              Pricing
            </li>
            <li className="lg:text-neutral-400 py-5 px-5 hover:bg-blue-300/20 lg:hover:bg-transparent w-full items-center justify-end text-end text-black lg:hover:text-white transition duration-150 cursor-pointer">
              Reviews
            </li>
          </ul>
          <button className="px-4 py-3 rounded-2xl lg:bg-gradient-to-r cursor-pointer bg-blue-500 lg:bg-transparent duration-150 transition lg:from-[#31437546] md:from-75% lg:to-transparent lg:hover:from-[#314375b6] font-pop border border-white/10">
            Get Templete For Free
          </button>
        </div>
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => {
            setMenuOpen(!isMenuOpen);
          }}
        >
          <i class="ri-menu-3-line text-xl"></i>
        </div>
      </nav>
    </div>
  );
}
