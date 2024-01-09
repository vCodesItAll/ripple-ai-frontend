import React from "react";
import Image from "next/image";
import lilMoon from "../images/moon2.png";

function Moon() {
  return (
    <div>
      <Image src={lilMoon} alt="moon image" height={1000} width={1000} />
    </div>
  );
}

export default Moon;
