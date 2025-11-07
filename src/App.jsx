import { useState } from "react";
import data from "./data.js";
import PlantList from "./Plants/PlantList.jsx";
import Cart from "./cart/Cart.jsx";
export default function App() {
  const [plantData] = useState(data);
  const [cart, setCart] = useState([]);

  return (
    <>
      <PlantList plantData={plantData} currCart={cart} setCart={setCart} />
      <section>
        <h2>Cart</h2>
        <Cart cartItem={cart} />
      </section>
    </>
  );
}
