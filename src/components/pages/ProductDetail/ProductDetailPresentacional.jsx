import { useNavigate } from "react-router-dom";
import ItemCount from "../../common/Counter/ItemCount";
import "./ProductDetail.css";

const ProductDetailPresentacional = ({ productSelected, onAdd, cant }) => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <div className="product-container">
      <div className="product-detail">
        <div onClick={back} className="product-detail-close">
          <img src="/assets/icon_close.png" alt="close" />
        </div>
        <img src={productSelected.img} alt="product" className="product-img" />
        <div className="product-info">
          <p>{productSelected.title}</p>
          <p>${productSelected.price}</p>
          <p>{productSelected.description}</p>
        </div>
        {productSelected.stock > 0 ? (
          <ItemCount stock={productSelected.stock} initial={cant} onAdd={onAdd} />
        ) : (
          <h3>No hay stock</h3>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPresentacional;
