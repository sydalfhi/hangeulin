import { useEffect, useState } from "react";
import { PackCard } from "/src/constant/script";
import PaketList from "./PaketList";
const Paket = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(PackCard);
  });
  return (
    <section className="mt-[90px]">
      <h1 className="popins font-bold leading-[42px] text-center text-[36px]">
        {data.title}
      </h1>
      <p className="mt-[16px] text-center lg:w-1/2 m-auto leading-[24px] poppins font-normal">
        {data.desk}
      </p>

      <PaketList />
    </section>
  );
};

export default Paket;
