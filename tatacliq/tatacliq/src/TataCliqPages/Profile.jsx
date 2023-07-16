import React from 'react'
import './../../src/CSSfile/Profile.css'
import Navbar from './Navbar'

const Profile = () => {
    return (
        <div id='profile_body'>
            <Navbar/>
            <div id='inner_profile_body'>
                <div id='pro_left'>
                    <div id='menu'>
                        Menu
                    </div>
                    <div id='inner_pro_left'>
                        <div className="menu">
                            <div>
                                <img src='https://www.tatacliq.com/src/general/components/img/WL5.svg' />
                            </div>
                            <div>
                                <p>
                                    My Wishlist
                                </p>
                            </div>
                        </div>
                        <div className="menu">
                            <div>
                                <img src='https://www.tatacliq.com/src/general/components/img/order-history.svg' />
                            </div>
                            <div>
                                <p>
                                    Order History
                                </p>
                            </div>
                        </div>
                        <div className="menu">
                            <div>
                                <img src='https://www.tatacliq.com/src/account/components/img/addressbook.svg' />
                            </div>
                            <div>
                                <p>
                                    Address Book
                                </p>
                            </div>
                        </div>
                        <div className="menu">
                            <div>
                                <img src='https://www.tatacliq.com/src/account/components/img/brand.svg' />
                            </div>
                            <div>
                                <p>
                                    Brands
                                </p>
                            </div>
                        </div>
                        <div className="menu">
                            <div>
                                <img src='https://www.tatacliq.com/src/account/components/img/card.svg' />
                            </div>
                            <div>
                                <p>
                                    Save Payments
                                </p>
                            </div>
                        </div>
                        <div className="menu">
                            <div>
                                <img src='https://www.tatacliq.com/src/account/components/img/alert.svg' />
                            </div>
                            <div>
                                <p>
                                    Alert and Coupon
                                </p>
                            </div>
                        </div>
                        <div className="menu">
                            <div>
                                <img src='https://www.tatacliq.com/src/account/components/img/giftCards.svg' />
                            </div>
                            <div>
                                <p>
                                    Gift Card
                                </p>
                            </div>
                        </div>
                        <div className="menu">
                            <div>
                                <img src='https://www.tatacliq.com/src/account/components/img/cliqCash.svg' />
                            </div>
                            <div>
                                <p>
                                    CLiQ Cash
                                </p>
                            </div>
                        </div>
                        <div className="menu">
                            <div>
                                <img src='https://www.tatacliq.com/src/account/components/img/addressbook.svg' />
                            </div>
                            <div>
                                <p>
                                    Manage Notification
                                </p>
                            </div>
                        </div>
                        <div className="menu">
                            <div>
                                <img src='https://www.tatacliq.com/src/account/components/img/settings.svg' />
                            </div>
                            <div>
                                <p>
                                    Profile
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='pro_mid'>
                    <div id='general_info'>
                        General Information
                    </div>
                    <div id='inner_pro_mid'>
                        <div id='basic'>
                            <div className='heading'>
                                <span>Basic Details</span>
                                <span>ADD</span>
                            </div>
                            <div className='content'>
                                <div id='f_name'>
                                    <div id='Fname'>
                                        <label>First Name</label>
                                    </div>
                                    <div className='Input'>
                                        <input type='text' />
                                    </div>
                                </div>
                                <div id='l_name'>
                                    <div id='Lname'>
                                        <label>Last Name</label>
                                    </div>
                                    <div className='Input'>
                                        <input type='text' />
                                    </div>
                                </div>
                                <div id='dob'>
                                    <div id='Dateob'>
                                        <label>Date Of Birth</label>
                                    </div>
                                    <div className='Input'>
                                        <input type='date' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='contact'>
                            <div className='heading'>
                                <span>Contact Details</span>
                                <span>EDIT</span>
                            </div>
                            <div className='content'>
                                <div id='mob'>
                                    <div id='mobile'>
                                        <label>Mobile Number</label>
                                    </div>
                                    <div className='Input'>
                                        <input type='number' value={+917385994612} />
                                    </div>
                                </div>
                                <div id='email'>
                                    <div id='Email'>
                                        <label>Email</label>
                                    </div>
                                    <div className='Input'>
                                        <input type='email' value='shivanikatkar97@gmail.com' />
                                    </div>
                                </div>
                            </div>
                            <div id='personal'>
                                <div className='heading'>
                                    <span>Personal Details</span>
                                    <span>EDIT</span>
                                </div>
                                <div className='content'>
                                    <div id='gender'>
                                        <div id='Gender'>
                                            <label>Gender</label>
                                        </div>
                                        <div className='Input'>
                                            <input type='text' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='pro_right'>
                    <div id='inner_pro_right'>
                        <div id='right_circle'>
                            
                        </div>
                        <p style={{'fontSize':'12px','textAlign':'center'}}>shivanikatkar97@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile