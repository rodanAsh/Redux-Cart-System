import React from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../../store/cartSlice'

const Cart = () => {
  const cartProducts = useSelector(state => state.cart)

  const dispatch = useDispatch()

  const handleRemoveCart = (id) => {
    dispatch(remove(id))
  }
 
  return (
    <div className='cart'>
      {cartProducts.map((product) => {
        return (
          <div key={product.id} className="cart-container">
            <div className="cart-image">
              <img src={product.image} alt="" />
            </div>
            <div className="cart-detail">
              <div>{product.title}</div>
              <div>Quantity: </div>
            </div>
            <div>
              <button onClick={()=>handleRemoveCart(product.id)}>Remove from Cart</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Cart