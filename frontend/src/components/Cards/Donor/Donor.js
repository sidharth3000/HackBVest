import React, { useState } from "react";
import axios from "axios";
import styles from "./Donor.module.css";
import img from "../../Image/user.png";

const Donor = (props) => {
  const sendMssg = () => {
    console.log("...");

    let data = {
      phoneNo: "7737373171",
    };

    axios
      .post("https://dodonate-reboot.herokuapp.com/user/getRequestSMS", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.block}>
      <img src={img} alt="user" className={styles.user} />
      <div className={styles.inner}>
        <div className={styles.one}>
          <p>Name</p>
          <div className={styles.aadhar}>{props.name}</div>
        </div>
        <div className={styles.one}>
          <p>City</p>
          <div className={styles.group}> {props.city}</div>
        </div>

        <div className={styles.one}>
          <p> Date</p>
          <div className={styles.date}>{props.state}</div>
        </div>

        <div className={styles.one}>
          <p>Number</p>
          <div> {props.number} units</div>
        </div>

        <button onClick={sendMssg} className={styles.an}>
          REQUEST
        </button>
      </div>
    </div>
  );
};

export default Donor;
