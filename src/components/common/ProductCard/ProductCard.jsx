
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ element }) => {
  return (
    <Link to={`/productDetail/${element.id}`}>
    <div className="product-card">
      <img src={element.img} alt="product" className="product-img" />
      <div className="product-infor">
        <div>
          <p>${element.price}</p>
          <p>{element.title}</p>
        </div>
        <Link to={`/productDetail/${element.id}`}>
          <figure>
            <img src="/assets/bt_add_to_cart.svg" alt="cart" />
          </figure>
        </Link>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;
