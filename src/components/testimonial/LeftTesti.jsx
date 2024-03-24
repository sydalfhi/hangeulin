import { useEffect, useState } from "react";
import { Testi } from "../../constant/script";
import KomentarKonsumen from "./komentarKonsumen";
const LeftTesti = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(Testi);
  }, []);

  return (
    <div className="flex flex-col items-start justify-center w-full ">
      <h1 className=" mx-auto xl:mx-0 lg:mr-auto lg:text-left lg:px-0 lg:w-[505px] text-[30px] font-semibold popins lg:text-[32px]  ">
        {data.title}
      </h1>
      <KomentarKonsumen />
    </div>
  );
};

export default LeftTesti;
