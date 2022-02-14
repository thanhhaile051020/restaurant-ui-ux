import { debounce } from 'lodash'
import React, { useCallback, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { containerState } from '../../atoms/containerAtom'
import { images } from '../../constants'
import styles from './Title.module.css'
const Title = ({
  children,
  className,
  container,
}: {
  children: any
  className: string
  container: string
}) => {
  const [conertTitle, setConertTitle] = useState([])
  const [animation, setAnimation] = useState(false)
  const [currentContainerAtom, setCurrentContainerAtom] =
    useRecoilState<string>(containerState)
  useEffect(() => {
    console.log('child', children)
    if (children == '') return
    let conertTitle = children.split(' ')
    setConertTitle(conertTitle)
  }, [])
  const debounceAnimation = useCallback(
    debounce(() => setAnimation(false), 1500),
    []
  )
  useEffect(() => {
    if (currentContainerAtom === container) {
      setAnimation(true)
      debounceAnimation()
    }
  }, [currentContainerAtom])

  return (
    <h1 className={`${className} ${styles.textAnimation} `}>
      {conertTitle.map((title: string, index) => (
        <span
          key={index}
          style={{ animationDelay: (index + 1) / 10 + 's' }}
          className={` ${styles.span}  ${animation ? styles.active : ''}
      `}
        >
          {title}&nbsp;
        </span>
      ))}
    </h1>
  )
}
Title.defaultProps = {
  className: '',
}
export default Title
