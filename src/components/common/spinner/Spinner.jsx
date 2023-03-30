import React from "react";
import ReactLoading from "react-loading";
const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <ReactLoading type={"spin"} color={"#000000"} height={50} width={50} />
    </div>
  );
};

export default Spinner;
