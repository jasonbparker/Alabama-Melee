import React from "react";
import Nav from "./Nav";
import styles from "./MyStyles.module.css";

export default function Home() {
  return (
    <div>
      <div>ALABAMA MELEE</div>
      <div className={styles.tinyBoi}>Al1</div>
      <Nav />
    </div>
  );
}
