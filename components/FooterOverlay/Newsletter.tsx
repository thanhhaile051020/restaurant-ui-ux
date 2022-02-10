import React from 'react'
import SubHeading from '../SubHeading/SubHeading'

const Newsletter = () => (
  <div className="z-[0]  md:py-[2rem] md:px-[4rem] 
  border-[1px] md:border-solid -border--color-golden -bg--color-black
  py-[2rem] px-[1rem]
  ">
    <div className="flex flex-col items-center justify-center
     ">
      <SubHeading title="Newsletter" className="flex flex-col items-center" />
      <h1 className="headtext__cormorant 
      leading-[83.2px] text-[64px]
      text-center mt-[1rem]
      "> Subscribe to Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="flex__center lg:flex-row mt-[3rem]
     w-[100%] flex-col 
    ">
      <input className='lg:w-[620px]  border-[1px] border-solid -border--color-golden
      rounded-[5px] text-[1rem] font-Cormorant -text--color-white lg:mr-[2rem] lg:mb-0 py-[0.75rem] px-[1rem]
      -bg--color-black
      mx-0 mt-0 mb-[2rem] w-[100%]
      ' type="email" placeholder="Enter your e-mail address" />
      <button className="custom__button w-max">Subscribe</button>
    </div>
  </div>
)

export default Newsletter
