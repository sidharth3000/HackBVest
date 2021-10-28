import React, { useState } from "react";
import axios from "axios";
import styles from "./Donor.module.css";
import img from "../../Image/user.png";
import Spinner from "../../../Ui/Spinner";

const Donor = (props) => {
<<<<<<< HEAD
=======

  const [loading, setLoading] = useState(false);

>>>>>>> e4a85f3d113f1629b5caa708d300c289f4974b87
  const sendMssg = () => {

    setLoading(true);

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
      {loading ? <Spinner/> : null}
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
