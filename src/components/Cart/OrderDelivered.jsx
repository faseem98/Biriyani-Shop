import React from 'react'
import styles from "./Cart.module.css";

const OrderDelivered = (props) => {
  return (
    <>
      <section>
        <h2>Thank you so much for your order!</h2>
        <p>We really appreciate it. </p>
        <p>
          Enjoy <b>10%</b> off your next purchase with this coupon code: <b>THANKYOU10.</b>
        </p>
      </section>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );
};

export default OrderDelivered;
