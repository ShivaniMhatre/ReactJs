import React, { useState } from 'react'
import './../../src/cssfile/Navbar.css'
import './../../src/cssfile/Cate_dropdown.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [display, setdisplay] = useState(true);
    const [isButtonActive, setIsButtonActive] = useState(false);
    

    const handleClick = () => {
        setdisplay(!display)
        setIsButtonActive(!isButtonActive);
    }
    // const hide=()=>{
    //     setdisplay(!display)

    // }

    const route = useNavigate()

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
                    <div className={isButtonActive ? 'category' : 'category_inactive'} onPointerEnter={() => handleClick()} >
                        {/*   */}
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
                {display && <div className='cate_dropdown'>
                    <div className='left'>
                        <div className='inner_left'>
                            <p>Women's Fashion</p>
                            <i class="fa-solid fa-angle-right"></i>
                        </div>
                        <div className='inner_left' onClick={() => route('/men')} >
                            <p>Mens's Fashion</p>
                            <i class="fa-solid fa-angle-right"></i>
                        </div>
                        <div className='inner_left'>
                            <p>Kids Fashion</p>
                            <i class="fa-solid fa-angle-right"></i>
                        </div>
                        <div className='inner_left'>
                            <p>Home & Kitchen</p>
                            <i class="fa-solid fa-angle-right"></i>
                        </div>
                        <div className='inner_left'>
                            <p>Gadgets</p>
                            <i class="fa-solid fa-angle-right"></i>
                        </div>
                        <div className='inner_left'>
                            <p>Beauty</p>
                            <i class="fa-solid fa-angle-right"></i>
                        </div>
                        <div className='inner_left'>
                            <p>Jeweellery</p>
                            <i class="fa-solid fa-angle-right"></i>
                        </div>
                        <div className='inner_left'>
                            <p>Accessaries</p>
                            <i class="fa-solid fa-angle-right"></i>
                        </div>
                    </div>
                    <div className='right'>
                        <div className="inner_right">
                            <div className='div1'>
                                <h5>Shop All Ethnic Wear</h5>
                                <p>Kurtis and Kurtas</p>
                                <p>Suits</p>
                                <p>Sarees</p>
                                <p>Lehengas</p>
                                <p>Bottoms</p>
                                <p>Blouse and Fabric</p>
                                <p>Dupattas</p>
                            </div>
                            <div className='div2'>
                                <h5>Shop All Western Wear</h5>
                                <p>Tops and Tunics</p>
                                <p>Dresses</p>
                                <p>Jeans</p>
                                <p>Shirts</p>
                                <p>Trousers</p>
                                <p>Skirt</p>
                                <p></p>
                            </div>
                        </div>
                        <div className="inner_right">
                            <div className='div3'>
                                <p>Shorts</p>
                                <p>Jacket and Blazers</p>
                                <p>Leggings</p>
                                <p>Capris</p>
                                <p>Jumpsuits</p>
                                <p>Shrugs</p>
                                <p>Sweaters</p>
                                <p>Sweatshirts</p>
                            </div>
                            <div className='div2'>
                                <h5>Activewear and Sportwear</h5>
                                <p>T-shirts</p>
                                <p>Shorts</p>
                                <p>Sets</p>
                                <p>Jackets</p>
                                <p>Track Pants</p>
                                <p>Innerwear</p>
                            </div>
                        </div>
                        <div className="inner_right">
                            <div>
                                <h5>Lingerie & Lounge Sets</h5>
                                <p>Bras</p>
                                <p>Panties</p>
                                <p>Lingeric Sets</p>
                                <p>Camisoles</p>
                                <p>Sleepwear & Robes</p>
                                <p>Shapewear</p>
                                <p>Swimwear</p>
                            </div>
                            <div className='div2'>
                                <h5>Shop All Footwear</h5>
                                <p>Casual Footwear</p>
                                <p>Boots</p>
                                <p>Sneakers</p>
                                <p>Flip Flop</p>
                                <p>Sport Shoes</p>
                                <p>Ethnic Footwear</p>
                                <p>Swimwear</p>
                            </div>
                        </div>
                        <div className="inner_right">
                            <div>
                                <h5>Bags,Wallets & Clutches</h5>
                                <p>Handbags</p>
                                <p>Tote Bags</p>
                                <p>Sling Bags</p>
                                <p>Backpack</p>
                                <p>Wallets</p>
                                <p>Clutches</p>
                                <p>Premium Handbags</p>
                            </div>
                            <div className='div2'>
                                <h5>Jewellery</h5>
                                <p>Gold</p>
                                <p>Diamond</p>
                                <p>Silver</p>
                                <p>Fashion Jewellery</p>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Navbar