const PrimaryBtn = (props) => {
  return (
    <>
      <button
        className={`primary_btn roboto text-base font-semibold block ${props.kelas}  text-[#1a1a1a] `}
      >
        <a href={props.link}>{props.nama}</a>
      </button>
    </>
  );
};

export default PrimaryBtn;
