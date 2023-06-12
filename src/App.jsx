
import Layout from "./components/layout/Layout";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import ProductDetailContainer from "./components/pages/ProductDetail/ProductDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryName" element={<ItemListContainer />} />
          <Route path="/productDetail/:id" element={<ProductDetailContainer />} />
        </Route>

        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
