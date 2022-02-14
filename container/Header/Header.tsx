import React, { useEffect, useState } from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import Title from '../../components/Title/Title'

import { images } from '../../constants'
import styles from './Header.module.css'

const Headerr = ({}) => {
  return (
    <div className="app__wrapper section__padding  -bg--color-black" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavor" />

        <Title
          className="p__cormorant text-[90px] leading-[117px]
           tracking-[.04em] -text--color-golden"
          container="home"
        >
          The Key to Fine Dining
        </Title>
        <p className="p__opensans my-[2rem] mx-0">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button className="custom__button">Explore Menu</button>
      </div>
      <div className="app__wrapper_img ">
        <img src={images.welcome.src} alt="" />
      </div>
    </div>
  )
}

export default Headerr
