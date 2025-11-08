export default function PlantItem({ plant, preCart, setCart }) {
  function addCart() {
    const checkItem = preCart.find((cartItem) => cartItem.id === plant.id);
    if (checkItem) {
      return setCart(
        preCart.map((cartItem) => {
          if (cartItem.id === plant.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          } else return cartItem;
        })
      );
    } else {
      return setCart((preCart) => [...preCart, { ...plant, quantity: 1 }]);
    }
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
