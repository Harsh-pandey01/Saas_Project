import { useState } from "react";

export default function Plans() {
  const [isMonthlySelected, setMonthly] = useState(true);

  return (
    <div className="max-w-310 mx-auto py-15 ">
      <h1 className="text-5xl font-pop text-center">Choose A Plan</h1>
      <p className="text-white/70 font-pop text-center py-5">
        Designed to Simplify Your Experience and Maximize the Benefits of
        CloudPeak's Innovative Features
      </p>
      <div className="flex items-center my-2 justify-center">
        <div className="flex  gap-4">
          <p>Monthly</p>
          <div className="bg-white/20 relative gap-2 p-1 rounded-full flex">
            <input
              className="cursor-pointer"
              type="radio"
              onChange={() => {
                setMonthly(!isMonthlySelected);
              }}
              name="plan"
              value={"montly"}
              id="plan"
            />
            <input
              className="cursor-pointer"
              type="radio"
              name="plan"
              value={"montly"}
              id="plan"
              onChange={() => {
                setMonthly(!isMonthlySelected);
              }}
            />
            <div
              className={`absolute  h-6 w-6 rounded-full top-1/2 transition duration-200 -translate-y-1/2 bg-white ${
                !isMonthlySelected ? "translate-x-[140%]" : ""
              }`}
            ></div>
          </div>
          <p>Yearly</p>
        </div>
      </div>

      <div className="px-20 mt-15 grid grid-cols-3 gap-10">
        <div className="rounded-3xl p-10 border-[1px] border-white/20 shadow-[inset_0_0_10px_1px_rgba(59,130,246,0.5)]">
          <h1 className="text-xl font-pop">Basic</h1>
          <p className="text-white/70 font-pop">For solo designer</p>
          <div className="h-[1px] my-4 w-full bg-white/20"></div>

          <h1 className="font-pop text-5xl mt-10">
            {isMonthlySelected ? "$19" : "$29"}
          </h1>
          <p className="text-white/70 font-pop">per person, per month</p>

          <div className="pt-10 flex flex-col gap-3">
            <p className="flex font-pop text-sm items-center gap-2">
              <img
                className="h-2"
                src="https://framerusercontent.com/images/P0DjnLdQTyeI1p1BZjj5vpQJgY.svg"
                alt=""
              />
              Comprehensive Dashboard
            </p>
            <p className="flex font-pop text-sm items-center gap-2">
              <img
                className="h-2"
                src="https://framerusercontent.com/images/P0DjnLdQTyeI1p1BZjj5vpQJgY.svg"
                alt=""
              />
              Basic Budgeting Tools
            </p>
            <p className="flex font-pop text-sm items-center gap-2">
              <img
                className="h-2"
                src="https://framerusercontent.com/images/P0DjnLdQTyeI1p1BZjj5vpQJgY.svg"
                alt=""
              />
              Monthly Financial Reports
            </p>
            <p className="flex font-pop text-sm items-center gap-2">
              <img
                className="h-2"
                src="https://framerusercontent.com/images/P0DjnLdQTyeI1p1BZjj5vpQJgY.svg"
                alt=""
              />
              3 Financial Accounts
            </p>
            <p className="flex font-pop text-sm items-center gap-2">
              <img
                className="h-2"
                src="https://framerusercontent.com/images/P0DjnLdQTyeI1p1BZjj5vpQJgY.svg"
                alt=""
              />
              Email Support
            </p>
            <button className="py-2.5 font-pop cursor-pointer bg-blue-600 rounded-md mt-2">
              Get Started for Free
            </button>
          </div>
        </div>

        <div className="rounded-3xl p-10 border-[1px] border-white/20 shadow-[inset_0_0_10px_1px_rgba(59,130,246,0.5)]">
          <h1 className="text-xl flex items-center justify-between font-pop">
            Premium
            <span className="text-[12px] px-2 py-1 bg-green-500 rounded-full text-black">
              Most Popular
            </span>
          </h1>
          <p className="text-white/70 font-pop">For solo designer</p>
          <div className="h-[1px] my-4 w-full bg-white/20"></div>

          <h1 className="font-pop text-5xl mt-10">
            {isMonthlySelected ? "$49" : "$39"}
          </h1>
          <p className="text-white/70 font-pop">per person, per month</p>

          <div className="pt-10 flex flex-col gap-3">
            <p className="flex font-pop text-sm items-center gap-2">
              <img
                className="h-2"
                src="https://framerusercontent.com/images/P0DjnLdQTyeI1p1BZjj5vpQJgY.svg"
                alt=""
              />
              Comprehensive Dashboard
            </p>
            <p className="flex font-pop text-sm items-center gap-2">
              <img
                className="h-2"
                src="https://framerusercontent.com/images/P0DjnLdQTyeI1p1BZjj5vpQJgY.svg"
                alt=""
              />
              Basic Budgeting Tools
            </p>
            <p className="flex font-pop text-sm items-center gap-2">
              <img
                className="h-2"
                src="https://framerusercontent.com/images/P0DjnLdQTyeI1p1BZjj5vpQJgY.svg"
                alt=""
              />
              Monthly Financial Reports
            </p>
            <p className="flex font-pop text-sm items-center gap-2">
              <img
                className="h-2"
                src="https://framerusercontent.com/images/P0DjnLdQTyeI1p1BZjj5vpQJgY.svg"
                alt=""
              />
              3 Financial Accounts
            </p>
            <p className="flex font-pop text-sm items-center gap-2">
              <img
                className="h-2"
                src="https://framerusercontent.com/images/P0DjnLdQTyeI1p1BZjj5vpQJgY.svg"
                alt=""
              />
              Email Support
            </p>
            <button className="py-2.5 font-pop cursor-pointer bg-blue-600 rounded-md mt-2">
              Get Started for Free
            </button>
          </div>
        </div>

        <div className="rounded-3xl p-10 border-[1px] border-white/20 shadow-[inset_0_0_10px_1px_rgba(59,130,246,0.5)]">
          <h1 className="text-xl font-pop">Standard</h1>
          <p className="text-white/70 font-pop">For solo designer</p>
          <div className="h-[1px] my-4 w-full bg-white/20"></div>

          <h1 className="font-pop text-5xl mt-10">
            {isMonthlySelected ? "$119" : "$99"}
          </h1>
          <p className="text-white/70 font-pop">per person, per month</p>

          <div className="pt-10 flex flex-col gap-3">
            <p className="flex font-pop text-sm items-center gap-2">
              <img
                className="h-2"
                src="https://framerusercontent.com/images/P0DjnLdQTyeI1p1BZjj5vpQJgY.svg"
                alt=""
              />
              Comprehensive Dashboard
            </p>
            <p className="flex font-pop text-sm items-center gap-2">
              <img
                className="h-2"
                src="https://framerusercontent.com/images/P0DjnLdQTyeI1p1BZjj5vpQJgY.svg"
                alt=""
              />
              Basic Budgeting Tools
            </p>
            <p className="flex font-pop text-sm items-center gap-2">
              <img
                className="h-2"
                src="https://framerusercontent.com/images/P0DjnLdQTyeI1p1BZjj5vpQJgY.svg"
                alt=""
              />
              Monthly Financial Reports
            </p>
            <p className="flex font-pop text-sm items-center gap-2">
              <img
                className="h-2"
                src="https://framerusercontent.com/images/P0DjnLdQTyeI1p1BZjj5vpQJgY.svg"
                alt=""
              />
              3 Financial Accounts
            </p>
            <p className="flex font-pop text-sm items-center gap-2">
              <img
                className="h-2"
                src="https://framerusercontent.com/images/P0DjnLdQTyeI1p1BZjj5vpQJgY.svg"
                alt=""
              />
              Email Support
            </p>
            <button className="py-2.5 font-pop cursor-pointer bg-blue-600 rounded-md mt-2">
              Get Started for Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
