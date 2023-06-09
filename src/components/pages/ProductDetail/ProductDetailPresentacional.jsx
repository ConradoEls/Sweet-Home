import "./ProductDetail.css";

const ProductDetailPresentacional = () => {

  return (
    <div className="product-detail">
        <div className="product-detail-close">
            <img src="/assets/icon_close.png" alt="close"/> 
        </div>
        <img src="" alt="product" className="product-img"/>
        <div className="product-info">
            <p>$</p>
            <p></p>
            <p></p>
            <button className="primary-button add-to-cart-button">
                <img src="/assets/bt_add_to_cart.svg" alt="añadir al carrito"/>Añadir al carrito
            </button>
        </div>
    </div>
  )
}

export default ProductDetailPresentacional