import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTtotalItem,url} = useContext(StoreContext)
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id} >
                <div className="cart-item-title cart-items-item">
                  <img src={url + "/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price * cartItems[item._id]}</p>
                  <p className='cross' onClick={()=>removeFromCart(item._id)}>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-buttom">
        <div className="cart-total">
          <h2>Cart totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTtotalItem()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>₹{getTtotalItem()=== 0 ? 0 : 400}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b><b>₹{getTtotalItem()=== 0 ? 0 : getTtotalItem()+40}</b>
            </div>
          </div>
          <button onClick={()=> navigate("/order")}>PROCCED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promocode. Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promo-code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
