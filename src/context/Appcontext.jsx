import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../utilities/axios"
export const Appcontext = createContext();

export const AppcontextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState(false);
  const [adminData, setAdminData] = useState([]);
  const [productData,setProductData]=useState([]);
  const [cartData,setCartData]=useState([]);
  const [orderData,setOrderData]=useState([]);
  const getUserData = async () => {
    try {
      const { data } = await api.get(
        backendUrl + "/api/auth/getUserData",
        { withCredentials: true }
      );

      if (data.success) {
        setUserData(data.userData);
        setIsLoggedin(data.userData.isVerified);
      } else {
        setIsLoggedin(false);
      }
    } catch (error) {
      setIsLoggedin(false);
    }
  };

  const fetchAdmins = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await api.get(
        backendUrl + "/api/auth/getnoAdmins"
      );

      if (data.success) {
        setAdminData(data.data);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const fetchProducts = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await api.get(
        backendUrl + "/api/product/list"
      );

      if (data.success) {
        setProductData(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

const getcartdata=async ()=>{
  try{

    axios.defaults.withCredentials = true;
      const { data } = await api.get(
        backendUrl + "/api/product/getcartdata"
      );

      if (data.success) {
        setCartData(data.info);
      }
      else
      {
        toast.error("Unexpected error");
      }

  }catch(error){
    toast.error(error.response?.data?.message || error.message);
  }
}

const getorderdata=async ()=>{
  try{

    axios.defaults.withCredentials = true;
      const { data } = await api.get(
        backendUrl + "/api/order/orders"
      );

      if (data.success) {
      setOrderData(data.info)
      }
      else
      {
        toast.error("Unexpected error");
      }

  }catch(error){
    toast.error(error.response?.data?.message || error.message);
  }
}
 useEffect(() => {
  fetchProducts(); 

  if (isLoggedin) {
    fetchAdmins();
    getcartdata();
    getorderdata();
  }
}, [isLoggedin]);


  const value = {
    backendUrl,
    isLoggedin,
    setIsLoggedin,
    userData,
    setUserData,
    getUserData,
    adminData,
    fetchAdmins,
    productData,
    setProductData,
    fetchProducts,
    cartData,setCartData,getcartdata,
    orderData,setOrderData,getorderdata
  };

  return (
    <Appcontext.Provider value={value}>
      {props.children}
    </Appcontext.Provider>
  );
};
