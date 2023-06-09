import "./ProductCard.css"



const ProductCard = () => {
  return (
    <div className="cards-container">
    <div className="product-card">
            <img src="https://cdn.pixabay.com/photo/2015/05/29/19/18/bicycle-789648_1280.jpg" alt="product" className="product-img"/>
            <div className="product-info">
                <div>
                    <p>Price</p>
                    <p>Name</p>
                    <p>Description</p>
                </div>
                <figure>
                <img src="/public/assets/bt_add_to_cart.svg" alt="cart" />
                </figure>
            </div>
        </div>
        </div>
  )
}

export default ProductCard