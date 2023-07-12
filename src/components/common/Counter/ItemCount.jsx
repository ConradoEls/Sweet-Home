
import useCount from "../../hooks/useCount";

const ItemCount = ({ stock, initial=1, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);

  return (
    <>
      <div className="add-to-cart">
        <button onClick={decrement} className="secondary-button">-</button>
        <span className="counter">{count}</span>
        <button onClick={increment} className="secondary-button">+</button>
        <button onClick={() => onAdd(count)} className="primary-button add-to-cart-button">
          <img src="/assets/bt_add_to_cart.svg" alt="añadir al carrito" />
          Añadir al carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
