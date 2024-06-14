import React from 'react'
import shirtimg from '../assets/shirts.png'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { add } from '../feature/cart/cartSlice';
const ProductCards = ({item}) => {
const dispatch=useDispatch()
const handelChange=(cartitem)=>{
   dispatch(add(cartitem))

}
  return (
    <div className='product-container'>
     <div className='pro-img'>
      <img src={item.image} alt="" />
     </div>
     <div className='pro-text-part'>
      <div>
      <h3 >{item.title}</h3>
      </div>
      <h5>rating :{item.rating.rate}</h5>
      <h6>count :{item.rating.count}</h6>
      <p>price : <FaIndianRupeeSign/> {item.price}</p>
      <div className='pro-btn'>
      <button className='pro-btn2' onClick={()=>handelChange(item)}>Add to Cart</button>
      </div>
     
     </div>

    </div>
  )
}

export default ProductCards