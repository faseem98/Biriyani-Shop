import React, { useState, useContext } from 'react';
import Modal from '../UI/Modal';
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";
import CartItem from './CartItem';
import OrderDelivered from './OrderDelivered';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const [showOrder, setShowOrder] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    cartCtx.clearall();
    setShowOrder(true);
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
    {!showOrder ? (
      <>
        {cartItems}
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          {hasItems && (
            <button className={styles.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      </>
    ) : (
      <OrderDelivered onClose={props.onClose} />
    )}
    </Modal>
  )
}

export default Cart
