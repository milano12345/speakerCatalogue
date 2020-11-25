import React, { useState, useEffect } from "react";
import axios from "axios";
import ClassCards from "./ClassCards";
import Description from "./Description";
import Coverflow from "react-coverflow";

const Catalogue = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    axios
      .get("https://cataloguebackend.herokuapp.com/api/auth/products")
      .then((res) => {
        console.log(res);
        setClasses(res.data);
      });
  }, []);

  return (
    <div className={"catalogue"}>
      <div className={"filterBar"}>Search filter bar</div>
      <div className={"productCatalogue"}>
        <Coverflow
          width={960}
          height={480}
          displayQuantityOfSide={3}
          navigation={false}
          enableHeading={false}
        >
          {classes.map((item) => (
            <ClassCards key={item.id} name={item.id} data={item} />
          ))}
        </Coverflow>
        <div className="description-wrapper">
          {classes.map((item) => (
            <Description key={item.id} name={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
