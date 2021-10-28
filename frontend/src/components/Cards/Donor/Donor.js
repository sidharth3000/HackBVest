import React, { useState } from "react";
import axios from 'axios'

const Donor = (props) => {

  const sendMssg = () => {
    console.log("...");

    let data = {
      phoneNo: "7737373171"
    }

    axios
    .post("https://dodonate-reboot.herokuapp.com/user/getRequestSMS", data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  }

  
  return (
    <div >
        {props.name}
        {props.city}
        {props.state}
        {props.number}

        <button onClick={sendMssg}>REQUEST</button>
    </div>
  );
};

export default Donor;
