/* eslint-disable react/prop-types */
import ItemCount from "../../common/Counter/ItemCount";
import "./ProductDetail.css";

const ProductDetailPresentacional = ({ productSelected }) => {
  
  const onAdd = ( cantidad ) => {
    let data = {
      ...productSelected,
      quantity: cantidad
    }
    console.log(data);
  }


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
      {productSelected.stock > 0 ? (
        <ItemCount stock={productSelected.stock} initial={1} onAdd={onAdd} />
      ) : <h3>No hay stock</h3>} 
    </div>
    
  );
};

export default ProductDetailPresentacional;
