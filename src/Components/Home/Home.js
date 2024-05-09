import React, { useEffect, useState } from "react";
import moment from 'moment'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import './home.css'
import { Link } from "react-router-dom";
import { BASE_URL } from "../BaseUrl";


const Home = () => {
const [data, setData] = useState([]);
const [show, setShow] = useState(false);

const getUserData = async () =>{
  const res = await axios.get(`${BASE_URL}/getdata`,{
    headers:{
      "Content-Type": "application/json"
    }
  })
  if(!res.data){
    console.log("error");
  }else{
   setData(res.data)
  }
}
const dltUser = async (id) =>{
  const res = await axios.get(`${BASE_URL}/${id}`,{
    headers:{
      "Content-Type": "application/json"
    }
  })
  if(!res.data){
    console.log("error");
  }else{
   console.log("user deleted");
   setShow(true)
  }
}

useEffect(() =>{
  getUserData()
},[dltUser])
  return (
   
    <div className="home">
 {show && <Alert variant="danger" onClose={() => setShow(false)} dismissible style={{width: "100%"}}>
       User deleted successfully!
        
      </Alert> }
      
      <h1 className="home-heading">MERN Image Upload Project</h1>
      <div className="add-user-btn">
      <Link to="/register" ><button>Add User</button></Link> 
      </div>
      <div className="box-container">
{
  data.length > 0 ? data.map((el,i) =>{
    return (
      <div className="box" key={i}>
      <img src={`/uploads/${el.imgpath}`} alt="profile" className="profile-img" />
      <div className="name">User Name : {el.fname} </div>
      <div className="date">Date Added: {moment(el.date).format("L")}</div>
      <div className="delete-btn">
        <button onClick={() => dltUser(el._id) }>Delete</button>
      </div>
    </div>
    )
  }) : ""
}


      
     
      </div>
    </div>
  );
};

export default Home;
