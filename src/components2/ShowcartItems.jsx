import React, { useContext, useEffect, useState } from "react";
import { Appcontext } from "../context/Appcontext";
import styles from "./items.module.css"; 
import { toast } from "react-toastify";
import axios from "axios";
import api from "../utilities/axios"
import Loading from "../components/Loading";

const ShowcartItems = ({ item}) => {
  const { productData } = useContext(Appcontext);
  const [data, setData] = useState(null);
  const [qty, setQty] = useState(item.qty);

  useEffect(() => {
    const product = productData.find((p) => p._id === item.productId);
    if (product) setData(product);
  }, [item.productId, productData]);

  useEffect(() => {
    setQty(item.qty);
  }, [item.qty]);
 
  const [flag,setFlag]=useState(false);
const {backendUrl,getcartdata}=useContext(Appcontext)
  async function removeFromCart()
  {
    try{
         setFlag(true);
        axios.defaults.withCredentials=true;
        const {data}=await api.post(backendUrl+"/api/product/delete",{productId:item.productId});
        if(data.success)
        {
            setFlag(false);
            toast.success(data.message);
            getcartdata();
        }
        else
        {
             setFlag(false);
            toast.error(data.message);
        }
    }catch(err)
    {
         setFlag(false);
        toast.error(err.message);
    }
  }

  async function handleClick(e)
  {
    try{
        setFlag(true);
        axios.defaults.withCredentials=true;
        const {data}=await api.post(backendUrl+"/api/product/change",{productId:item.productId,qty:qty});
        if(data.success)
        {
             setFlag(false);
            toast.success(data.message);
            getcartdata();
        }
        else
        {
             setFlag(false);
            toast.error(data.message);
        }
    }catch(err)
    {
         setFlag(false);
        toast.error(err.message);
    }
  }

  if(flag || !data) {return (<Loading status="Fetching"/>) }
  return (
    <div className={styles.itemContainer}>
      <div className={styles.productInfo}>
        <div>
          <h4 className={styles.productName}>{data.name}</h4>
          <p className={styles.productPrice}>Price: ₹{data.price}</p>
        </div>

        <button
          className={styles.deleteBtn}
          onClick={() => removeFromCart(item.productId)}
        >
          Delete
        </button>
      </div>

      <div className={styles.quantitySection}>
        <label
          htmlFor={`qty-${item.productId}`}
          className={styles.quantityLabel}
        >
          QTY:
        </label>
        <input
          id={`qty-${item.productId}`}
          type="number"
          min="1"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          className={styles.quantityInput}
        />
        <button onClick={(e)=>handleClick(e)}>Set Qty</button>
      </div>
    </div>
  );
};

export default ShowcartItems;
