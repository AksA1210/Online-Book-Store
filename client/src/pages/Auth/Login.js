import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../Styles/Authstyles.css";


const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
        email:email,
        password:password,
    };
//     try {
//       const res = await axios.post("/api/v1/auth/login", {
//         email,
//         password,
//       });
//       if (res && res.data.success) {
//         toast.success(res.data && res.data.message);
//         navigate("/home");
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
     
        if(credentials.email == "aksaaa@gmail.com" && credentials.password == "12345"){
            console.log("Login Successful !!!")
            navigate('/book');
        }else{console.log("Login Failed");

        }
       
     };
  return (
    <Layout title="Register - Ecommerce App">
      <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>
          
          <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
