import React from "react";
import "./App.css";

function Product(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Price: ₹{props.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Online Grocery Store</h1>
      <h2>Available Products</h2>

      <Product name="Rice" price="60/kg" />
      <Product name="Milk" price="30/litre" />
      <Product name="Apples" price="100/kg" />
      <Product name="Tomatoes" price="40/kg" />
      <Product name="Potatoes" price="35/kg" />
    </div>
  );
}

export default App;