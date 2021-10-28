import React from "react";
import { Link } from "react-router-dom";
import styles from "./Search.module.css";
import EachPage from "../../Ui/EachPage";
const Search = () => {
  return (
    <EachPage>
      <div className={styles.flex}>
        <div className={styles.box}>
          <p>
            Got an EMERGENCY, Get the nearest donors in your city with one
            finger touch and contact them instatntly.
          </p>
          <Link to="/donors" className={styles.an}>
            Donors
          </Link>
        </div>
        <div className={styles.box}>
          <p>
            Want blood URGENTLY, Search the hospitals near your house and know
            the blood quantity present there.
          </p>
          <Link to="/hospital_list" className={styles.an}>
            Hospitals
          </Link>
        </div>
      </div>
    </EachPage>
  );
};

export default Search;
