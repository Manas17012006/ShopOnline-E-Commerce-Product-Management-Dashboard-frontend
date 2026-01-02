import React, { useContext } from "react";
import styles from "../CSS/admin.module.css";
import { NavLink } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";

import OrdersPerStatus from "../charts/OrdersperStatus";
import TopSellingProducts from "../charts/TopSellingProducts";
import ProductsPerCategory from "../charts/ProductsPerCategory";

const Admin = () => {
  const { userData } = useContext(Appcontext);

  return (
    <div className={styles.bigdiv}>
      {/* Sidebar */}
      <div className={styles.first}>
        <NavLink
          to="/admin-panel/list"
          className={({ isActive }) =>
            isActive ? `${styles.list} ${styles.active}` : `${styles.list}`
          }
        >
          All items
        </NavLink>

        <NavLink
          to="/admin-panel/add"
          className={({ isActive }) =>
            isActive ? `${styles.list} ${styles.active}` : `${styles.list}`
          }
        >
          Add Items
        </NavLink>

        <NavLink
          to="/admin-panel/order"
          className={({ isActive }) =>
            isActive ? `${styles.list} ${styles.active}` : `${styles.list}`
          }
        >
          Orders
        </NavLink>

        <NavLink
          to="/admin-panel/recruit"
          className={({ isActive }) =>
            isActive ? `${styles.list} ${styles.active}` : `${styles.list}`
          }
        >
          Recruit Admins
        </NavLink>
      </div>

      {/* Main content */}
      <div className={styles.second}>

        {/* Charts */}
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <OrdersPerStatus />
          <TopSellingProducts />
          <ProductsPerCategory />
        </div>
      </div>
    </div>
  );
};

export default Admin;
