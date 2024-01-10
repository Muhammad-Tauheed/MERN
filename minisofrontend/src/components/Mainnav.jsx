import React from 'react'
import { Link } from 'react-router-dom'

import './mainnav.css';

const Mainnav = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <Link class=" clr nav-link fw-bold mx-3" to="/">HOME</Link>
        </li>
        <li class="nav-item">
          <Link class=" clr nav-link fw-bold mx-3" to="/newarrivals">NEW ARRIVALS</Link>
        </li>
        <li class="nav-item">
          <Link class="clr nav-link fw-bold mx-3" to="/lotso">LOTSO</Link>
        </li>
        <li class="nav-item">
          <Link class=" clr nav-link fw-bold mx-3" to="/bear">WE BARE BEARS</Link>
        </li>

        <li class=" nav-item dropdown fw-bold">
          <Link class="clr nav-link dropdown-toggle mx-3" to="/cat" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            CATEGORIES
          </Link>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class=" nav-item dropdown fw-bold">
          <Link class=" clr nav-link dropdown-toggle mx-3" to="/loyalty" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            LOYALTY
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/action">Action</Link></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class=" nav-item fw-bold">
          <Link class=" clr nav-link mx-3" to="/contact">CONTACT US</Link>
        </li>

     
      </ul>
   
    </div>
  </div>
</nav>
  )
}

export default Mainnav