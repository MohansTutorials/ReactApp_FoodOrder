import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../Store/cart-context";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartctxt = useContext(CartContext);

  const onAddToCartHandler = (amount) => {
    cartctxt.addItem({
      id: props.id,
      amount: amount,
      price: props.price,
      name: props.name,
    });
  };

  return (
    <li>
      <div className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>

        <div>
          <MealItemForm
            id={props.id}
            onAddToCart={onAddToCartHandler}
          ></MealItemForm>
        </div>
      </div>
    </li>
  );
};
export default MealItem;
