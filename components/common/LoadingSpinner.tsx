import React from "react";
import styles from "./LoadingSpinner.module.css";

const LoadingSpinner: React.FC = () => {
  return (
    <div className={styles.container__spinner}>
      <div className={styles.loading__spinner}></div>
    </div>
  );
};

export default LoadingSpinner;
