import React from 'react'

import './styles.css';

const Bigimages = () => {
  return (
    <>
<div className='container'>
    <div className='wraper d-flex'>
        <div className='parent '>
        <div className='toys'>Toys
        <div ><p className='shop'>SHOP NOW</p></div>

        </div>
            <div className='child bg-one'></div>
        </div>
        <div className='parent'>
        <div className='toys'>Makeup
        <div ><p className='shop'>SHOP NOW</p></div>
        </div>

            <div className='child bg-tow'></div>
        </div>
    </div>
</div>    
    </>
    
  )
}

export default Bigimages