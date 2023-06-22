import HeroGambar from "/assets/hero.png";

import Hero from "/assets/hero/hero.png";
import Koin from "/assets/hero/koin.png";
import Hitam from "/assets/hero/hitam.png";
import Bendera from "/assets/hero/bendera_korea.jpg";
const RightJumbo = () => {
  return (
    <>
      <div className="relative order-1 max-w-full lg:order-2 konten">
        <img
          src={HeroGambar}
          alt="Hero"
          className="md:w-[70%] mx-auto  lg:w-[80%] xl:w-full"
          loading="lazy"
        />

        {/*    <img
          src={Hero}
          alt="Hero"
          className=" md:w-[70%] mx-auto  lg:w-[80%] xl:w-full z-50 relative scale-[1.02]"
          loading="lazy"
          id="Hero"
        />

        <img
          src={Koin}
          alt="Hero"
          className=" md:w-[70%] mx-auto  lg:w-[80%] xl:w-full z-20 absolute top-0 scale-[0.875]"
          loading="lazy"
        />

        <img
          src={Hitam}
          alt="Hero"
          className=" md:w-[70%] mx-auto  lg:w-[80%] xl:w-full z-30 absolute -bottom-8 scale-[0.875]"
          loading="lazy"
        />

        <img
          src={Bendera}
          alt="Hero"
          className=" md:w-[70%] mx-auto left-1/2 -translate-x-1/2   lg:w-[80%] xl:w-full z-50 absolute top-40 max-w-[150px] "
          loading="lazy"
        /> */}
      </div>
    </>
  );
};

export default RightJumbo;
