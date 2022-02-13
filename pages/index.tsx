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
import { BsArrowRightShort } from 'react-icons/bs'

import { debounce } from 'lodash'
import { useRecoilState } from 'recoil'
import { containerState } from '../atoms/containerAtom'
import Scrollbar from 'react-smooth-scrollbar'
import SmoothScroll from '../components/SmoothScroll/SmoothScroll'

import CurrentContainer from '../components/CurrentContainer/CurrentContainer'

import styles from './index.module.css'
// import LocomotiveScroll from 'locomotive-scroll';
export default function Home() {
  const time = useClock()
  // console.log(moment(time.toString()), 'time')
  const introRef = useRef<any>()
  const [offsetY, setOffsetY] = useState<any>(0)
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

  const onScroll = (value: any, data: any) => {
    const { offset } = value

    debounceGetCurrentContainer(offset.y)
    // console.log("value",element.scrollHeight ,element.scrollTop,element.clientHeight)
    setHidePage(false)
    debounceHide(true)
    const page = document.getElementById('home')

    let currentScrollPos = page?.getBoundingClientRect().y
    setOffsetY(currentScrollPos)
    // console.log('alo', offsetY,currentScrollPos)
    if (offsetY < currentScrollPos!) {
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

  return (
    <div className="-bg--color-black h-screen">
      <Head>
        <title>Restaurant UI UX</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Restaurant UI UX for e-commerce" />
      </Head>

      <main id="maincontainer " className="relative ">
        <Navbar navbar={navbar} />
        <Scrollbar
          ref={scrollbarRef}
          className={`h-screen overflow-y-scroll scrollbar-hide ${styles} `}
          onScroll={onScroll}
          thumbMinSize={0}
        >
          <div className=" -bg--color-black">
            <Headerr />
            <AboutUs />
            <SpecialMenu />
            <Chef />
            <Intro ref={introRef} />
            <Laurels />
            <Gallery />
            <FindUs />
            <Footer />
          </div>
        </Scrollbar>
        <CurrentContainer
          hidePage={hidePage}
          currentContainer={currentContainer}
          debounceHide={debounceHide}
        ></CurrentContainer>
      </main>
    </div>
  )
}
