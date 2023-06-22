import { useEffect, useState } from "react";
import { listMenu } from "../../constant/script";
import MenuPone from "./MenuPone";

const NavList = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(listMenu);
  }, []);

  return (
    <>
      <div>
        <ul className="hidden capitalize lg:flex lg:space-x-6">
          {menu.map((items) => (
            <li
              className="text-[#1A1A1A] text-[16px] font-semibold"
              key={items.id}
            >
              <a href="#">{items.item}</a>
            </li>
          ))}
        </ul>
        <MenuPone />
      </div>
    </>
  );
};

export default NavList;
