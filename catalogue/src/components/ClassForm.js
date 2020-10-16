import React from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import "../App.css";

function ClassForm(props) {
  // const [formData, setFormData] = React.useState({
  //   name: props.class.name,
  //   type: props.class.type,
  //   location: props.class.location,
  //   intensitylvl: props.class.intensitylvl,
  //   length_minutes: props.class.length_minutes,
  //   current_size: props.class.current_size,
  //   max_size: props.class.max_size,
  // });
  const [formData, setFormData] = React.useState({});

  console.log("class", formData);
  console.log("classprops", props);

  const handleChanges = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleClasses = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/${props.class.id}`, formData)
      .then((res) => {
        console.log(res);
        console.log("propsClassForm", props);
        props.history.props.history.push("/client");
        props.history.props.history.push("/instructor");
      });
  };

  return (
    <div className="form-wrapper">
      <form className="helpForm">
        Contact Me
        <label>
          Name:
          <input
            name="name"
            type="text"
            defaultValue={formData.name}
            onChange={handleChanges}
          />
        </label>
        <label>
          E-Mail:
          <input
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChanges}
          />
        </label>
        <label>
          Message:
          <textarea
            rows="4"
            cols="20"
            name="message"
            type="text"
            value={formData.message}
            onChange={handleChanges}
          />
        </label>
        <button onClick={handleClasses} style={{ marginLeft: "64%" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ClassForm;
