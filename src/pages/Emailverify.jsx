import React, { useState } from "react";
import styles from "../components/Emailverify.module.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useContext } from "react";
import { Appcontext } from "../context/Appcontext";
import { useNavigate } from "react-router";
import Loading from "../components/Loading";
const Emailverify = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const {backendUrl,isLoggedin,setIsLoggedin}=useContext(Appcontext);
  const [done,setDone]=useState(false);
  const navigate=useNavigate();
  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, "");
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (index > 0) {
        document.getElementById(`otp-${index - 1}`).focus();
      }
    }
  };

  const handleSubmit=async(e)=>{
    setDone(true);
    console.log(otp.join(""));
    e.preventDefault();
    try{
      axios.defaults.withCredentials=true;
      const {data}=await axios.post(backendUrl+'/api/auth/verify-account',{otp:otp.join("")});
      if(data.success)
      {
         setDone(false);
        setIsLoggedin(true);
        toast.success("LogIn successful");
        navigate("/");
      }
      else
      {
        setDone(false);
        toast.error(data.message);  
      }

    }catch(err){
      setDone(false);
      toast.error(err.message);
    }
  }

  return (
    <div className={styles.container}>
      {done ? <Loading status={"Verifying"}/> :null}
      <div style={{position:"fixed",top:"20px",left:"20px", fontSize:"40px", cursor:"pointer" }} onClick={()=>navigate("/")}>ShopOnline</div>
      <form className={styles.card}>
        <h1>Email Verification</h1>
        <p>Enter the 6-digit code sent to your email</p>

        <div className={styles.otpInputs}>
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>

        <button type="submit" disabled={done} onClick={(e)=>handleSubmit(e)}>Verify Email</button>

      </form>
    </div>
  );
};

export default Emailverify;
