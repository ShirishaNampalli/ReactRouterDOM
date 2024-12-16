import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context/AuthContextProvider";
import styles from "./Navbar.module.css";

const links = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/cart",
    text: "Cart",
  },
  {
    path: "/users",
    text: "Users",
  },
];

const Navbar = () => {
  const { isAuth, login, logout } = useGlobalContext();
  console.log(styles);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {links.map((link) => {
        return (
          <NavLink
            to={link.path}
            key={link.path}
            className={({ isActive }) => {
              return isActive ? styles.activeStyle : styles.defaultStyle;
            }}
          >
            {link.text}
          </NavLink>
        );
      })}

      <p>user logged IN : {isAuth ? "Yes" : "No"}</p>
      {isAuth ? (
        <button onClick={logout}>logout</button>
      ) : (
        <button onClick={login}>login</button>
      )}
    </div>
  );
};

export default Navbar;
