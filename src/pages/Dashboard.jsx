import React from "react";
import NewNav from "../components/NewNav";
import Navbar from "../components/Navbar";
import frontImg from "../assets/frontPage.png";
import apple from "../assets/apple.avif";
import samsung from "../assets/samsung.avif";
import sony from "../assets/sony.avif";
import oneplus from "../assets/oneplus.avif";
import styles from "../CSS/Dashboard.module.css"
import Footer from "../components/Footer";
const Dashboard = () => {
  return (
    <div className={styles.big}>
      <NewNav />
      <div className={styles.bigdiv}>
        <div className={styles.first}>
          <p className={styles.f1}><span className={styles.f11}></span> OUR BESTSELLERS</p>
          <p className={styles.f2}>LATEST ARRIVALS</p>
          <p className={styles.f3}>SHOP NOW <span className={styles.f33}></span></p>
        </div>
        <div className={styles.second}>
          <img src={frontImg} ></img>
        </div>
      </div>
      <div className={styles.f4}>NEXT UP TECH</div>
      <div className={styles.tech}>
          <div className={styles.item}><img src={apple}/></div>
          <div className={styles.item}><img src={samsung}/></div>
          <div className={styles.item}><img src={oneplus}/></div>
          <div className={styles.item}><img src={sony}/></div>
      </div>

      <Footer/>
    </div>
  );
};

export default Dashboard;
