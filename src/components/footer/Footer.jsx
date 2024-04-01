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
      <section className="w-full bg-[#FAE3A4] py-[32px] ">
        <div className="place-items-center  grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 max-w-[1280px] mx-auto">
          <div className="space-y-5 mx-28 ">
            <h1 className="text-[#045285] font-bold rubik   text-[36px] ">
              Hangeul
              <span className="text-[#EC7589] ">in</span>
            </h1>
            <p className="text-[#00000080] font-normal text-base leading-6 popins w-[85%] text-justify  lg:w-[307px]">
              {data.desk}
            </p>
          </div>

          <FooterList />

          <div className="w-[90%] md:w-[68%] mx-auto lg:mx-0 lg:w-ful xl:ml-10 ">
            <h1 className="mb-6 text-lg popins  mt-[30px] lg:mt-0">
              Newsletter
            </h1>
            <p className="text-[#00000080] font-normal text-base leading-6 popins">
              Dapatkan pembaruan yang menarik dari kami
            </p>

            <div>
              <form action="">
                <input
                  type="email"
                  className="py-[10px] px-[16px] w-[307px] rounded-md mt-[16px]"
                  placeholder="Email Anda"
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
        </div>
      </section>

      <Ended />
    </>
  );
};

export default Footer;
