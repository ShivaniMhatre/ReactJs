import React from 'react'
import './../../../src/CSSfile/cart/Cart.css'

const Cart = () => {
  return (
    <div id='cart_body'>
      <div id='inner_cartbody'>
        <div id='tandc'>
          <p>Apply a relevant <b>coupon code </b>here to avail any additional discount. Applicable <b>cashback</b> if any will be credited to your account as per T&C.
          </p>
        </div>
        <div id='cart_detail'>
          <div id='bag_detail'>
            <div id='freeShiping'>
              <div id='truckimg'>
                <img src='https://www.tatacliq.com/src/cart/components/img/Delivery.svg' alt='' />
              </div>
              <div id='ship'>
                <span>Congratulations NeuPass User!! Your order is eligible for FREE Shipping!</span>
              </div>
            </div>
            <div id='cartpro_detail'>
              <div id='cartpro_img'>
                <img src='https://img.tatacliq.com/images/i11/437Wx649H/MP000000017521562_437Wx649H_202305120004041.jpeg' />
              </div>
              <div id='Prodetail'>
                <div id='Prodetail1'>
                  <div id='Prodetail1_left'>
                    <p>Diza by Westside White Kurta</p>
                    <p>₹1399.00</p>
                    <span>
                      <p>Color : White</p>
                      <p>Size : S</p>
                    </span>
                  </div>
                  <div id='Prodetail1_right'>
                    <div style={{ 'width': '100%', 'height': '40px', 'margin': '10px' }}>
                      <i class="fa-solid fa-truck-fast" style={{ 'paddingRight': '10px' }}></i>
                      <span>Deliver By 17 July | <b style={{ 'color': 'rgb(90,153,87)' }}>FREE</b></span>
                    </div>
                  </div>
                </div>
                <div id='Prodetail2'>
                  <div id='Prodetail2_left'>
                    <div style={{ 'width': '100%', 'height': '30px', 'margin': 'auto', 'display': 'flex' }}>
                      <p>Quantity</p>
                      <select style={{ 'border': 'none', 'outline': 'none' }}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                  <div id='Prodetail2_right'>
                    <div id='heart'>
                      <i class="fa-regular fa-heart" style={{ 'paddingRight': '10px' }}></i><span>Save To Wishlist</span>
                    </div>
                    <div id='remove'>
                      <p>Remove</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id='cont_btn'>
            <button>Continue</button>
          </div>
          </div>
          
          <div id='bill_detail'>
            <div id='coupons'>
              <div id='coupon_text'>
                <div id='coupon_img'>
                  <img src='https://www.tatacliq.com/src/general/components/img/coupon.png' alt='' />
                </div>
                <div>
                  <span>Check For Coupon</span>
                </div>
                <i class="fa-solid fa-angle-down" style={{ 'paddingLeft': '90px' }}></i>
              </div>
            </div>
            <div id='bill'>
              <div id='inner_bill'>
                <div id='inner_billTop'>
                  <div>
                    <span>Bag Total</span>
                    <span style={{ 'paddingLeft': '60%' }}>₹1399.00</span>
                  </div>
                  <div>
                    <span>Shipping Charges</span>
                    <span style={{ 'paddingLeft': '50%', 'color': 'rgb(1,150,78)' }}>FREE</span>
                  </div>
                  <div>
                    <span>Bag Subtotal</span>
                    <span style={{ 'paddingLeft': '55%' }}>₹1399.00</span>
                  </div>
                </div>
                <div id='inner_billBottom'>
                  <div id='total'>
                    <h3>Total ₹1399.00</h3>
                  </div>
                  <div id='checkout'>
                    <button>CheckOut</button>
                  </div>
                </div>

              </div>
            </div>
            <div id='security'>
              <div style={{'margin':'10px','color':'rgb(169,169,169)'}}>
                <i class="fa-solid fa-user-shield"></i>
              </div>
              <div style={{'width':'89%','color':'rgb(169,169,169)','fontSize': '13px'}}>
                <span>Safe and secure payments. Easy returns. 100% Authentic products.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart