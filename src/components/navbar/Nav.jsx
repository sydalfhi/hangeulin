import PrimaryBtn from "../button/PrimaryBtn";
import NavList from "./NavList";

export const Nav = () => {
  return (
    <nav className="flex items-center justify-between mt-[32px] ">
      <h1 className="z-50">
        Hangeul<span>in</span>
      </h1>

      <NavList />

      <div className="items-center justify-center hidden lg:flex lg:space-x-5">
        <PrimaryBtn nama="masuk" link="#" />
        <a href="#" className="text-[#1A1A1A] popins font-normal">
          Daftar
        </a>
      </div>
    </nav>
  );
};
