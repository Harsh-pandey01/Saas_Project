import tabImage from "../assets/tav-image.avif";

export default function Hero() {
  return (
    <div className="w-full h-fit pt-35 bg-[radial-gradient(circle_800px_at_bottom_center,_#3b82f6,_transparent)]">
      <div className="max-w-310 px-2 md:px-0 flex flex-col justify-center items-center  mx-auto ">
        <div
          className="text-center text-[13px] font-pop px-4.5 py-1.5 text-white/90 rounded-full w-fit shadow-[inset_0_0_5px_1px_rgba(59,130,246,1)]
      "
        >
          New version available. Download now!
        </div>
        <div className="text-6xl leading-18 font-bold md:text-8xl max-w-[80%] my-10 md:font-semibold md:leading-22 tracking-tight text-center">
          Elevate Your Business with CloudPeak
        </div>
        <p className="text-[16px] text-white/70 max-w-150 text-center tracking-tight font-pop">
          Empowering Your Success with Cutting-Edge SaaS Solutions Built for
          Scalability, Efficiency, and Growth.
        </p>
        <button className="mt-10 px-10 py-4.5 border border-white/50 cursor-pointer rounded-lg bg-blue-600 font-pop">
          Get Started For Free
        </button>
        <p className="text-white/50 mt-5 font-pop text-sm">
          No credit card required
        </p>

        <div className="mt-20 h-50 md:h-100  overflow-hidden">
          <img className=" w-full" src={tabImage} alt="" />
        </div>
      </div>
    </div>
  );
}
