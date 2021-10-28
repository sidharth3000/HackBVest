import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import img from "../components/Image/dd3.png";
import Modal from "./Modal";
import Slide from "react-reveal/Slide";
import { useSelector, useDispatch } from "react-redux";
const Header = () => {
  const counter = useSelector((state) => state.counter);
  console.log(counter);
  const dispatch = useDispatch();
  const fun1 = () => {
    localStorage.clear();
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
                to="/hospital/home"
                className={styles.link}
                activeClassName={styles.active}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hospital/donate"
                className={styles.link}
                activeClassName={styles.active}
              >
                Donate
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hospital/new"
                className={styles.link}
                activeClassName={styles.active}
              >
                New Donor
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hospital/list"
                className={styles.link}
                activeClassName={styles.active}
                exact
              >
                List
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
                  to="/hospital/home"
                  activeClassName={styles.active2}
                  onClick={clickhandler}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/hospital/donate"
                  activeClassName={styles.active2}
                  onClick={clickhandler}
                >
                  Donate
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/hospital/new"
                  activeClassName={styles.active2}
                  onClick={clickhandler}
                >
                  New
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/hospital/list"
                  activeClassName={styles.active2}
                  onClick={clickhandler}
                >
                  List
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

export default Header;
