export default function CartItem({ item }) {
  return (
    <>
      <span>{item.image}</span>
      <p>{item.name}</p>
      <button>+</button>
      <p>Quantity: {item.quantity}</p>
      <button>-</button>
    </>
  );
}
