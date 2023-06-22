import { useEffect, useState } from "react";
import { footer } from "/src/constant/script";

const FooterList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(footer.footitem);
  }, []);

  return (
    <div className="flex mr-auto ml-10 mt-5 md:mx-auto  lg:mt-0 space-y-10 md:space-y-0 md:space-x-16 lg:space-x-[81px] flex-col md:flex-row  ">
      {data.map((e, i) => (
        <div key={i}>
          <h1 className="mb-6 text-lg popins">{e.title}</h1>
          <div className="flex flex-col space-y-1">
            {e.list.map((item, ind) => (
              <a
                key={ind}
                href={item.link}
                className="text-base font-normal popins"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterList;
