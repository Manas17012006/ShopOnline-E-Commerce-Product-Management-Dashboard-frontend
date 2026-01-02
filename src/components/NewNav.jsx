import React, { useEffect, useState } from "react";
import styles from "./newNav.module.css";
import { NavLink, useNavigate } from "react-router";
import { useContext } from "react";
import { Appcontext } from "../context/Appcontext";
import axios from "axios";
import cartImg from "../assets/cart.png";
import { toast } from "react-toastify";
import menuImg from "../assets/menu.png"
import Sidebarmenu from "./Sidebarmenu";
const NewNav = () => {
  const {backendUrl,isLoggedin,setIsLoggedin,getUserData,userData} = useContext(Appcontext);
  const [ismenu,setMenu]=useState(false);
  useEffect(() => {
    getUserData();
  }, []);
  const navigate = useNavigate();
  const handleLogout = async () => {
  try {
    const { data } = await axios.post(
      backendUrl + "/api/auth/logout",
      {},
      { withCredentials: true } 
    );
    console.log(data);
    if (data.success) {
      setIsLoggedin(false);
      navigate("/");
      toast.success(data.message);
    }
  } catch (error) {
    toast.error(
      error.response?.data?.message || error.message
    );
  }
};
  return (
    <div className={styles.nav}>
        
      <div className={styles.shop}>ShopOnline</div>
      <NavLink to="/dashboard" className={({ isActive }) =>isActive ? `${styles.collection} ${styles.active}`: `${styles.collection}`}>
      HOME</NavLink>
      <NavLink to="/collection" className={({ isActive }) =>isActive ? `${styles.collection} ${styles.active}`: `${styles.collection}`}>
      COLLECTION</NavLink>
      <NavLink to="/about" className={({ isActive }) =>isActive ? `${styles.collection} ${styles.active}`: `${styles.collection}`}>
      ABOUT</NavLink>
      <NavLink to="/contact" className={({ isActive }) =>isActive ? `${styles.collection} ${styles.active}`: `${styles.collection}`}>
      CONTACT</NavLink>

     {userData.isAdmin ?<NavLink to="/admin-panel" className={({ isActive }) =>isActive ? `${styles.collection} ${styles.active}`: `${styles.collection}`}>
      ADMIN PANEL</NavLink> : null}

        <div className={styles.bigdiv}>
       
        <div>
           
            <div className={styles.small}><img  src={cartImg} alternate="VIEW CART" width="50" height="50" title="View your cart" onClick={()=>navigate("/mycart")}></img></div>
        </div>
        
      <button
        className={styles.btn}
        onClick={() => {
          if (isLoggedin) {
            handleLogout();
          } else {
            navigate("/login");
          }
        }}
      >
        {isLoggedin ? "Logout" : "Login"}
      </button>
    <div onClick={()=>setMenu(true)} className={`${styles.menu} ${styles.small}`}><img src={menuImg} alt="MENU" width="50" height="50"/></div>
        </div>
      
     {/* for side bar menu */}
        <Sidebarmenu ismenu={ismenu} setMenu={setMenu}/>
    </div>
  );
};

export default NewNav;
