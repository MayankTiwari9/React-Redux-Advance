import { cartAction } from "./cart";
import { cartItemAction } from "./cartItems";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://advance-redux-react-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartItemAction.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        cartAction.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = async (cart) => {
  return async (dispatch) => {
    dispatch(
      cartAction.showNotification({
        status: "pending...",
        title: "Sending...",
        message: "sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        `https://advance-redux-react-default-rtdb.firebaseio.com/cart.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending Cart Data Failed");
      }
    };

    try {
      await sendRequest();

      dispatch(
        cartAction.showNotification({
          status: "success",
          title: "success",
          message: "cart data sent successfully",
        })
      );
    } catch (error) {
      dispatch(
        cartAction.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
