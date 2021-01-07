import React, { useState } from "react";
import Description from "./Description";
//import { axiosWithAuth } from "./axiosWithAuth";

const ClassCards = (props) => {
  //var fn = function (e) {};
  const [desc, showDesc] = useState();
  //console.log("cardprops", desc);

  // const handleClick = (e) => {
  //   const id = { id: e.target };
  //   showDesc(id);
  //   console.log(props.data.id);
  //   console.log("Click happened");
  // };
  // const [clicked, setClicked] = useState({});

  return (
    <div className="descripCont">
      <div
        id={props.data.id}
        //onClick={(e) => handleClick(e)}
        // onClick={() => setClicked(props.data.id)}
        // onKeyDown={(e) => fn(e)}
        className={"card"}
      >
        <div className={"productName"}>{props.data.productName}</div>
        <div className={"price"}>{props.data.price}</div>
        <img className={"productImage"} src={props.data.productImg}></img>
        <div className={"shippingInfo"}>{props.data.shipping}</div>
      </div>
      {/* <div className={showDesc === props.data.id ? "card" : "card2"}>
        <div className={"productName"}>{props.data.productName}</div>
        <div className={"price"}>{props.data.price}</div>
        {/* <img className={"productImage"} src={props.data.productImg}></img> 
        <div className={"shippingInfo"}>{props.data.shipping}</div>
        <div className={"productSpec"}>{props.data.specs}</div>
        <div className={"productReviews"}>{props.data.reviews}</div>
        <div className={"similarProducts"}>{props.data.similiar}</div>
        <div className={"recentlyViewed"}>{props.data.recentlyViewed}</div>
      </div> */}
    </div>
  );
};
export default ClassCards;
