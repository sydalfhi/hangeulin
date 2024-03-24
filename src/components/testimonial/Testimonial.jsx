import LeftTesti from "./LeftTesti";
import RightTesti from "./RightTesti";

const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="grid mt-[100px]  grid-cols-1 md:grid-cols-2 overflow-x-hidden"
    >
      <div className="order-2 md:order-1 ">
        <LeftTesti />
      </div>
      <div className="order-1 md:order-2 ">
        <RightTesti />
      </div>
    </section>
  );
};

export default Testimonial;
