import React from "react";
import Image from "next/image";
import datLogo from "../images/ripple3.png"

function Logo() {
  return (
    <div>
      <Image
        src={datLogo}
        alt="ripple image"
        height={400}
        width={600}
      />
    </div>
  );
}

export default Logo;
