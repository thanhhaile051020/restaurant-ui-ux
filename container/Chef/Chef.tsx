import React from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import { images } from '../../constants'

const Chef = () => (
  <div className="app__bg app__wrapper section__padding" id="chef">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef.src} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title={"Chef's Word"} />
      <h1 className="headtext__cormorant">What we Believe In</h1>
      <div className="mt-[5rem] flex w-[100%] flex-col">
        <div className="flex items-end justify-start">
          <img
            className="mb-1 mt-0 ml-0 mr-0 h-[40px] w-[47px]"
            src={images.quote.src}
            alt="quote"
          />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          </p>
        </div>
        <p className="p__opensans">
          {' '}
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
      </div>
      <div className="mt-[3rem] w-[100%]">
        <p
          className="font-Cormorant text-[32px] leading-[41px]
         tracking-[0.04em] -text--color-golden"
        >
          Kevin Luo
        </p>
        <p className="p__opensans">Chef & Founder</p>
        <img
          className="mt-[3rem] w-[170px] md:w-[250px] 3xl:w-[370px]"
          src={images.sign.src}
          alt=""
        />
      </div>
    </div>
  </div>
)

export default Chef
