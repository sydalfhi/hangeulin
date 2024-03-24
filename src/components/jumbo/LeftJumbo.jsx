import { useEffect, useState } from "react";
import { Header } from "../../constant/script";
import PrimaryBtn from "../button/PrimaryBtn";
const LeftJumbo = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(Header);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center order-2 w-full  mt-10  lg:items-start space-y-7 lg:order-1 lg:mt-0">
      <h1 className="text-center lg:text-left font-bold text-[25px] md:text-[35px] leading-[50px] xl:text-[45px] md:w-[50%] lg:w-[80%] xl:w-[76%] ">
        Solusi
        <span className="mx-1 font-bold rubik text-[#045285]">Terbaik</span>
        Untuk Belajar Bahasa Korea
      </h1>

      <p className=" mx-auto lg:mx-0 text-center  lg:text-left font-light popins lg:w-[80%] md:w-[70%] xl:w-[55%]">
        {data.paragraf}
      </p>
      <PrimaryBtn nama="Gabung Sekarang" />
    </div>
  );
};

export default LeftJumbo;
