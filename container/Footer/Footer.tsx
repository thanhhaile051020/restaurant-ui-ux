import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import FooterOverlay from '../../components/FooterOverlay/FooterOverlay'
import Newsletter from '../../components/FooterOverlay/Newsletter'
import { images } from '../../constants'

const Footer = ({}) => {
  return (
    <div
      className="section__padding relative z-[0]
     flex w-[100%] flex-col items-center justify-start -bg--color-black
    "
    >
      <FooterOverlay />
      <Newsletter />
      <div className="z-[2] mt-[5rem] flex w-[100%] lg:items-start lg:justify-between px-[0rem] lg:px-[2rem] py-0 lg:flex-row 
      flex-col justify-center items-center">
        <div className="lg:m-[1rem] flex flex-1 flex-col items-center m-[2rem] w-[100%]">
          <h1 className='font-Cormorant -text--color-white font-[400] 
          tracking-[0.04em] capitalize text-[32px] leading-[41.6px] mb-[1rem]'>Contact Us</h1>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 212-555-1230</p>
        </div>
        <div className="lg:m-[1rem] flex flex-1 flex-col items-center m-[2rem] w-[100%]">
          <img
            className="mb-[0.75rem] w-[210px]"
            src={images.gericht.src}
            alt=""
          />
          <p className="p__opensans text-center">
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <img src={images.spoon.src} className="spoon__img mt-[15px]" alt="" />
          <div className="mt-[0.5rem] flex">
            <FiFacebook className="text-[24px] m-[0.5rem] cursor-pointer -text--color-white hover:-text--color-golden" />
            <FiTwitter className="text-[24px] m-[0.5rem] cursor-pointer -text--color-white hover:-text--color-golden" />
            <FiInstagram className="text-[24px] m-[0.5rem] cursor-pointer -text--color-white hover:-text--color-golden" />
          </div>
        </div>
        <div className="lg:m-[1rem] flex flex-1 flex-col items-center m-[2rem] w-[100%]">
          {' '}
          <h1 className='font-Cormorant -text--color-white font-[400] 
          tracking-[0.04em] capitalize text-[32px] leading-[41.6px] mb-[1rem]'>Working Hours</h1>
          <p className="p__opensans odd:mb-[1rem]">Monday-Friday:</p>
          <p className="p__opensans odd:mb-[1rem]">08:00 Am  - 12:00 am</p>
          <p className="p__opensans odd:mb-[1rem]">Saturday-Sunday:</p>
          <p className="p__opensans odd:mb-[1rem]">07:00 Am  - 11:00 pm</p>
        </div>
      </div>
      <div className="z-[2] mt-[3rem]">
        <p className="p__opensans">2021 Gerícht. All Rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
