import React, { useState, useEffect } from "react";
import axios from "axios";
import ClassCards from "./ClassCards";

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
        {classes.map((item) => (
          <ClassCards key={item.id} name={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
