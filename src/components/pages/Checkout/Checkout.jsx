import "./Checkout.css";

const Checkout = ({ handleSubmit, handleChange }) => {
  return (
    <div className="login">
      <div className="form-container">
        <h1 className="tittle">Mi pedido</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label className="label">Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="Sweet Home"
              className="input input-name"
              onChange={handleChange}
            />

            <label className="label">Email</label>
            <input
              type="text"
              name="email"
              placeholder="sweet@home.com"
              className="input input-email"
              onChange={handleChange}
            />

            <label className="label">Teléfono</label>
            <input
              type="text"
              name="telefono"
              placeholder="+54 9 4897213"
              className="input input-passw"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="primary-button create-button">
            Confirmar Pedido
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
