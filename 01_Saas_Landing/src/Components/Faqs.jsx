export default function Faqs() {
  return (
    <div className="max-w-310 px-2 md:px-5  w-full mx-auto flex flex-col lg:flex-row  gap-10">
      <div className="md:max-w-80  flex gap-4 flex-col ">
        <h1 className="text-4xl md:text-6xl font-semibold">Common Questions</h1>
        <p className="md:max-w-[70%] tracking-tight text-white/70 font-pop">
          Haven’t found what you’re looking for? Contact us
        </p>
      </div>
      <div className="flex-1 flex-col">
        <div className="py-5 border-b-1 border-white/20">
          <div className="flex items-center justify-between">
            <h1 className="font-pop text-sn md:text-xl">What is CloudPeak?</h1>
          </div>
        </div>
        <div className="py-5 border-b-1 border-white/20">
          <div className="flex items-center justify-between">
            <h1 className="font-pop text-sn md:text-xl">
              What services does CloudPeak offer?
            </h1>
          </div>
        </div>
        <div className="py-5 border-b-1 border-white/20">
          <div className="flex items-center justify-between">
            <h1 className="font-pop text-sn md:text-xl">
              How can CloudPeak help my business?
            </h1>
          </div>
        </div>
        <div className="py-5 border-b-1 border-white/20">
          <div className="flex items-center justify-between">
            <h1 className="font-pop text-sn md:text-xl">
              Is CloudPeak suitable for businesses of all sizes?
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
