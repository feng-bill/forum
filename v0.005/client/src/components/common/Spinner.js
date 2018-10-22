import React from "react";
import Spinner from "./Loading_icon.gif";

export default () => {
  return (
    <div>
      <img
        src={Spinner}
        style={{ width: "300px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
};
