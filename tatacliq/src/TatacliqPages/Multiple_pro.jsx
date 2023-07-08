import React from 'react'
import './../../src/cssfile/Multiple_pro.css'
import MultipleProduct from './MultipleProduct'


const Multiple_pro = () => {
  return (
    <div className='mens_top'>
      <h1>Men's Winter Wear</h1>
      <p style={{ 'fontSize': '12px','textAlign':'center' }}>110797 Products</p>
      <div id='popularity'>
        <select>
          <option><span style={{ 'fontSize': '12px', 'color': 'lightgray' }}>Sort By : </span>Popularity</option>
          <option>Popularity</option>
          <option>Price Low to High</option>
          <option>Price High to Low</option>
          <option>New Arraival</option>
          <option>Discount</option>
        </select>
        <span style={{'paddingLeft':'15px'}}><i class="fa-solid fa-bars fa-xl" ></i></span>
      </div>
      
      <div className='mens_bottom'>
        <div id='Mbottom_left'>
          <div id='MbottomLeft_inner'>
            <div id="Mfilter">
              <span style={{'fontSize':'12px','fontWeight':'500'}}>Filter</span>
              <span style={{ 'fontSize': '12px', "paddingLeft": "95px", 'color': 'red' }}> Clear ALL</span>
            </div>
            <div id='Mdepartment'>
              <span style={{'fontSize':'12px','fontWeight':'500'}}>Department</span>
              <div style={{ 'width': '45%', 'height': '25px', 'backgroundColor': 'rgb(245,245,245)', 'borderRadius': '15px', 'color': 'rgb(213,213,213)', 'textAlign': 'center', 'paddingBottom': '10px', 'paddingTop': '5px', 'marginTop': '2px', 'fontSize': '12px' }}>Mens Clothing</div>
            </div>
            <div id='Mcategory'>
              <span style={{'fontSize':'12px','fontWeight':'500'}}>Category</span>
              <div>
                <span style={{ 'padding': ' 4px 10px', 'fontSize': '12px' }}>Casual Wear</span>
                <span><i class="fa-solid fa-xmark fa-xs" style={{ 'paddingTop': '12px' }} ></i></span></div>
            </div>
            <div className="Mother">
              <span>Product Type</span>
              <div><i class="fa-thin fa-plus" style={{'color':'rgb(211,211,211)'}}></i></div>
            </div>
            <div className="Mother">
              <span>Brand</span>
              <div><i class="fa-thin fa-plus" style={{'color':'rgb(211,211,211)'}}></i></div>
            </div>
            <div className="Mother">
              <span>Size</span>
              <div><i class="fa-thin fa-plus" style={{'color':'rgb(211,211,211)'}}></i></div>
            </div>
            <div className="Mother">
              <span>Heel Type</span>
              <div><i class="fa-thin fa-plus" style={{'color':'rgb(211,211,211)'}}></i></div>
            </div>
            <div className="Mother">
              <span>Discount</span>
              <div><i class="fa-thin fa-plus" style={{'color':'rgb(211,211,211)'}}></i></div>
            </div>
            <div className="Mother">
              <span>Colour</span>
              <div><i class="fa-thin fa-plus" style={{'color':'rgb(211,211,211)'}}></i></div>
            </div>
            <div className="Mother">
              <span>Heel Height</span>
              <div><i class="fa-thin fa-plus" style={{'color':'rgb(211,211,211)'}}></i></div>
            </div>
            <div className="Mother">
              <span>Price</span>
              <div><i class="fa-thin fa-plus" style={{'color':'rgb(211,211,211)'}}></i></div>
            </div>
            <div className="Mother">
              <span>Sandle Type</span>
              <div><i class="fa-thin fa-plus" style={{'color':'rgb(211,211,211)'}}></i></div>
            </div>
            <div className="Mother">
              <span>Sole Material</span>
              <div><i class="fa-thin fa-plus" style={{'color':'rgb(211,211,211)'}}></i></div>
            </div>
            <div className="Mother">
              <span>Tip shape</span>
              <div><i class="fa-thin fa-plus" style={{'color':'rgb(211,211,211)'}}></i></div>
            </div>
            <div className="Mother">
              <span>All Discount</span>
              <div><i class="fa-thin fa-plus" style={{'color':'rgb(211,211,211)'}}></i></div>
            </div>
          </div>
        </div>
        
          <MultipleProduct/>
        
      </div>
    </div>

  )
}

export default Multiple_pro