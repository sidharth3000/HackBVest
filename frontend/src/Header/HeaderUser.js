import React, { useState, useEffect } from "react";
import { NavLink, useLocation, Redirect, useHistory } from "react-router-dom";

import styles from "./Header.module.css";
import img from "../components/Image/dd3.png";

import Modaluser from "./Modaluser";
import Slide from "react-reveal/Slide";
import { useSelector, useDispatch } from "react-redux";
const HeaderUser = () => {
  const history = useHistory();

  const counter = useSelector((state) => state.counter);
  console.log(counter);
  const dispatch = useDispatch();
  const fun1 = () => {
    dispatch({ type: "logout" });
  };

  const [open, setOpen] = useState(false);
  const clickhandler = () => {
    setOpen(!open);
  };
  let header = false;
  const location = useLocation();

  if (location.pathname !== "/hospital/home") header = true;

  const signOutHandler = () => {
    window.location.reload();
    history.push("/");

    localStorage.clear();
  };
  const [small, setSmall] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);

  return (
    <>
      <React.Fragment>
        <div className={small ? styles.header : styles.header2}>
          <div className={styles.name}>
            <img src={img} alt="Donor" className={styles.img} />
          </div>
          <ul>
            <li>
              <NavLink
                to="/home"
                className={styles.link}
                activeClassName={styles.active}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/payment"
                className={styles.link}
                activeClassName={styles.active}
              >
                Payment
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/hospitals"
                className={styles.link}
                activeClassName={styles.active}
              >
                Hospitals
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/help"
                className={styles.link}
                activeClassName={styles.active}
              >
                Help
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/"
                className={styles.link}
                activeClassName={styles.active}
                exact
                onClick={signOutHandler}
              >
                Signout
              </NavLink>
            </li>
          </ul>
          {/* <div className={styles.role}> {role}</div> */}

          <div className={styles.burger} onClick={clickhandler}>
            <div className={open ? styles.lines4 : styles.lines1}></div>
            <div className={open ? styles.lines5 : styles.lines2}></div>
            <div className={open ? styles.lines6 : styles.lines3}></div>
          </div>
        </div>

        <div className={open ? styles.burgermenuo : styles.burgermenuc}>
          <div className={open ? styles.menuo : styles.menuc}>
            <ul className={styles.flex2}>
              <li>
                <NavLink
                  to="/home"
                  activeClassName={styles.active2}
                  onClick={clickhandler}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/payment"
                  activeClassName={styles.active2}
                  onClick={clickhandler}
                >
                  Payment
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/hospitals"
                  activeClassName={styles.active2}
                  onClick={clickhandler}
                >
                  Hospitals
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/help"
                  activeClassName={styles.active2}
                  onClick={clickhandler}
                >
                  Help
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/"
                  activeClassName={styles.active2}
                  exact
                  onClick={signOutHandler}
                >
                  Signout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    </>
  );
};

export default HeaderUser;
