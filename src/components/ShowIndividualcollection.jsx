import React from "react";
import styles from "./ShowIndividualcollection.module.css";
import { useNavigate } from "react-router-dom";

const ShowIndividualcollection = ({ item }) => {
  function calc(price, discount) {
    return Math.floor((price * 100) / (100 - discount));
  }
  const navigate=useNavigate();
  function handleClick()
  {
        navigate(`/product/${item._id}`)
  }
  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.imgBox}>
        <img src={item.image[0]} alt={item.name} />
        <span className={styles.badge}>{item.discount}% OFF</span>
      </div>

      <div className={styles.name}>{item.name}</div>

      <div className={styles.priceBox}>
        <span className={styles.price}>₹{item.price}</span>
        <span className={styles.mrp}>₹{calc(item.price, item.discount)}</span>
      </div>
    </div>
  );
};

export default ShowIndividualcollection;
