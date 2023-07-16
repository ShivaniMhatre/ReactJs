import React from 'react'
import './../../src/CSSfile/Sign_dropdown.css'

const Sign_dropdown = () => {
    return (
        <div id='sign_drop'>
            <div id='inner_sign'>
                <div id='login'>
                    <p>Login/Register</p>
                </div>
                <div className="list">
                    <div className='list_icon'>
                        <img src='https://www.tatacliq.com/src/general/components/img/profile.png' />
                    </div>
                    <div className='list_text'>
                        <p>My Account</p>
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
        </div>
    )
}

export default Sign_dropdown