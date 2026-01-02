import React from 'react'
import styles from "./loading.module.css";

const Loading = ({status}) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.loader}></div>
      <p className={styles.text}>{status},This may take some time...</p>
    </div>
  );
};

export default Loading;
