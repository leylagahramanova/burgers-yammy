"use client"
import React, { useState } from 'react';
import Layout from '@/components/Layout';

const projectsData = [
  {
    id: 1,
    title: 'Buffalo Burgers',
    price: 20,
    imgSrc: 'buffalo-burgers.jpg',
  },
  {
    id: 2,
    title: 'Knuckle Burger',
    price: 15,
    imgSrc: 'knuckle-burger.jpg',
  },
  {
    id: 3,
    title: 'Bean Burger',
    price: 20,
    imgSrc: 'bean-burger.jpg',
  },
];

const Order = () => {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});

  const handleAddToCart = (item) => {
    const updatedQuantities = { ...quantities, [item.id]: (quantities[item.id] || 1) };
    setQuantities(updatedQuantities);

    const updatedCart = [...cart, { ...item, quantity: updatedQuantities[item.id] }];
    setCart(updatedCart);
  };

  const handlePlus = (itemId) => {
    setQuantities({
      ...quantities,
      [itemId]: (quantities[itemId] || 0) + 1,
    });
  };

  const handleMinus = (itemId) => {
    if (quantities[itemId] > 1) {
      setQuantities({
        ...quantities,
        [itemId]: quantities[itemId] - 1,
      });
    }
  };

  const handlePlus2 = (cartItemId) => {
    setQuantities({
      ...quantities,
      [cartItemId]: (quantities[cartItemId] || 0) + 1,
    });
  };

  const handleMinus2 = (cartItemId) => {
    if (quantities[cartItemId] > 1) {
      setQuantities({
        ...quantities,
        [cartItemId]: quantities[cartItemId] - 1,
      });
    }
  };

  const calculateTotal = () => {
    let total = 0;

    for (const item of cart) {
      total += item.price * quantities[item.id];
    }

    return total;
  };


  return (
    <Layout>
      <div className="order-con">
        <div className="order-basket-card">
          <div className="order-card">
            <div className="order-basket">
              <div className="order-card-body">
                <h2 className="order-card-title">Your order</h2>
                <br />
                <div className="order-content-wrapper">
                <div className="order-cart-wrapper">
                {cart.map((cartItem) => (
                      <div key={`${cartItem.id}`} className="order-cart-item">
                        <img
                          className="order-gul-img"
                          style={{ width: "100px" }}
                          src={`images/${cartItem.imgSrc}`}
                          alt=""
                        />
                           <h3>
        {cartItem.title}
      </h3>
                        <div className="order-number">
                          <span
                            onClick={() => handleMinus2(cartItem.id)}
                            className="minus"
                            data-action="minus"
                          >
                            -
                          </span>
                          <div className="order-input" data-counter>
                            {quantities[cartItem.id] || cartItem.quantity}
                          </div>
                          <span
                            onClick={() => handlePlus2(cartItem.id)}
                            className="plus"
                            data-action="plus"
                          >
                            +
                          </span>
                        </div>
                        <div className="order-price">
                          <div className="price__currency">${cartItem.price * quantities[cartItem.id]}</div>
                        </div>
                        <hr></hr>
                      </div>
                   
                   ))}
</div> 
                </div>
                <div className="order-cart-total">
                  <p>
                    <span className="order-h3">Total:</span>
                    <span className="order-total-price">{calculateTotal()}</span>
                    <span className="order-rouble">$</span>
                  </p>
                </div>
              </div>
              <br />
              <div className="order-card-body border-top">
                <h3 className="order-card-title">Make order</h3>
                <br />
                <form>
                  <div className="order-form-group">
                    <input
                      type="text"
                      className="order-form-control"
                      placeholder="Your telephone number"
                    />
                  </div>
                  <br />
                  <button
                    className="order-btn btn-block btn-outline-warning"
                    type="button"
                  >
                    Order
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="order-content-wrapper">
          {projectsData.map((item) => (
            <div key={item.id} className="order-cart-wrapper">
              <div className="order-card" data-id={item.id}>
                <img
                  className="order-gul-img"
                  src={`images/${item.imgSrc}`}
                  alt=""
                />
                <div className="order-card-text">
                  <h3 className="order-card-title">{item.title}</h3>
                  <div className="order-wrapper">
                    <div className="order-number">
                      <span
                        onClick={() => handleMinus(item.id)}
                        className="minus"
                        data-action="minus"
                      >
                        -
                      </span>
                      <div className="order-input" data-counter>
                        {quantities[item.id] || 1}
                      </div>
                      <span
                        onClick={() => handlePlus(item.id)}
                        className="plus"
                        data-action="plus"
                      >
                        +
                      </span>
                    </div>
                    <div className="order-price">
                      <div className="price__currency">{item.price} $</div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item)}
                    data-cart
                    type="button"
                    className="order-btn btn-block btn-outline-warning"
                  >
                    + in basket
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
     
      </div>
      <br></br>
    </Layout>
  );
};

export default Order;
