import React from 'react'
import About from './About'
import Lastnav from './Lastnav'



const Contactus = () => {
  return (
    <>
   <div className='container bg-light d-flex align-items-center'>
    Home  |  <p className='fw-bold mx-3 my-2 '> Contact Us</p>
    </div>

  <h5 className='container mt-4 fw-light d-flex justify-content-center'>Contact Us</h5>

  <div className='container d-flex justify-content-center mt-4'>
    <img src="https://miniso.pk/cdn/shop/files/Untitled-1_4843cecf-a1a7-43eb-b081-0014519a6889.png?v=1692879120" alt=""  />
  </div>

  <div className='container'>
  <h4 className='container mt-4 fw-bold d-flex justify-content-center'>Brand Profile</h4>
  <p className='px-5 text-muted'>Brand ProfileLifestyle product retailer MINISO (NYSE: MNSO) offers high quality household goods, 
    cosmetics, and toys at affordable prices. Life is for fun, MINISO. <br /> <p className='life text-muted'>Life is For Fun, MINISO</p></p>
  </div>

  <div className='container d-flex justify-content-center mt-4'>
    <img src="https://cdn.shopify.com/s/files/1/0500/8539/6644/files/WeChat_Image_20220811124851.png?v=1660204222" alt=""  />
  </div>

  
  <div className='container'>
  <h4 className='container mt-4 fw-bold d-flex justify-content-center'>Human Resource</h4>
  <p className=' text-muted human '> For Job Related Queries only, kindly email your CV/Resume at: <br /> <p className='life2 text-muted'>recruitment@miniso.com</p></p>
  </div>

  <div className='container'>
  <h4 className='container mt-4 fw-bold d-flex justify-content-center'>Marketing & Branding</h4>
  <p className=' text-muted human2 '> For Marketing Related Queries, Send your proposal at: <br /> <p className='life3 text-muted'>marketing.pk@miniso.com</p></p>
  </div>

  <div className='container'>
  <h4 className='container mt-4 fw-bold d-flex justify-content-center'>Business Development</h4>
  <p className=' text-muted human3 '> For Franchise Inquiry send an email to: <br /> <p className='life4 text-muted'>investment.pk@miniso.com</p></p>
  </div>

  <div className='container d-flex justify-content-center mt-4'>
    <img src="https://cdn.shopify.com/s/files/1/0500/8539/6644/files/branches-01_1024x1024.png?v=1694585221" alt="" className='mb-5' />
  </div>
  <About/>
  <Lastnav/>
    </>
   
  )
}

export default Contactus