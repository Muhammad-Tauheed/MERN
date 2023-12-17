import React from 'react'
import About from './About'
import Lastnav from './Lastnav'



const Loyalty = () => {
  return (
    <>
    
    <div className='gimg container '>

      <div className='d-flex'>
        <div><img src="https://cdn.shopify.com/s/files/1/0500/8539/6644/files/untitled-3_cgkV_58x36_crop_top.png" alt="" className='mt-5 gimg2'/></div>
  
        <div>
          <ul className='d-flex lona '>
            <li className='clr1'>Reward</li>
            <li className='clr2'>Birthday</li>
            <li className='clr3'>Earn Points</li>
            <li className='clr4'>Login</li>
            <li className='clr5'>FAQs</li>
          </ul>
        </div>
      </div>

      <div>
        <div className='loy fw-bold'>Loyalty Program</div>
        <ul className='d-flex regis fw-bold'>
          <li>Register </li>
          <li>Shop Online </li>
          <li>Earn Reward</li>
        </ul>
      </div>
      <div className='join'>
        Join Now
      </div>
      <div><img src="https://cdn.shopify.com/s/files/1/0500/8539/6644/files/untitled-2_fEsP.png?v=1696846393583" alt="" className='gift'/></div>
     
     <div>
      <div className='point fw-bold'>Points Earning and Redemption</div>
      <p className='poinp'>1 rupee spent = 1 point earned. On every order placed, customers will get points equivalent to 
        the <br />amount of order. These points will be available to customers when the order is delivered. Points can <br />
        be redeemed for free products. Multiple products will be available to customers which can be <br />purchased at 
        specific points price. </p>
     </div>
     <div><img src="https://cdn.shopify.com/s/files/1/0500/8539/6644/files/102_0yxt.png?v=1693823308696" alt="" className='star'/></div>

     <div className='wrapergold d-flex'>
        <div className='parentgold '>
        <div className='gold'>
          <p className='regi1 fw-light'>Register in</p>
          <p className='tier fw-bold'>Gold Tier</p>
          <div className='joi'>Join Now</div>
           
        </div>
            <div className='childgold bg-one1'></div>
        </div>
        <div className='parentgold'>
          <div className='gold'>
          <p className='regi1 fw-light'>Get Ready For</p>
          <p className='tier fw-bold'>Platinum Tier</p>
          <div className='joi'>Coming Soon</div>
          </div>
       

            <div className='childgold bg-tow2'></div>
        </div>
    </div>

    <div className='d-flex '>
      <div className='col-lg-6 joinnow '>
        <div className='j1 fw-bold'>JOIN NOW!</div>
        <h5 className='fw-bold'>Register in Miniso Loyalty Program and enjoy amazing discounts on Gold Tier. </h5>
        <p className='mt-5 fw-light disco mainpanda'>DISCOUNTS + FREE PRODUCTS + MORE! Our Loyalty <br />program will ensure you are always loved! We know you 
        <br />love being spoilt!! Joining is FREE!</p>
      </div>
      <div className='col-lg-6 panda'>
        <img src="https://cdn.shopify.com/s/files/1/0500/8539/6644/files/1w_4Ag6.png?v=1693570016637" alt="" />
      </div>
    </div>
    <About/>
    <Lastnav/>
    </div>
    
    </>
  )
}

export default Loyalty