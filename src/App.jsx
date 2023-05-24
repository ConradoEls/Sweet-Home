import NavBar from "./components/layout/Header/NavBar/NavBar";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer
        greeting={'Bienvenidos a "SWEET HOME" mi e-commerce de pastelería'}
      />
    </>
  );
}

export default App;
