import CartItem from "./CartItem";
export default function Cart({ cartItems, addOneMore, removeOneItem }) {
  console.log(cartItems);
  if (cartItems.length === 0) {
    return <p>Please select the plant</p>;
  }

  return (
    <>
      {cartItems.map((item) => (
        <article key={item.id} className="cart-item">
          <CartItem
            item={item}
            addOneMore={addOneMore}
            removeOneItem={removeOneItem}
          />
        </article>
      ))}
    </>
  );
}
