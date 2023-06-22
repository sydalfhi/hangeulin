import React from "react";
import LeftJumbo from "./LeftJumbo";
import RightJumbo from "./RightJumbo";

const Jumbo = () => {
  return (
    <section id="jumbo">
      <div className="contain">
        <LeftJumbo />
        <RightJumbo />
      </div>
    </section>
  );
};

export default Jumbo;
