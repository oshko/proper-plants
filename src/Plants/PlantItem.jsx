export default function PlantItem({ plant, preCart, setCart }) {
  function addCart() {
    let quantity = 1;
    if (preCart.some((item) => item === plant)) {
      quantity += 1;
      return console.log(preCart);
    } else {
      setCart((preCart) => [...preCart, { ...plant, quantity: quantity }]);
    }

    return preCart;
  }
  return (
    <>
      <section>
        <span>{plant.image}</span>
        <h2>{plant.name}</h2>
        <button onClick={addCart}>Add {plant.name} to the cart</button>
      </section>
    </>
  );
}
