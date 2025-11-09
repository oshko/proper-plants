export default function CartItem({ item, addOneMore, removeOneItem }) {
  return (
    <>
      <span>{item.image}</span>
      <p>{item.name}</p>
      <button onClick={() => addOneMore(item)}>+</button>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => removeOneItem(item)}>-</button>
    </>
  );
}
