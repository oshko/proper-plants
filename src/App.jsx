import { useState } from "react";
import data from "./data.js";
import PlantList from "./Plants/PlantList.jsx";
import Cart from "./cart/Cart.jsx";
export default function App() {
  const [plantData] = useState(data);
  const [cart, setCart] = useState([]);

  function addOneMore(item) {
    return setCart(
      cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  }

  function removeOneItem(item) {
    const checkItem = cart.find((cartItem) => cartItem.id === item.id);
    if (checkItem && checkItem.quantity > 1) {
      return setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    } else {
      return setCart((cart) =>
        cart.filter((cartItem) => cartItem.id !== item.id)
      );
    }
  }

  return (
    <>
      <PlantList plantData={plantData} currCart={cart} setCart={setCart} />
      <section>
        <h2>Cart</h2>
        <Cart
          cartItems={cart}
          addOneMore={addOneMore}
          removeOneItem={removeOneItem}
        />
      </section>
    </>
  );
}
