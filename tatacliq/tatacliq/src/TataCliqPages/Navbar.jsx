import React, { useState } from 'react'
import './../CSSfile/Navbar.css'
import './../CSSfile/Cate_dropdown.css'
import { useNavigate } from 'react-router-dom';
import Sign_dropdown from './Sign_dropdown';

const Navbar = () => {

    const [display, setdisplay] = useState(false);
    const [isButtonActive, setIsButtonActive] = useState(true);
    const[signin,setSignin]=useState(false)

    function FallDown(){
        setSignin(true)
    }
    function Fallup(){
        setSignin(false)
    }

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
                        <p onMouseEnter={FallDown} onMouseLeave={Fallup}> Sign in/Sign Up</p>
                    </span>
                </div>
                {signin &&  <div id='sign_drop' onMouseEnter={FallDown} onMouseLeave={Fallup}>
            <div id='inner_sign'>
                <div id='login'>
                    <p>Login/Register</p>
                </div>
                <div className="list">
                    <div className='list_icon'>
                        <img src='https://www.tatacliq.com/src/general/components/img/profile.png' />
                    </div>
                    <div className='list_text'>
                        <p onClick={()=>route('/profile')}> My Account</p>
                    </div>
                </div>
                <div className="list">
                    <div className='list_icon'>
                        <img src='https://www.tatacliq.com/src/general/components/img/order-history.svg' />
                    </div>
                    <div className='list_text'>
                        <p>Order History</p>
                    </div>
                </div>
                <div className="list">
                    <div className='list_icon'>
                        <img src='https://www.tatacliq.com/src/general/components/img/WL5.svg' />
                    </div>
                    <div className='list_text'>
                        <p>My Wishlist</p>
                    </div>
                </div>
                <div className="list">
                    <div className='list_icon'>
                        <img src='https://www.tatacliq.com/src/account/components/img/alert.svg' />
                    </div>
                    <div className='list_text'>
                        <p>Alert & Coupon</p>
                    </div>
                </div>
                <div className="list">
                    <div className='list_icon'>
                        <img src='https://www.tatacliq.com/src/account/components/img/giftCards.svg' />
                    </div>
                    <div className='list_text'>
                        <p>Gift Card</p>
                    </div>
                </div>
                <div className="list">
                    <div className='list_icon'>
                    <img src='https://www.tatacliq.com/src/account/components/img/cliqCash.svg' />
                    </div>
                    <div className='list_text'>
                        <p>CLiQ Cash</p>
                    </div>
                </div>
            </div>
        </div>}
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
                        <div onClick={() => route('/cartNav')}>
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