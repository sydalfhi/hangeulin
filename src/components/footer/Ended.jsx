import facebook from "/assets/facebook.svg";
import instagram from "/assets/instagram.svg";
import twitter from "/assets/twitter.svg";
import line from "/assets/line.svg";
const Ended = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 md:flex-row md:space-y-0 md:justify-between px-[70px] py-[16px] mb-[10px] md:mb-0">
      <p className="text-base font-normal roboto text-[#00000080] text-center md:text-left">
        Copyright 2021 Hak Cipta Terpelihara oleh Hangeulin
      </p>

      <div className="flex space-x-4">
        <div className=" min-w-[30px] min-h-[30px] rounded-full grid place-items-center border border-[#474747]">
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
        </div>

        <div className=" min-w-[30px] min-h-[30px] rounded-full grid place-items-center border border-[#474747]">
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
        </div>

        <div className=" min-w-[30px] min-h-[30px] rounded-full grid place-items-center border border-[#474747]">
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
        </div>

        <div className=" min-w-[30px] min-h-[30px] rounded-full grid place-items-center border border-[#474747]">
          <a href="#">
            <img src={line} alt="line" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ended;
