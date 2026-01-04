import React from "react";
import styles from "./navbar.module.css";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { Appcontext } from "../context/Appcontext";
import axios from "axios";
import api from "../utilities/axios";
import { toast } from "react-toastify";
const Navbar = () => {
  const {backendUrl,isLoggedin,setIsLoggedin} = useContext(Appcontext);
  const navigate = useNavigate();
  const handleLogout = async () => {
  try {
    const { data } = await api.post(
      backendUrl + "/api/auth/logout",
      {},
      { withCredentials: true } 
    );
    console.log(data);
    if (data.success) {
      setIsLoggedin(false);
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
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
    </div>
  );
};

export default Navbar;
