import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <nav className="container">
        <IconButton
          onClick={toggleDrawer("left", true)}
          edge="start"
          color="#FFCAAF"
          aria-label="menu"
          sx={{ mr: 2 }}
          className="burguer"
        >
          <MenuIcon />
        </IconButton>
        <div className="navbar">
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            <ul>
              <Link to="/category/tortas" style={{ textDecoration: "none" }}>
                <li>Tortas & Postres</li>
              </Link>
              <Link to="/category/tartas" style={{ textDecoration: "none" }}>
                <li>Tartas</li>
              </Link>
              <Link
                to="/category/delicatessen"
                style={{ textDecoration: "none" }}
              >
                <li>Delicatessen</li>
              </Link>
              <Link
                to="/category/individuales"
                style={{ textDecoration: "none" }}
              >
                <li>Individuales</li>
              </Link>
              <Link
                to="/category/especiales"
                style={{ textDecoration: "none" }}
              >
                <li>Especiales</li>
              </Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                <li>Ver Todos</li>
              </Link>
            </ul>
          </Drawer>

          <Link to="/">
            <img
              src="https://res.cloudinary.com/dtvlycezq/image/upload/v1684851983/Sweet%20Home/logo_transparent_background_wtqilz.png"
              alt="logo"
              className="logo"
            />
          </Link>

          <ul>
            <Link to="/category/tortas" style={{ textDecoration: "none" }}>
              <li>Tortas & Postres</li>
            </Link>
            <Link to="/category/tartas" style={{ textDecoration: "none" }}>
              <li>Tartas</li>
            </Link>
            <Link
              to="/category/delicatessen"
              style={{ textDecoration: "none" }}
            >
              <li>Delicatessen</li>
            </Link>
            <Link
              to="/category/individuales"
              style={{ textDecoration: "none" }}
            >
              <li>Individuales</li>
            </Link>
            <Link to="/category/especiales" style={{ textDecoration: "none" }}>
              <li>Especiales</li>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>Ver Todos</li>
            </Link>
          </ul>
        </div>
        <Link to="/cartDetail" style={{ textDecoration: "none" }}>
          <CartWidget />
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
