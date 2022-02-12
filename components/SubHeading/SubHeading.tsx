import React, { useEffect } from 'react'
import { images } from '../../constants'
import styles from './SubHeading.module.css'
const SubHeading = ({
  title,
  className,
}: {
  title: any
  className: string
}) => {
  useEffect(() => {
    if (title == '') return
    let conertTitle = title.split(' ')
    // console.log('conertTitle', conertTitle)
  }, [title])

  return (
    <div className={`mb-[1rem] sm:mb-[0.5rem] ${className} ${styles.textAnimation}`}>
      <span className={`p__cormorant -text--color-white ${styles.span}`}>{title}</span>
      <img src={images.spoon.src} alt="" className="spoon__img" />
    </div>
  )
}
SubHeading.defaultProps = {
  className: '',
  title: '',
}
export default SubHeading
