import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  const {getTtotalItem} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
          <p  className="title">Delivery information</p>
          <div className="multi-fields">
              <input type="text" placeholder='First name'/>
              <input type="text" placeholder='Last name' />
          </div>
          <input type="email" placeholder='Enter email'/>
          <input type="text" placeholder='Street'/>
          <div className="multi-fields">
              <input type="text" placeholder='City'/>
              <input type="text" placeholder='State' />
          </div>
          <div className="multi-fields">
              <input type="text" placeholder='Zip-code'/>
              <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='Phone'/>
      </div>
      <div className="place-order-right">
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
              <p>₹{getTtotalItem()=== 0 ? 0 : getTtotalItem()+40}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b><b>₹{getTtotalItem()=== 0 ? 0 : getTtotalItem()+40}</b>
            </div>
          </div>
          <button onClick={()=> navigate("/order")}>PROCCED TO PAYME</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
