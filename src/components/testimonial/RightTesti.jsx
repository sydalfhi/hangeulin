import testiHero from "/assets/testiHero.png";
const RightTesti = () => {
  return (
    <div className="grid w-full scale-75    place-items-center lg:place-items-start lg:min-w-[50vw]     xl:place-items-center  xl:scale-90 2xl:scale-100 2xl:place-items-center ">
      <img
        src={testiHero}
        alt="testiHero"
        loading="lazy"
        className="self-center mr-auto xl:translate-x-24  xl:-translate-y-5 2xl:-translate-y-0 relative"
      />
    </div>
  );
};

export default RightTesti;
