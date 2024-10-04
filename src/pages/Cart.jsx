import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../Redux/Cartslice';  // Make sure to correctly import remove action

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart); // Assuming `cart` exists in Redux store

  const handleRemove = (id) => {
    dispatch(remove(id)); // Removing item by ID
  };

  return (
    <div>
      <h3>Products Detail</h3>
      <div className="cartWrapper">
        {cartItems.map((item) => (
          <div className="cartCard" key={item.id}> {/* Add a unique key */}
            <img src={item.image} alt="Product" />  {/* Fixed img src attribute */}
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
            <button className="btn" onClick={() => handleRemove(item.id)}>Remove</button> {/* Fixed button syntax */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
