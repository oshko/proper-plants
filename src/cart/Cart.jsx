import CartItem from "./CartItem";
export default function Cart({ cartItem }) {
  console.log(cartItem);
  if (cartItem.length === 0) {
    return <p>Please select the plant</p>;
  }

  return (
    <>
      {cartItem.map((item) => (
        <article key={item.id}>
          <CartItem item={item} />
        </article>
      ))}
    </>
  );
}
