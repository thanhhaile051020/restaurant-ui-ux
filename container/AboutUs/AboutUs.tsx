import React from 'react'

import { images } from '../../constants'

const AboutUs = () => (
  <div className="app__bg flex__center section__padding relative" id="about">
    <div className="flex__center absolute inset-0">
      <img
        className="z-0 h-[320px] w-[80%] sm:h-[415px] sm:w-[391px]"
        src={images.G.src}
        alt=""
      />
    </div>
    <div className="flex__center z-[2] w-[100%] flex-col md:flex-row">
      <div className=" flex flex-1 flex-col items-end justify-end text-right">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon.src} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans my-[2rem] mx-0 -text--color-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
      <div className="my-[4rem] mx-[0]  md:my-[2rem] md:mx-[4rem]">
        <img className="h-[910px]" src={images.knife.src} alt="about_knife" />
      </div>
      <div className="flex flex-1 flex-col items-start justify-start text-left">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon.src} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans my-[2rem] mx-0 -text--color-grey">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
)

export default AboutUs
