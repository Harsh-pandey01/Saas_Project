import Logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <div className="max-w-310 w-full mx-auto py-20">
      <div className="flex items-center justify-between">
        <div className="flex divide-x-1">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="max-w-100 px-7 font-pop text-white/70">
            Solutions that drive success and propel your business forward
          </div>
        </div>
        <div className="flex gap-10 font-pop text-white/70">
          <h1 className="hover:text-white transition duration-200 cursor-pointer">
            Integration
          </h1>
          <h1 className="hover:text-white transition duration-200 cursor-pointer">
            Pricing
          </h1>
          <h1 className="hover:text-white transition duration-200 cursor-pointer">
            Reviews
          </h1>
        </div>
      </div>

      <div className="h-[1px] bg-white/10 my-10"></div>
    </div>
  );
}
