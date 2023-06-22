import { useEffect, useState } from "react";
import { listMenu } from "/src/constant/script";
import PrimaryBtn from "../button/PrimaryBtn";
import Hamenu from "/assets/menu.svg";

const MenuPone = () => {
  const [kondisi, setKondisi] = useState(false);
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    setMenu(listMenu);
  }, []);

  function headlebar(e) {
    setKondisi(!kondisi);
    let btn = e.target.parentElement;
    let list = btn.classList;
    list.toggle("rotate-90");
  }

  return (
    <>
      <button
        className="lg:hidden min-w-[35px] min-h-[35px] grid place-items-center transition-all duration-300"
        onClick={(e) => headlebar(e)}
      >
        <img src={Hamenu} alt="menu" />
      </button>
      <div
        className={
          kondisi
            ? " block lg:hidden absolute top-14 left-1/2  -translate-x-1/2 border border-px border-black w-[300px] p-10 rounded-xl bg-white z-[100]"
            : "hidden lg:hiddne"
        }
      >
        <ul className="flex flex-col space-y-5 capitalize ">
          {menu.map((items) => (
            <li
              className="text-[#1A1A1A] text-[16px] font-semibold"
              key={items.id}
            >
              <a href="#">{items.item}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-center w-full mt-5 space-x-10">
          <PrimaryBtn nama="masuk" className="block w-full" />
          <a
            href="#"
            className="text-[#1A1A1A] popins font-normal block w-full"
          >
            Daftar
          </a>
        </div>
      </div>
    </>
  );
};

export default MenuPone;
