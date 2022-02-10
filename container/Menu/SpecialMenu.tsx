import React from 'react'
import MenuItem from '../../components/Menuitem/MenuItem'
import SubHeading from '../../components/SubHeading/SubHeading'
import { images, data } from '../../constants'

const SpecialMenu = () => (
  <div
    className="flex__center section__padding flex-col -bg--color-black"
    id="menu"
  >
    <div className="mb-[2rem] text-center  ">
      <SubHeading
        title="Menu That Fits You Palatte"
        className="flex flex-col items-center text-center"
      />
      <h1 className="headtext__cormorant font-bold"> Today's Special</h1>
    </div>
    <div
      className="my-[2rem] mx-[0] flex w-[100%] flex-col
     xl:items-start justify-center xl:flex-row items-center"
    >
      <div className="flex__center w-[100%] flex-1 flex-col">
        <p
          className="font-[45px] sm: font-Cormorant
           text-[35px] font-[600] leading-[48.5px] 
        tracking-[0.04em] -text--color-white sm:text-[45px] md:leading-[58.5px]"
        >
          Wine & Beer
        </p>
        <div className="my-[2rem] mx-0 flex  w-[100%] flex-col">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>
      <div className="w-[100%] sm:my-[0] sm:mx-[2rem] sm:w-[410px]  3xl:w-[650px]">
        <img
          className="h-auto w-[100%] md:my-[3rem] md:mx-0 lg:my-[0rem] lg:mx-0 3xl:w-[920px]"
          src={images.menu.src}
          alt=""
        />
      </div>
      <div className="flex__center w-[100%] flex-1 flex-col">
        <p
          className="font-[45px] sm: font-Cormorant
          text-[35px] font-[600] leading-[48.5px] 
       tracking-[0.04em] -text--color-white sm:text-[45px] md:leading-[58.5px]"
        >
          Cocktails
        </p>
        <div  className="my-[2rem] mx-0 flex  w-[100%] flex-col">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="mt-[15px]">
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
)

export default SpecialMenu
