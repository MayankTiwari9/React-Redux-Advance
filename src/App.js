import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const cart = useSelector((state) => state.cartitem);
  const notification = useSelector((state) => state.cart.notification);


  useEffect(() => {
    dispatch(fetchCartData());
  },[dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if(cart.changed){
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isCartOpen && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
