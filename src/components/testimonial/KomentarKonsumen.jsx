import { useEffect, useState } from "react";
import { Testi } from "../../constant/script";
import pelanggan from "/assets/pelanggan.jpg";
const KomentarKonsumen = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(Testi);
  }, []);

  return (
    <div className="md:px-10 lg:px-0">
      <p className="text-[13px] md:text-base pt-[12px] pb-[24px] popins leading-[24px] text-base font-normal w-full md:max-h-[200px]  overflow-y-auto xl:overflow-y-visible">
        {data.desk}
      </p>
      <div className="flex items-center justify-center space-x-3 lg:justify-start">
        <img src={pelanggan} alt="pelanggan" className="rounded-full" />
        <div className="flex flex-col ">
          <h1 className="popins">Davis Franci</h1>
          <p className="font-light popins text-[#474747]">
            Palembang, Sumatera Selatan
          </p>
        </div>
      </div>
    </div>
  );
};

export default KomentarKonsumen;
