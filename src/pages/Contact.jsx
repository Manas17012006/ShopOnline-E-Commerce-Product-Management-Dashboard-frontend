import React from "react";
import NewNav from "../components/NewNav";
import contactImg from "../assets/contactus.png";
import styles from "../CSS/contact.module.css"
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className={styles.big}>
      <NewNav />

      <div className={styles.heading}>CONTACT US</div>

      <div className={styles.container}>
        <div className={styles.imageBox}>
          <img src={contactImg} alt="contact" />
        </div>

        <div className={styles.infoBox}>
          <h3>Our Store</h3>
          <p>Green Valley Park, MG Road</p>
          <p>Andheri East, Mumbai, India</p>

          <h4>Business Hours</h4>
          <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
          <p>Saturday: 10:00 AM – 4:00 PM</p>
          <p>Sunday: Closed</p>

          <h4>Contact</h4>
          <p>📞 +91 9999990002020</p>
          <p>📧 ShopOnline@gmail.com</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
