import React, { useState } from "react";
import axios from "axios";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../BaseUrl";
const Register = () => {
  const [fname, setFName] = useState("");
  const [file, setFile] = useState("");
  const history = useNavigate();
  const setData = (e) => {
    const { value } = e.target;
    setFName(value);
  };
  const setImage = (e) => {
    setFile(e.target.files[0]);
  };

  //add user data
  const addUserData = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("image", file);
    formData.append("fname", fname);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const res = await axios.post(`${BASE_URL}/register`, formData, config);
    if (!res.data) {
      console.log("error");
    } else {
      history("/");
    }
  };

  return (
    <div className="register">
      <div className="content">
        <h3>Add New User</h3>
        <form className="add-user">
          <label htmlFor="name">Enter Your Name</label>
          <input
            type="text"
            name="name"
            onChange={setData}
            placeholder="Enter Your Name..."
          />
          <label htmlFor="image">Select Your Image</label>
          <input type="file" name="image" onChange={setImage} />
          <button className="register-btn" onClick={addUserData}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
