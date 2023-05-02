import './product-card.css'

const ProductCard = ({ item }) => {
  const handleAddToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const newCartItem = {
      ...product,
      rating: 0,
    };
    cartItems.push(newCartItem);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    const cartCount = cartItems.length;
    localStorage.setItem("cartCount", cartCount);
  };
    return (
      <div className="card">
        <img src={item.image_url.url} alt={item.name} />
        <div className="details">
          <h2>{item.name}</h2>
          <p> KES {item.price}</p>
        </div>
        <div className="cart-icon">
          <button onClick={()=>handleAddToCart(item)}>Add to cart</button>
        </div>
      </div>
    );
  };

  export default ProductCard;