import LeftTesti from "./LeftTesti";
import RightTesti from "./RightTesti";

const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="flex mt-[100px] justify-between flex-col lg:flex-row overflow-x-hidden"
    >
      <div className="order-2 lg:order-1 ">
        <LeftTesti />
      </div>
      <div className="order-1 lg:order-2">
        <RightTesti />
      </div>
    </section>
  );
};

export default Testimonial;
