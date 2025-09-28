export default function Features() {
  return (
    <div className="max-w-310 mx-auto flex flex-col items-center">
      <h1 className="text-5xl">How CloudPeak Works</h1>
      <p className="py-5 font-pop text-sm text-white/70">
        Designed to Simplify Your Experience and Maximize the Benefits of
        CloudPeak's Innovative Features
      </p>

      {/* grid  */}

      <div className="w-full px-20 py-10">
        <div className="w-full grid grid-cols-2 gap-15">
          <div className="rounded-3xl  flex flex-col items-center gap-5 p-10 border-[1px] border-white/20 shadow-[inset_0_0_10px_1px_rgba(59,130,246,0.5)]">
            <img
              src="https://framerusercontent.com/images/uC5t2RyWcIiCzuVogtJEIyJrc.svg?width=343&height=240"
              alt=""
            />
            <div className="text-center bg-blue-900/30 px-4 w-full rounded-lg py-4">
              <h1 className="text-start font-pop text-3xl flex ">
                25%{" "}
                <span className="flex text-sm items-center ml-1">
                  <img
                    className="h-5 align-center"
                    src="https://framerusercontent.com/images/8p0SRSSPN98hdXgEkcW5veRvvE.svg?width=21&height=20"
                    alt=""
                  />
                  9.2%
                </span>
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-10">
            <h1 className="text-5xl tracking-tight font-pop">
              Effortless Onboarding Process Fast.
            </h1>
            <p className="font-pop text-white/70">
              Discover Our Streamlined and User-Friendly Onboarding Process,
              Designed to Get You Up and Running Quickly and Efficiently.
            </p>
            <button className="text-xl  font-pop px-4 py-2 bg-blue-700 rounded-md">
              Learn More
            </button>
          </div>
          <div className="flex flex-col items-start justify-center gap-10">
            <h1 className="text-5xl tracking-tight font-pop">
              Seamless Integration with Your Workflow.
            </h1>
            <p className="font-pop text-white/70">
              Learn How CloudPeak Seamlessly Integrates with Your Existing
              Systems and Processes, Ensuring Minimal Maximum Efficiency.
            </p>
            <button className="text-xl  font-pop px-4 py-2 bg-blue-700 rounded-md">
              Learn More
            </button>
          </div>
          <div className="rounded-3xl  flex flex-col items-center gap-5 p-10 border-[1px] border-white/20 shadow-[inset_0_0_10px_1px_rgba(59,130,246,0.5)]">
            <img
              src="https://framerusercontent.com/images/T2XWd3JDcA0zUzD6bi7g9DNo7g.svg?width=401&height=326"
              alt=""
            />
          </div>
          <div className="rounded-3xl  flex flex-col items-center gap-5 p-10 border-[1px] border-white/20 shadow-[inset_0_0_10px_1px_rgba(59,130,246,0.5)]">
            <img
              src="https://framerusercontent.com/images/zLXAoOtJ383xmTfVCM7atAwY5VA.svg?width=375&height=240"
              alt=""
            />
            <div className="text-center bg-blue-900/30 px-4 w-full rounded-lg py-4">
              <h1 className="text-start font-pop text-3xl flex ">
                25%{" "}
                <span className="flex text-sm items-center ml-1">
                  <img
                    className="h-5 align-center"
                    src="https://framerusercontent.com/images/8p0SRSSPN98hdXgEkcW5veRvvE.svg?width=21&height=20"
                    alt=""
                  />
                  9.2%
                </span>
              </h1>
              <p className="font-pop text-sm text-start text-white/70">
                Happy customers worldwide
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-10">
            <h1 className="text-5xl tracking-tight font-pop">
              Expert Guidance Every Step of the Way.
            </h1>
            <p className="font-pop text-white/70">
              Discover Our Streamlined and User-Friendly Onboarding Process,
              Designed to Get You Up and Running Quickly and Efficiently.
            </p>
            <button className="text-xl  font-pop px-4 py-2 bg-blue-700 rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
