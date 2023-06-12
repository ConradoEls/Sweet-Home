/* eslint-disable react/prop-types */
import ItemCount from "../../common/Counter/ItemCount";
import "./ProductDetail.css";

const ProductDetailPresentacional = ({ productSelected, onAdd }) => {
  return (
    <div className="product-container">
      <div className="product-detail">
        <div className="product-detail-close">
          <img src="/assets/icon_close.png" alt="close" />
        </div>
        <img src={productSelected.img} alt="product" className="product-img" />
        <div className="product-info">
          <p>{productSelected.title}</p>
          <p>${productSelected.price}</p>
          <p>{productSelected.description}</p>
        </div>
        {productSelected.stock > 0 ? (
          <ItemCount stock={productSelected.stock} initial={1} onAdd={onAdd} />
        ) : (
          <h3>No hay stock</h3>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPresentacional;
