import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="cards-container">
      <div className="product-card">
        <img
          src="https://res.cloudinary.com/dtvlycezq/image/upload/v1686244696/Sweet%20Home/Productos/Tortas%20y%20Postres/BOMB%C3%93N_pkhf45.jpg"
          alt="product"
          className="product-img"
        />
        <div className="product-info">
          <div>
            <p>$6700</p>
            <p>BOMBÓN</p>
            <p>
              Torta de chocolate rellena de dulce de leche con chocolate y
              coñac.
            </p>
          </div>
          <figure>
            <img src="/public/assets/bt_add_to_cart.svg" alt="cart" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
