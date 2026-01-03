import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Appcontext } from "../context/Appcontext";
import axios from 'axios'
import {toast} from 'react-toastify'
import Loading from "../components/Loading";
const Login = () => {
  const [mode, setMode] = useState("Signup"); // Signup | Login
  const {backendUrl,isLoggedin,setIsLoggedin,getUserData}=useContext(Appcontext);

  const [done,setDone]=useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const senVerification=async ()=>{
    try{
      setDone(true);
      axios.defaults.withCredentials=true;
      const {data}=await axios.post(backendUrl+'/api/auth/send-verify-otp')
      if(data.success)
      {
        setDone(false);
        navigate("/email-verify");
        toast.success("OTP sent to your Email");
      }
      else
      {
        setDone(false);
        toast.error(data.message);
      }
    }catch(err)
    {
      setDone(false);
      toast.error(err.message);
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    try{
      setDone(true);
      e.preventDefault();
      axios.defaults.withCredentials=true;
      if(mode==="Signup")
      {
          toast("Registering");
        
        const {data}=await axios.post(backendUrl+'/api/auth/register',formData)
          if(data.success)
        {
          setDone(false);
          setMode("Login");
        }
        else {toast.error(data.message);setDone(false);}
      }
      
      else
      {
        const {data}=await axios.post(backendUrl+'/api/auth/login',{
        email: formData.email,
        password: formData.password
      });
          if(data.success)
        {
          setMode("Login");
          toast.success("Sending otp on your email!")
          await senVerification();
        }
        else {toast.error(data.message);setDone(false);}
      }

    }catch(err)
    {
      setDone(false);
      toast.error(err.message);
    }

  };

  const switchMode = (newMode) => {
    setMode(newMode);
    setFormData({ name: "", email: "", password: "" });
  };
  const navigate=useNavigate();
  return (
    
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background:"linear-gradient(135deg,#cec5f2,#9a92f7)"}}>
      {(done && mode!=="Signup")? <Loading status={"Sending otp"}/> : null}
      {(done && mode==="Signup")? <Loading status={"Registering You"}/> : null}
      <div style={{position:"fixed",top:"20px",left:"20px", fontSize:"40px", cursor:"pointer" }} onClick={()=>navigate("/")}>ShopOnline</div>
      <div
        style={{
          width: "350px",
          padding: "30px",
          background: "white",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          {mode === "Signup" ? "Create Your Account" : "Login to Your Account"}
        </h2>

        <form onSubmit={handleSubmit}>
      
          {mode === "Signup" && (
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              minLength={3}
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            minLength={5}
            value={formData.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle} disable={done}>
            {mode === "Signup" ? "Signup" : "Login"}
          </button>
        </form>

        {mode === "Signup" ? (
          <p style={textStyle}>
            Already have an account?{" "}
            <span style={linkStyle} onClick={() => switchMode("Login")}>
              Login here
            </span>
          </p>
        ) : (
          <p style={textStyle}>
            Don&apos;t have an account?{" "}
            <span style={linkStyle} onClick={() => switchMode("Signup")}>
              Signup here
            </span>
          </p>
        )}
      </div>
    </div>
  );
};


const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#6c63ff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
};

const textStyle = {
  textAlign: "center",
  marginTop: "15px",
};

const linkStyle = {
  color: "#6c63ff",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Login;
