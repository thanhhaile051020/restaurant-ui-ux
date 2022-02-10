import React from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import { images, data } from '../../constants'

const AwardCard = ({ award: { imgUrl, title, subtitle } }: { award: any }) => (
  <div
    className="my-[1rem] mx-0 flex min-w-[100%] 
  flex-1 items-start justify-start
  sm:m-[1rem] sm:min-w-[230px] 3xl:min-w-[390px]
  "
  >
    <img className="h-[50px] w-[50px]" src={imgUrl.src} alt="" />
    <div className="ml-[1rem] flex flex-col ">
      <p className="p__cormorant -text--color-golden">{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="mt-[3rem] flex flex-wrap items-center justify-start">
        {data.awards.map((award, index) => (
          <AwardCard award={award} key={award.title + index} />
        ))}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels.src} alt="" />
    </div>
  </div>
)

export default Laurels
