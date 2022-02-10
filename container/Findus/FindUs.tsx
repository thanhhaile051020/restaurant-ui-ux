import React from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import { images } from '../../constants'
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant mb-[3rem]">Find Us</h1>
      <div>
        <p className="p__opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <p className="p__cormorant my-[2rem] mx-0 -text--color-golden">
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button type="button" className="custom__button mt-[2rem]">
        View Us
      </button>
    </div>
    <div className=" app__wrapper_img flex-1">
      <img src={images.findus.src} alt="" />
    </div>
  </div>
)

export default FindUs
