import React from "react";
import styles from "./footer.module.css";

import exchange from "../assets/exchange.png";
import refund from "../assets/return.png";
import support from "../assets/support.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>

      {/* 🔹 FEATURES SECTION */}
      <div className={styles.features}>
        <div className={styles.featureItem}>
          <img src={exchange} alt="Exchange Policy" />
          <h4>Easy Exchange Policy</h4>
          <p>We offer hassle free exchange policy</p>
        </div>

        <div className={styles.featureItem}>
          <img src={refund} alt="Return Policy" />
          <h4>7 Days Return Policy</h4>
          <p>We provide 7 days free return policy</p>
        </div>

        <div className={styles.featureItem}>
          <img src={support} alt="Customer Support" />
          <h4>Best customer support</h4>
          <p>we provide 24/7 customer support</p>
        </div>
      </div>

      {/* 🔹 SUBSCRIBE SECTION */}
      <div className={styles.subscribe}>
        <h2 className={styles.hd1}>Subscribe now & get 30% off!</h2>
        <p className={styles.hd2}>
          Be the first to know about new arrivals, exclusive deals, and special updates.
        </p>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input
            className={styles.inp}
            type="email"
            placeholder="Enter your email"
            required
          />
          <button className={styles.btn}>SUBSCRIBE</button>
        </form>
      </div>

      {/* 🔹 FOOTER CONTENT */}
      <div className={styles.top}>
        <div className={styles.brand}>
          <h2>
            ShopOnline<span>.</span>
          </h2>
          <p>
            ShopOnline brings you quality products with a seamless shopping
            experience. Discover the best deals, latest collections, and fast
            delivery at your doorstep.
          </p>
        </div>

        <div className={styles.links}>
          <h4>COMPANY</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h4>GET IN TOUCH</h4>
          <p>+1-000-000-0000</p>
          <p>support@shoponline.com</p>
          <p>Instagram</p>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.bottom}>
        © 2026 shoponline.dev — Made with ❤️ by Manas
      </div>
    </footer>
  );
};

export default Footer;
