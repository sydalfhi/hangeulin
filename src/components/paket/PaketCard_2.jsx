import { useEffect, useState } from "react";
import Centang from "/assets/centang.svg";
import { PackCard } from "../../constant/script";
import PrimaryBtn from "../button/PrimaryBtn";
import SecondaryBtn from "../button/SecondaryBtn";

const PaketCard_1 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(PackCard.card.list2);
  }, []);
  return (
    <div className="rounded-[15px] bg-[#F4C237] w-full py-[24px] px-[24px]">
      <h1 className="text-center popins font-semibold text-[24px] pb-[30px]">
        Paket 2
      </h1>
      <ul>
        {data.map((e, i) => (
          <li className="flex items-center space-x-[21px] pb-[16px]" key={i}>
            <div className="grid place-items-center min-w-[35px] min-h-[35px] bg-[#FFFFFF] rounded-full">
              <img src={Centang} alt="centang" />
            </div>
            <span className="popins text-[#00000080] font-normal text-[14px] md:text-base">
              {e}
            </span>
          </li>
        ))}
      </ul>
      <SecondaryBtn nama="Beli Sekarang" link="#" kelas="mx-auto mt-[16px]" />
    </div>
  );
};

export default PaketCard_1;
