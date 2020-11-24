import React, { useState, useEffect } from "react";
import ClassCards from "./ClassCards";
import axios from "axios";

const Description = (props) => {
  // const [classes, setClasses] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:3300/api/auth/products").then((res) => {
  //     console.log(res);
  //     setClasses(res.data);
  //   });
  // }, []);

  return (
    <div className={"card"}>
      <div className={"productName"}>{props.data.productName}</div>
      <div className={"price"}>{props.data.price}</div>
      {/* <img className={"productImage"} src={props.data.productImg}></img> */}
      <div className={"shippingInfo"}>{props.data.shipping}</div>
      <div className={"productSpec"}>{props.data.specs}</div>
      <div className={"productReviews"}>{props.data.reviews}</div>
      <div className={"similarProducts"}>{props.data.similiar}</div>
      <div className={"recentlyViewed"}>{props.data.recentlyViewed}</div>
    </div>
  );
};
export default Description;
