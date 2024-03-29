import React, { useState, useEffect } from "react";
import axios from "axios";

// export const CardStyles = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   }
// `;
// export const ButtonGreen = styled.button`
//   background-color: #28a745;
//   border-color: 1px #28a745;
//   border-radius: 10%;
//   color: white;
//   width: 40%;
//   margin-left: 20%;
//   height: 2rem;
// `;

// export const ButtonRed = styled.button`
//   background-color: darkred;
//   border-color: 1px crimson;
//   border-radius: 10%;
//   color: white;
//   width: 40%;
//   height: 2rem;
//   vertical-align: top;
// `;

// export const Form = styled.form`
//   display: block;
//   width: 300px;
//   margin: 50px auto;
// `;

// export const Form2 = styled.form`
//   display: block;
//   width: 300px;
//   margin: auto;
// `;

// export const Label = styled.label`
//   margin-bottom: 0.5em;
//   color: black;
//   display: block;
//   font-size: 1.3rem;
// `;

// export const Input = styled.input`
//   padding: 0.5em;
//   color: black;
//   background-color: lightgray;
//   border: silver;
//   border-radius: 3px;
//   width: 100%;
//   margin-bottom: 0.5em;
// `;

// export const Card = styled.div`
//   border: 2px solid gray;
//   width: 28rem;
//   border-radius: 20px;
//   background-color: white;
//   margin-top: 8rem;
//   margin-bottom: 8rem;
// `;

// export const Login = styled.div`
//   border: 2px solid gray;
//   width: 28rem;
//   border-radius: 20px;
//   background-color: white;
//   margin-top: 8rem;
//   margin-bottom: 8rem;
// `;

// export const div = styled.div`
//   background: rgb(2, 0, 36);
//   background: linear-gradient(
//     90deg,
//     rgba(2, 0, 36, 1) 0%,
//     rgba(30, 30, 255, 1) 0%,
//     rgba(0, 212, 255, 1) 23%
//   );
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: auto;
//   margin-bottom: auto;
//   width: 100%;
//   height: 100vh;
//   overflow: hidden;
// `;

// export const Title = styled.h3`
//   text-align: center;
//   font-size: 1.7rem;
//   font-style: normal;
//   font-weight: 600;
// `;

// export const Subtitle = styled.h2`
//   font-family: arial;
//   font-size: 1.1rem;
//   text-align: center;
//   width: 66%;
//   margin: auto;
//   line-height: 1.5rem;
// `;
const initialState = {
  username: "",
  password: "",
};

const LogIn = (props) => {
  const [credentials, setCredentials] = useState(initialState);
  const [error, setError] = useState({ error: "" });
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [unique, setUnique] = React.useState(false);

  console.log(credentials);

  useEffect(() => {
    error.error && handleError(error.error.response.status);
  }, [error.error]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleError = (err) => {
    if (err === 400) {
      setLoading(false);
      setOpen(true);
    } else if (err === 401) {
      setLoading(false);
      setUnique(true);
    }
  };

  const handleChanges = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(credentials);
    axios
      .post(
        "",
        // "http://localhost:3300/api/auth/login",
        credentials
      )
      .then((response) => {
        const { history } = props;
        console.log(response);
        console.log(props);
        localStorage.setItem("token", response.data.token);
        if (response.data.type === "instructor") {
          history.push("/instructor");
        } else {
          history.push("/client");
        }
      })
      .catch((err) => setError({ error: err }));
  };

  return (
    <div className="wrapper">
      {loading ? <div style={{ textAlign: "right" }}>Loading...</div> : ""}
    </div>
  );
};

export default LogIn;
