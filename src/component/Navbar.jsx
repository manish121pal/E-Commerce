import React from 'react'
import logo from '../assets/my logo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const{cart}=useSelector(state=>state.cart)
  return (
    <div className='navbar-container'>
     <div className='nav_part1'>
        <Link to={'/'}><img className=' nav-logo-img'  src={logo} alt="" /></Link>
     </div>
     <div className='nav_part2'>
      
        <Link className='link' to={'/mens'}> Mens</Link>
        <Link className='link' to={'/womens'}> Womens</Link>
        <Link className='link' to={'/jeweleri'}>Jewellery</Link>
        <Link className='link' to={'/electronic'}>Electronics</Link>
      
     </div>
     <div className='nav_part3'>
      <Link to={'/addcards'} className='card-icon'>cart <i class="fa-solid fa-cart-shopping"></i></Link>
      <div className='pro-quantity'>
      <p>{cart.length}</p>
      </div>
     
      {/* <button className='btn-register'>register</button>
      <button className='btn-login'>login</button>
      <button className='btn-logout'>logout</button> */}

     </div>
    </div>
  )
}

export default Navbar