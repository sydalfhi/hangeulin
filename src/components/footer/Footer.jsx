import { useEffect, useState } from "react";
import { footer } from "/src/constant/script";
import FooterList from "./FooterList";
import Ended from "./Ended";

const Footer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(footer);
  }, []);

  return (
    <>
      <section className="w-full bg-[#FAE3A4] py-[32px] lg:px-[70px] lg:space-x-[81px] flex flex-col lg:flex-row justify-center items-center lg:items-start">
        <div className="space-y-6 ">
          <h1 className="text-[#045285] font-bold rubik  text-[36px] text-center lg:text-justify">
            Hangeul
            <span className="text-[#EC7589] ">in</span>
          </h1>
          <p className="text-[#00000080] font-normal text-base leading-6 popins w-[85%] text-justify mx-auto lg:w-[307px]">
            {data.desk}
          </p>
        </div>

        <FooterList />

        <div className="w-[90%] mx-auto lg:mx-0 lg:w-full ">
          <h1 className="mb-6 text-lg popins  mt-[30px] lg:mt-0">Newsletter</h1>
          <p className="text-[#00000080] font-normal text-base leading-6 popins">
            Dapatkan pembaruan yang menarik dari kami
          </p>

          <div>
            <form action="">
              <input
                type="email"
                className="py-[10px] px-[16px] w-[307px] rounded-md mt-[16px]"
                placeholder="email Anda"
                required
              />
              <button
                type="submit"
                className="font-semibold text-white roboto secondary_btn mt-[16px] block mb-10 lg:mb-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Ended />
    </>
  );
};

export default Footer;
