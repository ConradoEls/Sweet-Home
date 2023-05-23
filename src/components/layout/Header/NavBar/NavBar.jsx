import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav className="container">
        <div className="navbar">
          <img
            src="https://res.cloudinary.com/dtvlycezq/image/upload/v1684851983/Sweet%20Home/logo_white_background_juwvek.jpg"
            alt="logo"
            className="logo"
          />
          <ul>
            <li>
              <a href="">Productos</a>
            </li>
            <li>
              <a href="">Eventos</a>
            </li>
            <li>
              <a href="">Galería</a>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
            <li>
              <a href="">Iniciar pedido</a>
            </li>
            <li>
              <a href="">Mi cuenta</a>
            </li>
          </ul>
        </div>
        <CartWidget />
      </nav>
    </>
  );
};

export default NavBar;
