/* eslint-disable react/prop-types */
import "./ProductDetail.css";

const ProductDetailPresentacional = ({ productSelected }) => {
  return (
    <div className="product-detail">
      <div className="product-detail-close">
        <img src="/assets/icon_close.png" alt="close" />
      </div>
      <img src={productSelected.img} alt="product" className="product-img" />
      <div className="product-info">
        <p>${productSelected.price}</p>
        <p>{productSelected.title}</p>
        <p>{productSelected.description}</p>
        <button className="primary-button add-to-cart-button">
          <img src="/assets/bt_add_to_cart.svg" alt="añadir al carrito" />
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPresentacional;
