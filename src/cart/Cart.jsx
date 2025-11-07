export default function Cart({ cartItem }) {
  console.log(cartItem);
  if (cartItem.length === 0) {
    return <p>Please select the plant</p>;
  }
  return (
    <>
      <span>{cartItem.image}</span>
      <p>{cartItem.name}</p>
      <button>+</button>
      <p>count:</p>
      <button>-</button>
    </>
  );
}
