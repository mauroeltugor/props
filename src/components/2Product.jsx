const Product = ({ name, price, image, style }) => {
    return (
      <div>
        <img style={style} src={image} alt="" />
        <h1>{name}</h1>
        <h3>{price}</h3>
        <hr />
      </div>
    );
  };
  export default Product;
  