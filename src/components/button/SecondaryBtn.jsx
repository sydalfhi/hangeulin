const SecondaryBtn = (props) => {
  return (
    <>
      <button
        className={`secondary_btn roboto text-base font-semibold block text-white ${props.kelas}`}
      >
        <a href={props.link}>{props.nama}</a>
      </button>
    </>
  );
};

export default SecondaryBtn;
