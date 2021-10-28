import React, { useState, useEffect } from "react";
import styles from "./Donors.module.css";
import axios from 'axios';

const Donors = (props) => {

    useEffect(async () => {

        // setLoading(true);
    
        // let url = ;
        // console.log(url);
    
         axios.post("https://dodonate-reboot.herokuapp.com/hospital/getAllPatientData")
        .then((res) => {
        console.log(res);
        // dispatch({ type: "loginhos" });
        // setLoading(false);
        
        })
        .catch((err) => {
        console.log(err.message);
        // setLoading(false);
        });
      }, []);



  const s1 = props.aadhar;
  const s = props.date;
  return (
    <div className={styles.box}>
        DONORS
    </div>
  );
};

export default Donors;
