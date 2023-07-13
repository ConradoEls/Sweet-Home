import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav className="container">
        <div className="navbar">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dtvlycezq/image/upload/v1684851983/Sweet%20Home/logo_transparent_background_wtqilz.png"
              alt="logo"
              className="logo"
            />
          </Link>

          <ul>
            <Link to="/category/tortas"style={{textDecoration: "none"}}>
              <li>Tortas & Postres</li>
            </Link>
            <Link to="/category/tartas"style={{textDecoration: "none"}}>
              <li>Tartas</li>
            </Link>
            <Link to="/category/delicatessen"style={{textDecoration: "none"}}>
              <li>Delicatessen</li>
            </Link>
            <Link to="/category/individuales"style={{textDecoration: "none"}}>
              <li>Individuales</li>
            </Link>
            <Link to="/category/especiales"style={{textDecoration: "none"}}>
              <li>Especiales</li>
            </Link>
            <Link to="/"style={{textDecoration: "none"}}>
              <li>Ver Todos</li>
            </Link>
          </ul>
        </div>
        <Link to="/cartDetail"style={{textDecoration: "none"}}>
        <CartWidget />
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
