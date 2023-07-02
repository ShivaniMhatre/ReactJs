import React from 'react'
import './../../src/cssfile/Navbar.css'

const Navbar = () => {
    return (
        <div id="navbar">
            <div id="left">
                <div id="image">
                    <img src="http://www.pngimagesfree.com/LOGO/T/Tata-CLiQ/Tata-cliq-logo-PNG-Black-and-White.png" alt="" />
                </div>
            </div>
            <div id="right">
                <div id="right_up">
                    <p>Tata Cliq Luxury</p>
                    <span>
                        <p>CLiQ Cash</p>
                        <p>Gift Card</p>
                        <p>CLiQ Care</p>
                        <p>Track Order</p>
                        <p>Sign in/Sign Up</p>
                    </span>
                </div>
                <div id="right_down">
                    <div id="category">
                        <p>Category</p>
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div id="brands">
                        <p>Brands</p>
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div id="search">
                        <div>
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input placeholder='Search for Categories' />
                        </div>
                    </div>
                    <div id="profile">
                        <div>
                            <i class="fa-regular fa-heart fa-xl"></i>
                        </div>
                        <div>
                            <i class="fa-solid fa-bag-shopping fa-xl"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar