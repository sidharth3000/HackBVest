import React, { useState, useEffect } from "react";
import styles from "./Donors.module.css";
import Donor from "../../ethereum/donor";
import Manager from "../../ethereum/manager";
import web3 from "../../ethereum/web3";
import DonorCard from "../Cards/Donor/Donor";
import axios from "axios";
import EachPage from "../../Ui/EachPage";
import Spinner from "../../Ui/Spinner";
const Donors = (props) => {
  // const [name, setName] = useState([]);
  // const [city, setCity] = useState([]);
  // const [state, setState] = useState([]);
  // const [mobiles, setMobiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [donors, setDonors] = useState([]);

  useEffect(async () => {
    setLoading(true);

    const accounts = await web3.eth.getAccounts();

    let aadhaars = [];

    await axios
      .get("https://dodonate-reboot.herokuapp.com/hospital/getAllPatientData")
      .then(async (res) => {
        console.log(res.data);

        res.data.data.map((donor) => {
          aadhaars.push(donor.aadharNo);
        });

        console.log(aadhaars);

        let addresses = [];

        for (let i = 0; i < aadhaars.length; i++) {
          let x = await Manager.methods.getDonor(aadhaars[i]).call({
            from: accounts[0],
          });

          addresses.push(x);
        }

        console.log(addresses);

        let names = [];
        let cities = [];
        let states = [];
        let numbers = [];

        console.log(aadhaars.length);

        addresses.splice(2, 1);

        for (let i = 0; i < addresses.length; i++) {
          console.log(addresses[i]);

          let name = await Donor(addresses[i])
            .methods.name()
            .call();

          let city = await Donor(addresses[i])
            .methods.city()
            .call();

          let state = await Donor(addresses[i])
            .methods.state()
            .call();

          let number = await Donor(addresses[i])
            .methods.mobile()
            .call();

          console.log(number);

          names.push(name);
          cities.push(city);
          states.push(state);
          numbers.push(number);
        }

        let temp = [];

        for (let i = 0; i < addresses.length; i++) {
          let obj = {
            name: names[i],
            city: cities[i],
            state: states[i],
            number: numbers[i],
          };

          temp.push(obj);
        }

        setDonors(temp);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);

        });

    }, []);

    
    let donorsArray = (
        <div>
          {donors.map((d) => (
            <DonorCard
              name={d.name}
              city={d.city}
              state={d.state}
              number={d.number}
            />
          ))}
        </div>
    );

  const s1 = props.aadhar;
  const s = props.date;
  return (
    <EachPage>
      {loading ? <Spinner /> : null}
      <div className={styles.box}>
        <div className={styles.bar}>
          <p> DONORS</p>
        </div>
        {donorsArray}
      </div>
    </EachPage>
  );
};

export default Donors;
