import React from "react";
import Image from "next/image";

function Logo() {
  return (
    <div>
      <Image
        src="/images/ripple2.png"
        alt="ripple image"
        height={400}
        width={600}
      />
    </div>
  );
}

export default Logo;
