import React, { useContext, useEffect } from "react";
import styles from "./header.module.css";
import onlineShoppingImg from "../assets/onlineshopping.jpg";
import { Appcontext } from "../context/Appcontext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { isLoggedin,setIsLoggedin, userData, getUserData } = useContext(Appcontext);

  // refresh / first load pe user data lao
useEffect(() => {
  getUserData();
}, []);

const navigate=useNavigate();

const handleClick=async()=>{
  if(!isLoggedin)
  {
    toast.warning("Please Login to Get Started!")
  }
  else
  {
    navigate("/dashboard");
  }
}
  return (
    <div className={styles.nav}>
      <div className={styles.txt}>
        <p className={styles.big}>
          Hey {isLoggedin ? userData.name : "Customer"} 👋
        </p>

        <p className={styles.small}>
          Bringing the best products, deals, and convenience straight to you.
        </p>

        <button className={styles.btn} onClick={handleClick}>GET STARTED</button>
      </div>

      <div className={styles.img}>
        <img
          className={styles.imgg}
          src={onlineShoppingImg}
          alt="Online Shopping"
          width="500"
          height="500"
        />
      </div>
    </div>
  );
};

export default Header;
