import { Button, TextField } from "@mui/material";
import "./Checkout.css";

const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div className="checkout">
      <div className="form-container">
        <h1 className="tittle">Datos para el pedido</h1>
        <form onSubmit={handleSubmit} className="form">
            <TextField
              label="Nombre"
              className="input"
              variant="outlined"
              name="nombre"
              onChange={handleChange}
              helperText={errors.nombre}
              error={errors.nombre ? true : false}
            />
            <TextField
              label="Email"
              className="input"
              variant="outlined"
              name="email"
              onChange={handleChange}
              helperText={errors.email}
              error={errors.email ? true : false}
            />
            <TextField
              label="Teléfono"
              className="input"
              variant="outlined"
              name="telefono"
              onChange={handleChange}
              helperText={errors.telefono}
              error={errors.telefono ? true : false}
            />
          <Button
            color="inherit"
            variant="outlined"
            type="submit"
            className="primary-button"
          >
            Comprar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
