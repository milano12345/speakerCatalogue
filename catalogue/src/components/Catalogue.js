import React, { useState, useEffect } from "react";
import axios from "axios";
import ClassCards from "./ClassCards";
import Description from "./Description";
import Coverflow from "react-coverflow";

const Catalogue = () => {
  const [classes, setClasses] = useState([]);
  const [clicked, setClicked] = useState({});

  if (!clicked) {
    console.log("clicked");
  }
  console.log("state", clicked);
  console.log("item", classes);

  useEffect(() => {
    axios
      .get("https://cataloguebackend.herokuapp.com/api/auth/products")
      .then((res) => {
        console.log(res);
        setClasses(res.data);
      });
  }, []);

  const handleClick = (evt) => {
    var target = evt.target || evt.srcElement;
    //document.getElementById(target.parentNode.id)[0].id;
    console.log(target.parentNode);

    const arr = [
      Array.from(document.querySelector(".description-wrapper").children),
    ];
    arr[0].forEach((item) => (item.style.display = "none"));
    for (let i of arr[0]) {
      if (i.id === target.parentNode.id) {
        i.style.display = "inline-block";
      }
    }

    console.log("Click happened from catalogue", evt.target, arr);

    //target.parentNode.style.visibility = "visible";
  };

  return (
    <div className={"catalogue"}>
      <div className={"filterBar"}>Search filter bar</div>
      <img
        className={"pineapple"}
        alt={"pineapple"}
        src={
          "https://images.pexels.com/photos/2412941/pexels-photo-2412941.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=200&w=300"
        }
      />
      <div className={"productCatalogue"} onClick={handleClick}>
        <Coverflow
          width={960}
          height={550}
          displayQuantityOfSide={4}
          navigation={false}
          enableHeading={false}
        >
          {classes.map((item) => (
            <ClassCards key={item.id} name={item.id} data={item} />
          ))}
        </Coverflow>
        <div className="description-wrapper">
          {classes.map((item) => (
            <Description key={item.id} data={item} id={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
