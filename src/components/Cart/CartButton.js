import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { cartAction } from '../../store/cart';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartToggleHandler = () => {
    dispatch(cartAction.showCart());
  }

  return (
    <button onClick={cartToggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
