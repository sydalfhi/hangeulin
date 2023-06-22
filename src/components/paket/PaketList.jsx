import PaketCard_1 from "./PaketCard_1";
import PaketCard_2 from "./PaketCard_2";
import PaketCard_3 from "./PaketCard_3";

const PaketList = () => {
  return (
    <>
      <div className="flex flex-col space-y-8  md:flex-row  md:flex-wrap lg:flex-nowrap md:gap-6 md:space-y-0 lg:gap-0 lg:space-x-1 xl:space-x-6 items-center  md:justify-center lg:space-y-0 xl:justify-between mt-[24px] ">
        <div className="order-1 md:order-1 lg:order-1 ">
          <PaketCard_1 />
        </div>
        <div className="order-2 md:order-3 lg:order-2 ">
          <PaketCard_2 />
        </div>
        <div className="order-3 md:order-2 lg:order-3 ">
          <PaketCard_3 />
        </div>
      </div>
    </>
  );
};

export default PaketList;
