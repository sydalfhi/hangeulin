import { useEffect, useState } from "react";
import { Layanan } from "../../constant/script";
import VidioThumb from "/assets/vidioThumb.jpg";
import PlayIcon from "/assets/play.svg";

const LeftService = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(Layanan);
  }, []);
  return (
    <div>
      <h1 className="popins font-medium text-[25px] my-4 xl:text-[36px] xl:leading-[54px]">
        {data.title}
      </h1>
      <div className="relative my-6">
        <a href="#">
          <img src={VidioThumb} alt="VidioThumb" className="z-20" />
          <img
            src={PlayIcon}
            alt="play"
            className="absolute z-50 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  );
};

export default LeftService;
