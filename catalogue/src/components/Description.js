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

  console.log("description", props.data.data);

  return (
    <div className="card" id={"card2"}>
      <div className={"productName"}>{props.data.data.productName}</div>
      <div className={"price"}>{props.data.data.price}</div>
      {/* <img className={"productImage"} src={props.data.data.productImg}></img> */}
      <div className={"shippingInfo"}>{props.data.data.shipping}</div>
      <div className={"productSpec"}>{props.data.data.specs}</div>
      <div className={"productReviews"}>{props.data.data.reviews}</div>
      <div className={"similarProducts"}>{props.data.data.similiar}</div>
      <div className={"recentlyViewed"}>{props.data.data.recentlyViewed}</div>
    </div>
  );
};
export default Description;
