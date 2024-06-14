import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { jeweleriProduct } from '../feature/commerce/commerceSlice'
import ProductCards from '../Card/ProductCards'


const Jeweleri = () => {
  const{allproduct}=useSelector(state=>state.product)
const dispatch=useDispatch()
 useEffect(()=>{
  dispatch(jeweleriProduct())
 },[])

  return (
    <div className='jeweleri-container'>
    <div className='jeweleri-text'>
      <h3>jeweleri products</h3>
    </div>
    <hr />
  
  <div className='jeweleri-product'>
  {
    allproduct.map((item)=>(<ProductCards item={item} key={item.id}/>))
  }
 
  </div>

  </div>
  )
}

export default Jeweleri