import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import styles from './Navbar.module.css'
import images from '../../constants/images'
const Navbar = ({ navbar }: { navbar: boolean }) => {
  const [toggleMenu, setToggleMenu] = useState<any>(null)
  const [offset, setOffset] = useState<any>(null)

  return (
    <nav
      className={`fixed flex  items-center
     justify-between -bg--color-black p-[1rem] transition-[100ms] ease-out sm:py-[1rem] 
      sm:px-[2rem] ${navbar ? 'top-[0px]' : 'top-[-90.960px]'} z-[10] w-[100%]`}
    >
      <div className=" flex items-center justify-start">
        <a href="/">
          <img
            className="w-[110px] sm:w-[150px] 2xl:w-[210px] "
            src={images.gericht.src}
            alt="app logo"
          />
        </a>
      </div>
      <ul className={`${styles.li} `}>
        <li className="p__opensans   ">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans ">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans ">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans ">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans ">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className={` ${styles.navbar_login}`}>
        <a href="#login" className="p__opensans ">
          Login / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className={'sm:inline-flex lg:hidden'}>
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
          className="cursor-pointer"
        />

        {toggleMenu !== null && (
          <div
            className={`flex__center   ${
              toggleMenu ? 'slide-bottom' : 'slide-top'
            } fixed top-0 left-0 z-[5]
            h-[100vh] w-[100%] flex-col -bg--color-black transition-[0.5s] lg:hidden`}
          >
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="absolute top-[20px] right-[20px] cursor-pointer -text--color-golden"
              onClick={() => setToggleMenu(false)}
            />
            <ul>
              {['home', 'about', 'menu', 'awards', 'contact'].map(
                (item, index) => (
                  <li
                    key={index}
                    className="m-[2rem] text-center font-Cormorant text-[2rem] -text--color-golden hover:-text--color-white"
                  >
                    <a href={`#${item}`}>{item}</a>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
