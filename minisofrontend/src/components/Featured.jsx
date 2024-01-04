import React, { useState } from 'react'


import './styles.css';


const Featured = () => {



  // btn 1 function start

  const black =  "#f0f0f0";
  const [bg,setBg] = useState(black);

  const text = "#000000";
  const [textone,setTextone] = useState(text);

  const bgchang=()=>{
    let newbg = "#000000"
    setBg(newbg)
    let newtext ="#ffffff"
    setTextone(newtext)
  }

// btn 1 function end



// btn 2 function start
  const blacktow =  "#f0f0f0";
  const [bgtow,setBgtow] = useState(blacktow);

  const texttow = "#000000";
  const [textonetow,setTextonetow] = useState(texttow);

  const bgchangtow=()=>{
    let newbgtow = "#000000"
    setBgtow(newbgtow)

    let newtexttow ="#ffffff"
    setTextonetow(newtexttow)
  }
// btn 2 function end



// btn 3 function start

  const blackthree =  "#f0f0f0";
  const [bgthree,setBgthree] = useState(blackthree);

  const textthree = "#000000";
  const [textonethree,setTextonethree] = useState(textthree);

  const bgchangthree=()=>{
    let newbgthree = "#000000"
    setBgthree(newbgthree)

    let newtextthree ="#ffffff"
    setTextonethree(newtextthree)
  }

// btn 3 function end







  return (
    <>
    <h3 className='d-flex justify-content-center fw-bold'>FEATURED CATEGORIES</h3>
    <div className='container d-flex justify-content-center gap-5'>
    <button style={{backgroundColor:bg, color:textone}} onClick={bgchang} className='btn1 mt-2' >Fragrances</button>
    <button style={{backgroundColor:bgtow, color:textonetow}} onClick={bgchangtow} className='btn1 mt-2' >Scented Products</button>
    <button style={{backgroundColor:bgthree, color:textonethree}} onClick={bgchangthree} className='btn1 mt-2' >Bags</button>

    </div>

    </>
  )
}

export default Featured