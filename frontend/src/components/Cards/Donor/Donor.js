import React, { useState } from "react";


const Donor = (props) => {
  return (
    <div >
        {props.name}
        {props.city}
        {props.state}
        {props.number}

        <button>REQUEST</button>
    </div>
  );
};

export default Donor;
