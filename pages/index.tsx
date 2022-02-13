import Head from 'next/head'
import useClock from '../hooks/useClock'
import moment from 'moment'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Footer from '../container/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import FindUs from '../container/Findus/FindUs'
import Gallery from '../container/Gallery/Gallery'
import Laurels from '../container/Laurels/Laurels'
import Intro from '../container/Intro/Intro'
import Chef from '../container/Chef/Chef'
import SpecialMenu from '../container/Menu/SpecialMenu'
import AboutUs from '../container/AboutUs/AboutUs'
import Headerr from '../container/Header/Header'

import { debounce } from 'lodash'
import { useRecoilState } from 'recoil'
import { containerState } from '../atoms/containerAtom'

import CurrentContainer from '../components/CurrentContainer/CurrentContainer'

import styles from './index.module.css'
// import LocomotiveScroll from 'locomotive-scroll';
export default function Home() {
  const time = useClock()
  // console.log(moment(time.toString()), 'time')
  const introRef = useRef<any>()
  const [offset, setOffset] = useState<any>(0)
  const [hidePage, setHidePage] = useState(true)
  const [navbar, setNavbar] = useState(true)
  const [currentContainer, setCurrentContainer] = useState<string>('home')
  const scrollbarRef = useRef<any>(null)
  const [currentContainerAtom, setCurrentContainerAtom] =
    useRecoilState<string>(containerState)
  const debounceHide = useCallback(
    debounce((value) => {
      setHidePage(value)
      // console.log('work')
    }, 3000),
    []
  )
  const debounceGetCurrentContainer = useCallback(
    debounce((value) => {
      let currentContainer = getCurrentContainer(value)
      // console.log('cur', currentContainer)
      setCurrentContainer(currentContainer)
      setCurrentContainerAtom(currentContainer)
    }, 500),
    []
  )

  useEffect(() => {
    // console.log('state', navbar, hidePage)
  }, [navbar, hidePage])
  const debounceNav = useCallback(
    debounce((value) => setNavbar(value), 0),
    []
  )

  const onScroll = (value: any) => {
    const element = value.target
    debounceGetCurrentContainer(element.scrollTop)
    // console.log("value",element.scrollHeight ,element.scrollTop,element.clientHeight)
    setHidePage(false)
    debounceHide(true)
    const page = document.getElementById('home')

    let currentScrollPos = page?.getBoundingClientRect().y
    setOffset(currentScrollPos)
    if (offset < currentScrollPos!) {
      debounceNav(true)
    } else {
      debounceNav(false)
    }
  }

  const getCurrentContainer = (value: number) => {
    let containers = ['home', 'about', 'menu', 'chef', 'intro', 'gallery']
    let currentHeight = 70

    for (let i = 0; i < containers.length; i++) {
      let cont = containers[i]
      let element: any = document.getElementById(cont)?.getBoundingClientRect()
      currentHeight += element.height
      if (value <= currentHeight) {
        return cont
      }
    }
    return containers[containers.length - 1]
  }

  useEffect(() => {
    if (currentContainer === 'intro' && introRef.current) {
      introRef.current.playVideo()
    }
  }, [currentContainer])

  // useEffect(() => {
  //   const element = document.getElementsByClassName('controllclass')[0]
  //   element.scrollTo(0,3000)
  //   console.log('element', element.scrollTop)
  // }, [])

  const scrollIntoView = () => {
    const element: any = document.getElementById('scrolly')
    console.log('element', element)
    element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="h-screen -bg--color-black">
      <Head>
        <title>Restaurant UI UX</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Restaurant UI UX for e-commerce" />
      </Head>

      <main
        id="maincontainer"
        className=" h-screen overflow-y-scroll scrollbar-hide"
        onScroll={onScroll}
      >
        <Navbar navbar={navbar} />

        <div
          className={`relative`}

          // thumbMinSize={0}
        >
          <Headerr />

          <AboutUs />
          <SpecialMenu />
          <Chef />
          <Intro ref={introRef} />
          <Laurels />
          <Gallery />
          <FindUs />
          <Footer />
          <CurrentContainer
            hidePage={hidePage}
            currentContainer={currentContainer}
            debounceHide={debounceHide}
          ></CurrentContainer>
        </div>
      </main>
    </div>
  )
}
