import "./ProductCard.css";

const ProductCard = ({element}) => {
  return (
      <div className="product-card">
        <img src={element.img} alt="product" className="product-img" />
        <div className="product-info">
          <div>
            <p>${element.price}</p>
            <p>{element.title}</p>
          </div>
          <figure>
            <img src="/assets/bt_add_to_cart.svg" alt="cart" />
          </figure>
        </div>
      </div>
  );
};

export default ProductCard;
