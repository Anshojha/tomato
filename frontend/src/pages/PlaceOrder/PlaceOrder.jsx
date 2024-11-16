import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  const { getTtotalItem, token, food_list, cartItems, url } = useContext(StoreContext)
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const onChnageHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  useEffect(() => {
    console.log(data);
  }, [data])

  const placeorder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item.id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
  }

  return (
    <form on className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery information</p>
        <div className="multi-fields">
          <input required name="firstName" onChange={onChnageHandler} value={data.firstName} type="text" placeholder='First name' />
          <input required name="lastName" onChange={onChnageHandler} value={data.lastName} type="text" placeholder='Last name' />
        </div>
        <input required name="email" onChange={onChnageHandler} value={data.email} type="email" placeholder='Enter email' />
        <input required name="street" onChange={onChnageHandler} value={data.street} type="text" placeholder='Street' />
        <div className="multi-fields">
          <input required name="city" onChange={onChnageHandler} value={data.city} type="text" placeholder='City' />
          <input required name="state" onChange={onChnageHandler} value={data.state} type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input required name="zipcode" onChange={onChnageHandler} value={data.zipcode} type="text" placeholder='Zip-code' />
          <input required name="country" onChange={onChnageHandler} value={data.country} type="text" placeholder='Country' />
        </div>
        <input required name="phone" onChange={onChnageHandler} value={data.phone} type="text" placeholder='Phone' />
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
              <p>₹{getTtotalItem() === 0 ? 0 : getTtotalItem() + 40}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b><b>₹{getTtotalItem() === 0 ? 0 : getTtotalItem() + 40}</b>
            </div>
          </div>
          <button type='submit' onClick={() => navigate("/order")}>PROCCED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
