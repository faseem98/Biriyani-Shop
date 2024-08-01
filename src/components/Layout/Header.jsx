import React from "react";
import mainheaderImage from "../../assets/headerBanner.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Faseem's Biryani Shop</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={styles["main-image"]}>
        <img src={mainheaderImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;