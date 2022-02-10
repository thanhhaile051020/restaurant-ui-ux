import React from 'react'

// import './FooterOverlay.css';

const FooterOverlay = () => (
  <div className="absolute z-[0] flex h-[100%] w-[100%] flex-col">
    <div className='h-[25%] -bg--color-black'></div>
    <div className="h-[75%] app__bg"></div>
  </div>
)

export default FooterOverlay
