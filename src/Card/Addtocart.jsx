import React from 'react'
import shirt from '../assets/shirts.png'
import { FaRupeeSign } from "react-icons/fa";
import CardComponent from './CardComponent';
import { useSelector } from 'react-redux';

const Addtocart = () => {
  const{cart}=useSelector(state=>state.cart)
  console.log(cart)
 const subTotal=cart.reduce((p,c)=>{
  return p+c.price
 },0);

 const y=(subTotal*18/100);
 const grandTotal=subTotal+y;
  return (
    <div className='add-container'>
     <div className='add-box1-container'>
     {
      cart.map((item)=>( <CardComponent item={item} key={item.id} />))
     } 
    </div>

      
     <div className='add-box2'>
     <div className='add-box2-heading'>
        <h3>price details</h3>
        <hr />
     </div>
     <div className='add-box3'>
        <div className='add-box4'>
        <div><p>product</p></div>
        <div>{cart.length}</div>
        </div>
        <hr />
        <div className='add-box4'>
        <div><p>subtotal</p></div>
        <div>{subTotal}<FaRupeeSign/></div>
        </div>
        <hr />
        <div className='add-box4'>
        <div><p>tax charge</p></div>
        <div>{y}</div>
        </div>
        <hr />
        <div className='add-box4'>
        <div><p>Total amount</p></div>
        <div>= {grandTotal} <FaRupeeSign/></div>
        </div>
        <hr />
        <button>Check Out</button>
     </div>
    
     </div>
    </div>
  )
}

export default Addtocart