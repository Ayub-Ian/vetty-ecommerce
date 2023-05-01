import './product-card.css'

const ProductCard = ({ image, name, amount }) => {
    return (
      <div className="card">
        <img src={image} alt={name} />
        <div className="details">
          <h2>{name}</h2>
          <p> KES {amount}</p>
        </div>
        <div className="cart-icon">
          <button>Add to cart</button>
        </div>
      </div>
    );
  };

  export default ProductCard;