import { useEffect, useState } from "react";
import { cta } from "../../constant/script";
import SecondaryBtn from "../button/SecondaryBtn";

const Cta = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(cta);
  }, []);
  return (
    <section className="flex flex-col lg:flex-row mt-[90px] w-full rounded-[10px] bg-[#F4C237]  p-[48px]">
      <div className="flex flex-col items-start justify-center space-y-4">
        <h1 className="font-semibold popins text-[32px] mx-auto lg:mx-0 leading-10">
          {data.title}
        </h1>
        <p className="text-base    md:max-w-[500px] lg:w-[590px] md:mx-auto lg:mx-0 leading-6 popins font-normal text-justify lg:text-left">
          {data.desk}
        </p>
      </div>
      <div className="flex items-center justify-end w-full mt-6">
        <SecondaryBtn nama="Gabung Sekarang" kelas="mx-auto lg:mx-0" />
      </div>
    </section>
  );
};

export default Cta;
