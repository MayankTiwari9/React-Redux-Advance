import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartItemAction } from "../../store/cartItems";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    // and then send Http request
    // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })

    dispatch(
      cartItemAction.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
