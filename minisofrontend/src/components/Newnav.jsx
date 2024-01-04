import React from 'react'

const Newnav = () => {
  return (
    <>
    <div className='container bg-light d-flex align-items-center'>
        Home  |  <p className='fw-bold mx-3 my-2 '>New Arrivals</p>
    </div>
    <h4 className='container mt-4 fw-bold'>New Arrivals</h4>
    <div className='container d-flex justify-content-between'>
        <div>img img</div>
        <div className='fw-light'>Showing: 648 Results</div>

        <div className='bg-light'>
        <li class=" nav-item dropdown fw-bold">
          <a class="  nav-link dropdown-toggle fw-light"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Sort By
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" to="/action">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        </div>

    </div>

    </>
  )
}

export default Newnav