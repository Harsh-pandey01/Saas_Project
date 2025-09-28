export default function Faqs() {
  return (
    <div className="max-w-310 w-full mx-auto flex gap-10">
      <div className="max-w-80  flex gap-4 flex-col">
        <h1 className="text-6xl">Common Questions</h1>
        <p className="max-w-[70%] tracking-tight text-white/70 font-pop">
          Haven’t found what you’re looking for? Contact us
        </p>
      </div>
      <div className="flex-1 flex-col">
        <div className="py-10 border-b-1 border-white/20">
          <div className="flex items-center justify-between">
            <h1 className="font-pop text-xl">What is CloudPeak?</h1>
          </div>
        </div>
        <div className="py-10 border-b-1 border-white/20">
          <div className="flex items-center justify-between">
            <h1 className="font-pop text-xl">
              What services does CloudPeak offer?
            </h1>
          </div>
        </div>
        <div className="py-10 border-b-1 border-white/20">
          <div className="flex items-center justify-between">
            <h1 className="font-pop text-xl">
              How can CloudPeak help my business?
            </h1>
          </div>
        </div>
        <div className="py-10 border-b-1 border-white/20">
          <div className="flex items-center justify-between">
            <h1 className="font-pop text-xl">
              Is CloudPeak suitable for businesses of all sizes?
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
