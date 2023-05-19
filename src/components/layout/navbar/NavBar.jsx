import { Button, ButtonGroup } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <div style={{display: "flex"}}>
        <h1 style={{display: "none"}}>Sweet Home</h1>
        <img src="src\assets\white_logo_color_background.jpg" style={{width: "120px" , height: "120px"}}></img>
        <ul>
          <li>Quienes somos?</li>
          <li>Productos</li>
          <li>Categorias</li>
          <li>Arma tu pedido!</li>
          <li>Contacto</li>
          <li>Ubicación</li>
        </ul>
        
      </div>
    </>
  );
};

export default NavBar;
