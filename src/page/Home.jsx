import React, { useEffect } from 'react'
import ProductCards from '../Card/ProductCards'
import { useDispatch, useSelector } from 'react-redux';
import { getAllproduct } from '../feature/commerce/commerceSlice';
const Home = () => {
  const dispatch=useDispatch()
  const{allproduct}=useSelector(state=>state.product)
  useEffect(()=>{
   dispatch(getAllproduct())
  },[])
  if(allproduct.length===0){
    return(
      <h1 className='loader'>Loading...</h1>
    )
  }
  return (
    <div className='home-container'>
      <div className='home-text'>
        <h1>wellcome to e-shop</h1>
      </div><hr />
      <div className='home-grid-container'>
      <div className='home-grid'>
      {
        allproduct.map((item)=>(<ProductCards item={item} key={item.id}/>))
      }
      </div>
     
      </div>
    
    </div>
  )
}

export default Home