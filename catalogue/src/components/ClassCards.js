import React from "react";
//import { axiosWithAuth } from "./axiosWithAuth";

const ClassCards = (props) => {
  return (
    <div className={"card"}>
      <div className={"productName"}>{props.data.productName}</div>
      <div className={"price"}>{props.data.price}</div>
      <img className={"productImage"} src={props.data.productImg}></img>
      <div className={"shippingInfo"}>{props.data.shipping}</div>
      {/* <div className={"productSpec"}>{props.data.specs}</div>
      <div className={"productReviews"}>{props.data.reviews}</div>
      <div className={"similarProducts"}>{props.data.similiar}</div>
      <div className={"recentlyViewed"}>{props.data.recentlyViewed}</div> */}
    </div>
  );
};
export default ClassCards;
