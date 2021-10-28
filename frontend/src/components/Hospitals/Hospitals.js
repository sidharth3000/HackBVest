import React, { useState } from "react";
import styles from "./Hospitals.module.css";
import EachPage from "../../Ui/EachPage";
import axios from "axios";

const Hospitals = (props) => {
  return (
    <EachPage>
      <div className={styles.box}>
        <div className={styles.bar}>
          <p> Hospitals</p>
        </div>

        <div className={styles.block}>
          <div className={styles.head}>MEdicity</div>
          <div className={styles.flexblock}>
            <div>A+ 20 units</div>
            <div>A- 50 units</div>
            <div>B+ 0 units</div>
            <div>B-+ 25 units</div>
            <div>O+ 60 units</div>
            <div>O- 0 units</div>
            <div>AB+ 13 units</div>
            <div>AB- 100 units</div>
          </div>
          <div className={styles.head}>Contact Number: 123456789</div>
        </div>

        <div className={styles.block}>
          <div className={styles.head}>ARTIMIS</div>
          <div className={styles.flexblock}>
            <div>A+ 100 units</div>
            <div>A- 54 units</div>
            <div>B+ 2 units</div>
            <div>B- 25 units</div>
            <div>O+ 60 units</div>
            <div>O- 20 units</div>
            <div>AB+ 63 units</div>
            <div>AB- 10 units</div>
          </div>
          <div className={styles.head}>Contact Number: 9876543210</div>
        </div>

        <div className={styles.block}>
          <div className={styles.head}>AIIMs</div>
          <div className={styles.flexblock}>
            <div>A+ 20 units</div>
            <div>A- 50 units</div>
            <div>B+ 0 units</div>
            <div>B-+ 25 units</div>
            <div>O+ 60 units</div>
            <div>O- 0 units</div>
            <div>AB+ 13 units</div>
            <div>AB- 100 units</div>
          </div>
          <div className={styles.head}>Contact Number: 123456789</div>
        </div>
      </div>
    </EachPage>
  );
};

export default Hospitals;
