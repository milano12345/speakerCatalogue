import React, { useState, useEffect } from "react";
import axios from "axios";
import ClassCards from "./ClassCards";

var fn = function () {
  /* do you want */
};

const Cover = (props) => {
  console.log("prop", props);

  return (
    <div className="new">
      <div
        onClick={() => fn()}
        onKeyDown={() => fn()}
        role="menuitem"
        tabIndex="0"
      >
        {/* {classes.map((item) => (
            // <ClassCards key={item.id} name={item.id} data={item} />
            <img
              src={item.productImg}
              alt={item.productName}
              // style={{ display: "block", width: "100%" }}
            />
          ))}
        </div> */}
        <img
          //alt={props.data.productName}
          style={{ display: "block", width: "100%" }}
        />
      </div>
      <img
        src="[image/path/please_change]"
        alt="title or description"
        data-action="http://andyyou.github.io/react-coverflow/"
      />
      <img
        src="[image/path/please_change]"
        alt="title or description"
        data-action="http://andyyou.github.io/react-coverflow/"
      />
    </div>
  );
};

export default Cover;
