import NavBar from "./components/layout/Header/NavBar/NavBar";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import ProductDetailContainer from "./components/pages/ProductDetail/ProductDetailContainer";

function App() {
  return (
    <>
      <NavBar />
      {/* <ItemListContainer /> */}
      <ProductDetailContainer />
    </>
  );
}

export default App;
