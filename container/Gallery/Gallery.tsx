import React, { useRef } from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import { images } from '../../constants'
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs'

const galleries = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
]

const Gallery = () => {
  const scrollRef = useRef<any>()

  const scroll = (dir: string) => {
    const { current } = scrollRef
    if (dir === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }
  }
  return (
    <div
      className="flex__center flex flex-col -bg--color-black py-[4rem] 
      pr-0  pl-[2rem] md:pl-[4rem] lg:flex-row lg:pl-[6rem] " id="gallery"
    >
      <div
        className="flex md:min-w-[500px] flex-1 flex-col items-start justify-center pr-[2rem]
      3xl:min-w-[1000px]
      3xl:pr-[4rem] 
      "
      >
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant ">Photo Gallery</h1>
        <p className="p__opensans mt-[2rem] -text--color-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__button mt-[1rem]">
          View More
        </button>
      </div>
      <div className="ml-[0rem] relative my-[5rem] mx-0 flex max-w-[100%] flex-1 flex-row lg:m-0 lg:max-w-[50%]">
        <div
          className={` flex w-max flex-row overflow-x-scroll scrollbar-hide
           `}
          ref={scrollRef}
        >
          {galleries.map((img, index) => (
            <div
              className="min-w-[240px] h-[320px] flex__center relative mr-[2rem] md:h-[447px] md:min-w-[301px] ease-linear 3xl:h-[550px] 3xl:min-w-[400px]"
              key={`gallery_img-${index + 1}`}
            >
              <img
                className="h-[100%] w-[100%] object-cover opacity-[1] transition-[0.5s]
               hover:opacity-[0.35]"
                src={img.src}
                alt=""
              />
              <BsInstagram
                className="absolute cursor-pointer text-[2rem] 
              -text--color-white opacity-[0.5] transition-[0.5s] ease-in-out hover:opacity-[1]"
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-[5%] flex w-[100%] items-center justify-between py-[0] px-[1rem]">
          <BsArrowLeftShort
            className="cursor-pointer rounded-[5px] -bg--color-black text-[2rem] -text--color-golden 
          hover:-text--color-white
          "
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className="cursor-pointer rounded-[5px] -bg--color-black text-[2rem] -text--color-golden 
          hover:-text--color-white
          "
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  )
}
export default Gallery
