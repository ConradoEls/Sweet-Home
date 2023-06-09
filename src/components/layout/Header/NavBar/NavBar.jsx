import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav className="container">
        <div className="navbar">
          <img
            src="https://res.cloudinary.com/dtvlycezq/image/upload/v1684851983/Sweet%20Home/logo_transparent_background_wtqilz.png"
            alt="logo"
            className="logo"
          />
          <ul>
            <li>
              <a href="">Tortas & Postres</a>
            </li>
            <li>
              <a href="">Tartas</a>
            </li>
            <li>
              <a href="">Delicatessen</a>
            </li>
            <li>
              <a href="">Individuales</a>
            </li>
            <li>
              <a href="">Especiales</a>
            </li>
            <li>
              <a href="">Ver Todos</a>
            </li>
          </ul>
        </div>
        <CartWidget />
      </nav>
    </>
  );
};

export default NavBar;
