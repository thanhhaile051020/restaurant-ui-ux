
import React from 'react'
import { images } from '../../constants'
const SubHeading = ({title,className}:{title:any,className:string}) => (
  <div className={`mb-[1rem] sm:mb-[0.5rem] ${className}`}>
    <p className={`p__cormorant -text--color-white `}>{title}</p>
    <img src={images.spoon.src} alt="" className='spoon__img' />
  </div>
)
SubHeading.defaultProps ={
  className:''
}
export default SubHeading
