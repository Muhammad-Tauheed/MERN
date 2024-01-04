import React from 'react'
import Homeswiper from './Homeswiper';
import Onehomecard from './Onehomecard';
import Imgnewarrival from './Imgnewarrival';
import Homethirdswiper from './Homethirdswiper';
import Toppics from './Toppics';
import Featured from './Featured';
import Skincare from './Skincare';
import Products from './Products';
import Favorites from './Favorites';
import Bigimages from './Bigimages';
import About from './About';
import Lastnav from './Lastnav';






const Home = () => {
  return (
    <>
    <Homeswiper/>
    <Onehomecard/>
    <Imgnewarrival/>
    <Homethirdswiper/>
    <Toppics/>
    <Homethirdswiper/>
    <Featured/>
    <Homethirdswiper/>
    <Skincare/>
    <Products/>
    <Homethirdswiper/>
    <Favorites/>
    <Bigimages/>
    <About/>
    <Lastnav/>
  
    </>
  )
}

export default Home