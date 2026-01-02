import React from "react";
import NewNav from "../components/NewNav";
import logo from "../assets/onlineshopping.jpg";
import styles from "../CSS/about.module.css";
import Footer from "../components/Footer";
const About = () => {
  return (
    <div className={styles.big}>
      <NewNav />
      <div className={styles.heading}>About Us</div>
      <div className={styles.container}>
        <div>
          <img src={logo} width="300" height="300"></img>
        </div>
        <div className={styles.text}>
          ShopOnline is your trusted destination for quality products and a
          seamless online shopping experience. We are committed to bringing you
          a carefully curated selection of items that combine style,
          reliability, and value.
          <br />
          <br/>
          With a focus on customer satisfaction, secure payments, and fast
          delivery, ShopOnline aims to make shopping simple, enjoyable, and
          accessible for everyone. Our mission is to connect customers with
          products they love while maintaining transparency, innovation, and
          excellent service at every step.
        </div>
      </div>
      <div className={styles.heading1}>Why choose Us?</div>
      <div className={styles.box}>
        <div className={styles.smallbox}>
          <p className={styles.h1}>Quality Assurance:</p>
          <p>
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className={styles.smallbox}>
          <p className={styles.h1}>Exceptional Customer Service:</p>
          <p>
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
        <div className={styles.smallbox}>
          <p className={styles.h1}>Convenience:</p>
          <p>
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
