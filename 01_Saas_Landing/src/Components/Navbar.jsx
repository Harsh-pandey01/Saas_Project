import Logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <div className="backdrop-blur-lg absolute top-0  left-0 w-full">
      <nav className="max-w-310 flex items-center justify-between mx-auto py-5">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <ul className="flex font-pop items-center gap-10">
          <li className="text-neutral-400 hover:text-white transition duration-150 cursor-pointer">
            Features
          </li>
          <li className="text-neutral-400 hover:text-white transition duration-150 cursor-pointer">
            Pricing
          </li>
          <li className="text-neutral-400 hover:text-white transition duration-150 cursor-pointer">
            Reviews
          </li>
        </ul>
        <button className="px-4 py-3 rounded-2xl bg-gradient-to-r cursor-pointer duration-150 transition from-[#31437546] from-75% to-transparent hover:from-[#314375b6] font-pop border border-white/10">
          Get Templete For Free
        </button>
      </nav>
    </div>
  );
}
