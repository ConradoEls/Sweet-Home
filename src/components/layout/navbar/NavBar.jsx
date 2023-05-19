import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Sweet Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Quienes somos?</Nav.Link>
              <Nav.Link href="#action2">Productos</Nav.Link>
              <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Postres</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Eventos</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Pedidos</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Reservas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Realiza tu pedido!</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Contacto</Nav.Link>
              
              <Nav.Link href="#">Arma tu pedido!</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Escribe aquí..."
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div style={{display: "flex"}}>
        <h1 style={{display: "none"}}>Sweet Home</h1>
        <img src="src\assets\Logos\white_logo_color_background.jpg" style={{width: "120px" , height: "120px"}}></img>
        <ul>
          <li>Quienes somos?</li>
          <li>Productos</li>
          <li>Categorias</li>
          <li>Arma tu pedido!</li>
          <li>Contacto</li>
          <li>Ubicación</li>
        </ul>
        
      </div> */}
    </>
  );
};

export default NavBar;
