import React, { useContext, useEffect, useState } from "react";
import { Appcontext } from "../context/Appcontext";
import ShowcartItems from "./ShowcartItems";
import styles from "./cart.module.css";
import { useNavigate } from "react-router-dom";

const Showcart = () => {
  const { cartData, getcartdata, productData } = useContext(Appcontext);
  const [total, setTotal] = useState(0);
const navigate=useNavigate();
  useEffect(() => {
    if (!cartData || cartData.length === 0) {
      getcartdata();
    }
  }, []);

  // calculate total whenever cart or products change
  useEffect(() => {
    let sum = 0;
    cartData.forEach((item) => {
      const product = productData.find(
        (p) => p._id === item.productId
      );
      if (product) {
        sum += product.price * item.qty;
      }
    });
    setTotal(sum);
  }, [cartData, productData]);

  if (!cartData || cartData.length === 0) {
    return <div className={styles.empty}>Your cart is empty</div>;
  }

  const shipping = 100;

  return (
    <div className={styles.cartWrapper}>
      <h2 className={styles.heading}>MY CART</h2>

      <div className={styles.items}>
        {cartData.map((item) => (
          <ShowcartItems item={item} key={item.productId} />
        ))}
      </div>


      <div className={styles.totalBox}>
        <h3>CART TOTALS</h3>

        <div className={styles.row}>
          <span>Subtotal</span>
          <span>₹ {total.toFixed(2)}</span>
        </div>

        <div className={styles.row}>
          <span>Shipping Fee</span>
          <span>₹ {shipping.toFixed(2)}</span>
        </div>

        <div className={`${styles.row} ${styles.final}`}>
          <span>Total</span>
          <span>₹ {(total + shipping).toFixed(2)}</span>
        </div>
        <button onClick={()=>navigate("/place-order")}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Showcart;
