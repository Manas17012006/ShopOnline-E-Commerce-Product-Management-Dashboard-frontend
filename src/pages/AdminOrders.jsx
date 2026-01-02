import React from 'react'
import NewNav from '../components/NewNav'
import styles from "../CSS/adminList.module.css";
import { NavLink } from 'react-router-dom';
import Showorder from '../components2/Showorder';
const AdminOrders = () => {
 return (
    <div>
      <NewNav />

      <div className={styles.bigdiv}>
        {/* LEFT SIDEBAR */}
        <div className={styles.first}>
          <NavLink
            to="/admin-panel/list"
            className={({ isActive }) =>
              isActive ? `${styles.list} ${styles.active}` : styles.list
            }
          >
            All items
          </NavLink>

          <NavLink
            to="/admin-panel/add"
            className={({ isActive }) =>
              isActive ? `${styles.list} ${styles.active}` : styles.list
            }
          >
            Add Items
          </NavLink>

          <NavLink
            to="/admin-panel/order"
            className={({ isActive }) =>
              isActive ? `${styles.list} ${styles.active}` : styles.list
            }
          >
            Orders
          </NavLink>

          <NavLink
            to="/admin-panel/recruit"
            className={({ isActive }) =>
              isActive ? `${styles.list} ${styles.active}` : styles.list
            }
          >
            Recruit Admins
          </NavLink>
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.second}>
            
            <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "1.5rem", 
              margin: "1rem 2rem",
              borderBottom:"2px solid gray",
              padding:"10px"
            }}
          >
            ALL ORDERS
            
          </div>
            <Showorder/>
        </div>
      </div>
    </div>
  );
}

export default AdminOrders