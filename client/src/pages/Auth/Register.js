
import React, { useState } from 'react';
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../Styles/Authstyles.css";
const Register =  () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
//form function

const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      const res = await axios.post('api/v1/auth/register', {
        name,
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }

    }catch(error){
      console.log(error);
      toast.error("Something went wrong");
    }

};
  return (
    <Layout title = "Register - Ebook store app">
      <div className="form-container">
       
        <form onSubmit = {handleSubmit}>
        <h4 className="title">REGISTRATION FORM</h4>
        
      <div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label">Username</label>
    <input type="name" value = {name} onChange={(e) => setName(e.target.value) }className="form-control" id="exampleInputname" placeholder="Enter the Username" required />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail" className="form-label">Email Address</label>
    <input type="email" value = {email} onChange={(e) => setEmail(e.target.value) } className="form-control" id="exampleInputEmail1" placeholder="Enter the Email address" required />
    
  </div>
  
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" value = {password} onChange={(e) => setPassword(e.target.value) } className="form-control" id="exampleInputPassword1" placeholder="Enter the Password" required/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>


</form>

  
      </div>
    </Layout>
  );
};

export default Register;
