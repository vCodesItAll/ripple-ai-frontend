import React from "react";
import Image from "next/image";

function Moon() {
  return (
    <div>
      <Image
        src="/images/moon2.png"
        alt="moon image"
        height={1000}
        width={1000}
      />
    </div>
  );
}

export default Moon;
