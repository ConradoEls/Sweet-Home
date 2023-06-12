
import ProductCard from "../../common/ProductCard/ProductCard"
import "./ItemList.css"

const ItemListPresentacional = ({ items }) => {
  return (
    <div className="cards-container">
        {items.map((element) => {
        return <ProductCard key={element.id} element={element} />
      })}
    </div>
  )
}

export default ItemListPresentacional