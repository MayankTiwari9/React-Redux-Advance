import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartAction } from '../../store/cart';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartQuantity = useSelector((state) => state.cartitem.totalQuantity)

  const cartToggleHandler = () => {
    dispatch(cartAction.showCart());
  }

  return (
    <button onClick={cartToggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
