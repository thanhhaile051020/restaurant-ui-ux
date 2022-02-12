import { debounce } from 'lodash'
import React, { useCallback, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { containerState } from '../../atoms/containerAtom'
import { images } from '../../constants'
import styles from './Title.module.css'
const Title = ({
  children,
  className,
}: {
  children: any
  className: string
}) => {
  const [conertTitle, setConertTitle] = useState([])
  const [animation, setAnimation] = useState(false)
  const [currentContainerAtom, setCurrentContainerAtom] =
    useRecoilState<string>(containerState)
  useEffect(() => {
    if (children[1] == '') return
    let conertTitle = children[1].split(' ')
    setConertTitle(conertTitle)
  }, [])
  const debounceAnimation = useCallback(
    debounce(() => setAnimation(false), 3000),
    []
  )
  useEffect(() => {
    if (currentContainerAtom === 'home') {
      setAnimation(true)
      debounceAnimation()
    }
  }, [currentContainerAtom])

  return (
    <h1 className={`${className} ${styles.textAnimation}`}>
      {conertTitle.map((title: string, index) => (
        <span
        key={index}
          className={`${className}  ${styles.span} 
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
