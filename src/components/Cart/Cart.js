import { useContext } from "react";
import Model from "../UI/Model";
import classes from "./Cart.module.css";
import CartContext from "../Store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtxt = useContext(CartContext);
  const TotalAmount = `$${cartCtxt.totalAmount.toFixed(2)}`;
  const validCart = cartCtxt.items.length > 0;

  const onremoveHandler = (id) => {
    console.log("Id is " + id);
    cartCtxt.removeItem(id);
  };

  const onAddHandler = (item) => {
    cartCtxt.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtxt.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={onAddHandler.bind(null, item)}
          onRemove={onremoveHandler.bind(null, item.id)}
        ></CartItem>
        // <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Model onhideCart={props.onhideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{TotalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onhideCart}>
          Close
        </button>
        {validCart && <button className={classes.button}>Order</button>}
      </div>
    </Model>
  );
};

export default Cart;
