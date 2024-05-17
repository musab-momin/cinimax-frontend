import React from "react";
import cx from "classnames";
import classes from "./navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className={classes.header}>
      <nav className="container flex-bx align-center justify-between">
        <h2 className={classes.logo}>Cinimax</h2>
        <ul className="flex-bx gap2">
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
          <li>
            <Link href={"/signup"} className={classes.startedBtn}>
              Get Started
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
