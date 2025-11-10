export default function CartItem({ item, addOneMore, removeOneItem }) {
  return (
    <div className="cart-item-content">
      <span id="plant-icon">{item.image}</span>
      <p>{item.name}</p>
      <div className="button-row">
        <button onClick={() => removeOneItem(item)}>-</button>
        <p>Quantity: {item.quantity}</p>
        <button onClick={() => addOneMore(item)}>+</button>
      </div>
    </div>
  );
}
