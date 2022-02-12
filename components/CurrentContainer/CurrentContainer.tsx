import React, { useEffect } from 'react'
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
} from 'react-icons/ri'
const CurrentContainer = ({
  debounceHide,
  hidePage,
  currentContainer,
}: any) => {
  useEffect(() => {
      console.log('hidePage',hidePage)
  }, [hidePage])

  return (
    <div
      onMouseEnter={() => debounceHide(false)}
      onMouseLeave={() => debounceHide(true)}
      id="pagee"
      className={`flex-end fixed right-[calc(50%-65px)] 
      z-[10] mb-[2rem] hidden 
    items-center justify-end space-x-2 -text--color-golden
    ${hidePage ? ' bottom-[-30%]' : 'bottom-[2%] '} 
     transition-[300ms] md:inline-flex`}
    >
      <a
        href="#home"
        className={`flex h-[15px] w-[15px] items-center  justify-center rounded-full 
        ${
          currentContainer === 'home'
            ? '-bg--color-golden -text--color-black'
            : '-bg--color-black -text--color-golden'
        } `}
      >
        {' '}
        <RiNumber1 className=" h-[10px] w-[10px]" />
      </a>

      <a
        href="#about"
        className={`flex h-[15px] w-[15px] items-center  justify-center rounded-full 
        ${
          currentContainer === 'about'
            ? '-bg--color-golden -text--color-black'
            : '-bg--color-black -text--color-golden'
        } `}
      >
        <RiNumber2 className=" h-[10px] w-[10px]" />
      </a>
      <a
        href="#menu"
        className={`flex h-[15px] w-[15px] items-center  justify-center rounded-full 
        ${
          currentContainer === 'menu'
            ? '-bg--color-golden -text--color-black'
            : '-bg--color-black -text--color-golden'
        } `}
      >
        {' '}
        <RiNumber3 className=" h-[10px] w-[10px]" />
      </a>
      <a
        href="#chef"
        className={`flex h-[15px] w-[15px] items-center  justify-center rounded-full 
        ${
          currentContainer === 'chef'
            ? '-bg--color-golden -text--color-black'
            : '-bg--color-black -text--color-golden'
        } `}
      >
        <RiNumber4 className=" h-[10px] w-[10px]" />
      </a>
      <a
        href="#intro"
        className={`flex h-[15px] w-[15px] items-center  justify-center rounded-full 
        ${
          currentContainer === 'intro'
            ? '-bg--color-golden -text--color-black'
            : '-bg--color-black -text--color-golden'
        } `}
      >
        {' '}
        <RiNumber5 className=" h-[10px] w-[10px]" />
      </a>
      <a
        href="#gallery"
        className={`flex h-[15px] w-[15px] items-center  justify-center rounded-full 
        ${
          currentContainer === 'gallery'
            ? '-bg--color-golden -text--color-black'
            : '-bg--color-black -text--color-golden'
        } `}
      >
        {' '}
        <RiNumber6 className=" h-[10px] w-[10px]  " />
      </a>
    </div>
  )
}

export default CurrentContainer
