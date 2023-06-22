import { useEffect, useState } from "react";
import { Layanan } from "../../constant/script";
// import update from "/src/assets/update.svg";
import update from "/assets/update.svg";
import waktu from "/assets/waktu.svg";
import sertifikat from "/assets/sertifikat.svg";
import orang from "/assets/orang.svg";

const RightService = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(Layanan.jenis_layanan);
  }, []);

  return (
    <div className="right_service">
      {data.map((item, index) => (
        <div key={index}>
          <div className="icony hover:scale-125 hover:-rotate-[20deg]">
            <img
              src={
                item.name == "update"
                  ? update
                  : item.name == "waktu"
                  ? waktu
                  : item.name == "sertifikat"
                  ? sertifikat
                  : orang
              }
              alt="icony"
            />
          </div>

          <h1 className="title popins">{item.title}</h1>

          <p className="desk popins">{item.desk}</p>
        </div>
      ))}
    </div>
  );
};

export default RightService;
