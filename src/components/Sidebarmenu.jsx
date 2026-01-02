import React from "react";
import styles from "./sidebarmenu.module.css";
import { NavLink, useNavigate } from "react-router";
const Sidebarmenu = ({ismenu,setMenu}) => {
  return (
    <div className={ismenu ? styles.bigdiv : styles.nodisplay} >
      <div onClick={()=>setMenu(false)}className={styles.back}>
        <span className={styles.span}>{"<"}</span> Back
      </div>

      <NavLink
        onClick={()=>setMenu(false)} to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? `${styles.collection} ${styles.active}`
            : `${styles.collection}`
        }
      >
        HOME
      </NavLink>
      <NavLink
        onClick={()=>setMenu(false)} to="/collection"
        className={({ isActive }) =>
          isActive
            ? `${styles.collection} ${styles.active}`
            : `${styles.collection}`
        }
      >
        COLLECTION
      </NavLink>
      <NavLink
        onClick={()=>setMenu(false)} to="/about"
        className={({ isActive }) =>
          isActive
            ? `${styles.collection} ${styles.active}`
            : `${styles.collection}`
        }
      >
        ABOUT
      </NavLink>
      <NavLink
        onClick={()=>setMenu(false)} to="/contact"
        className={({ isActive }) =>
          isActive
            ? `${styles.collection} ${styles.active}`
            : `${styles.collection}`
        }
      >
        CONTACT
      </NavLink>

      <NavLink
        onClick={()=>setMenu(false)} to="/admin-panel"
        className={({ isActive }) =>
          isActive
            ? `${styles.collection} ${styles.active}`
            : `${styles.collection}`
        }
      >
        ADMIN PANEL
      </NavLink>
    </div>
  );
};

export default Sidebarmenu;
