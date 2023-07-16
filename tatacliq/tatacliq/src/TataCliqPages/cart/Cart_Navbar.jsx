import React, { useState } from 'react'
import './../../../src/CSSfile/cart/Cart_Navbar.css'

// import './../../../src/CSSfile/cart/Cart.css'
import Cart from './Cart'

const Cart_Navbar = () => {



  return (
    <div>
      <div id='cart_nav'>
        <div id='inner_cartnav'>
          <div id='cart_logo'>
            <img src="http://www.pngimagesfree.com/LOGO/T/Tata-CLiQ/Tata-cliq-logo-PNG-Black-and-White.png" alt="" />
          </div>
          <div id='cart_profile'>
            <div id='profile_circle'>
              <img src="https://www.tatacliq.com/src/general/components/img/profile.png" alt="" />
            </div>
            <span style={{ 'fontSize': '13px', 'color': 'white', 'paddingLeft': '5px' }}>Shivani Mhatre</span>
            <div id='down_arrow'>
              <i class="fa-solid fa-angle-down" style={{ 'color': 'white' }}></i>
            </div>
          </div>
        </div>
      </div>
      <div id='cart_nav2'>
        <div id='inner_cartnav2'>
          <div id='mybag'>
            <h1>My Bag</h1>
          </div>
          <div id='pincode'>
            <span>
              <p>Pen,402107</p>
              <p>Change PIN Code</p>
            </span>

          </div>
        </div>
      </div>
      <Cart/>
     
    </div>
  )
}

export default Cart_Navbar