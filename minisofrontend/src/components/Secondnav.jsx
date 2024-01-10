import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Secondnav = () => {
  return (
    <div className=' d-flex  mt-4 bg-body'>
        
    <div className='minilogod'>
        <img src="https://miniso.pk/cdn/shop/files/logo_30c7485d-6c6a-4551-b8da-f51d2500a05f_500x@2x.png?v=1692170296" alt="" className='minisilogo' />
    </div>
    <div className='d-flex mt-4 gap-4 fs-6 icons'>
        <div><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
        <div><FontAwesomeIcon icon={faUser} /></div>
        <div><FontAwesomeIcon icon={faHeart} /></div>
        <div><FontAwesomeIcon icon={faCartShopping} /></div>
    </div>
    </div>


  )
}

export default Secondnav