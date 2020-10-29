import React, { useState, useEffect } from "react";
import ClassCards from "./ClassCards";
import axios from "axios";

const Description = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3300/api/auth/products").then((res) => {
      console.log(res);
      setClasses(res.data);
    });
  }, []);

  return (
    <div className="container">
      <div className={"description"}>
        <div className={"productName"}>Product Name</div>
        <div className={"productImage"}>Image of Product</div>
        <div className={"shippingInfo"}>Shipping info</div>
        <div className={"productSpec"}>Product Specs</div>
        <div className={"productReviews"}>Product Reviews</div>
        <div className={"similarProducts"}>Similar Products</div>
        <div className={"recentlyViewed"}>Recently Viewed</div>
      </div>
    </div>
  );
};
export default Description;
