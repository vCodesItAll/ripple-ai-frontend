import React from "react";
import Navbar from "../components/navbar";

function Licensing() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Licensing Information</h1>
        <p className="text-center">
          RiPPLE.ai is made available under the open-source license. This means
          that users are free to use and share the content available on our
          platform, provided they adhere to the terms and conditions outlined in
          the open-source license. Please review the open-source license for
          detailed information on your rights and obligations when using
          RiPPLE.ai. By accessing or using our web app, you agree to comply with
          the terms set forth in the applicable license. For any questions or
          concerns regarding licensing, please contact us at (tbd). Thank you
          for being a part of RiPPLE.ai and respecting the terms of our
          licensing agreement.
        </p>
      </div>
    </>
  );
}

export default Licensing;
