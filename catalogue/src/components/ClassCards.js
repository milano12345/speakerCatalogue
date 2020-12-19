import React, { useState } from "react";
import Description from "./Description";
//import { axiosWithAuth } from "./axiosWithAuth";

const ClassCards = (props) => {
  var fn = function (e) {};
  const [div, showDiv] = useState(false);
  console.log();
  const handleClick = (e) => {
    console.log(props.data.id);
    console.log("Click happened");
  };
  // const [clicked, setClicked] = useState({});

  return (
    <div className="descripCont">
      <div
        id={props.data.id}
        onClick={(e) => handleClick(e)}
        // onClick={() => setClicked(props.data.id)}
        // onKeyDown={(e) => fn(e)}
        className={"card"}
      >
        <div className={"productName"}>{props.data.productName}</div>
        <div className={"price"}>{props.data.price}</div>
        <img className={"productImage"} src={props.data.productImg}></img>
        <div className={"shippingInfo"}>{props.data.shipping}</div>
      </div>
      <Description data={props} />
    </div>
  );
};
export default ClassCards;
