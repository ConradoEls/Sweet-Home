/* eslint-disable react/prop-types */
const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <div>
        <h1 style={{textAlign: 'center', color: 'var(--sweet-home)'}}>{greeting}</h1>
        <img
          src="https://res.cloudinary.com/dtvlycezq/image/upload/v1684881641/Sweet%20Home/logo_size_invert_y9knht.jpg"
          alt="logo banner"
        style={{width: '100%'}}/>
      </div>
    </>
  );
};

export default ItemListContainer;
