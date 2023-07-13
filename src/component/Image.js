import React from "react";
import Products from "./Product";

function Images() {
  return (
    <div>
      <img src={Products.Image} alt="img" style={{ width: 300 }} />
    </div>
  );
}

export default Images;
