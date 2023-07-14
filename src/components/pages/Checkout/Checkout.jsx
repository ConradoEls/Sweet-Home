import { Button, TextField } from "@mui/material";
import "./Checkout.css";


const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div className="login">
      <div className="form-container">
        <h1 className="tittle">Mi pedido</h1>

        <form onSubmit={handleSubmit} className="form">
        <div>
        <TextField
          label="Nombre"
          className="input input-name"
          variant="outlined"
          name="nombre"
          onChange={handleChange}
          helperText={errors.nombre}
          error={errors.nombre ? true : false}
        />
        <TextField
          label="Email"
          className="input input-email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          helperText={errors.email}
          error={errors.email ? true : false}
        />
        <TextField
          label="Teléfono"
          className="input input-passw"
          variant="outlined"
          name="telefono"
          onChange={handleChange}
          helperText={errors.telefono}
          error={errors.telefono ? true : false}
        />
        </div>
        <Button variant="outlined" type="submit" className="primary-button create-button">
          Comprar
        </Button>
      </form>
       
      </div>
    </div>
  );
};

export default Checkout;
