import slider1 from "../assets/slider-img1.svg";
import slider2 from "../assets/slider-img2.svg";
import slider3 from "../assets/slider-img3.svg";
import slider4 from "../assets/slider-img4.svg";
import slider5 from "../assets/slider-img5.svg";

export default function Slider() {
  return (
    <div className="mt-10">
      <div className="text-center font-pop">
        Trusted by thousands of companies worldwide
      </div>
      <div className="flex gap-15 items-center justify-center py-15">
        <img className="w-32" src={slider1} alt="img" />
        <img className="w-32" src={slider2} alt="img" />
        <img className="w-32" src={slider3} alt="img" />
        <img className="w-32" src={slider4} alt="img" />
        <img className="w-32" src={slider5} alt="img" />
      </div>
    </div>
  );
}
