import Head from 'next/head'
import useClock from '../hooks/useClock'
import moment from 'moment'
import React, { useCallback, useEffect, useState } from 'react'
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
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
} from 'react-icons/ri'
import { debounce } from "lodash"
export default function Home() {
  const time = useClock()
  // console.log(moment(time.toString()), 'time')

  const [offset, setOffset] = useState<any>(0)
  const [hidePage, setHidePage] = useState(true)
  const [navbar, setNavbar] = useState(true)
  const debounceHide = useCallback(
    debounce(() => setHidePage(true), 3000),
    []
  )

  const debounceNav = useCallback(
    debounce((value) => setNavbar(true), 300),
    []
  )

  const onScroll = () => {
    setHidePage(false)
    debounceHide()
    const page = document.getElementById('home')

    let currentScrollPos = page?.getBoundingClientRect().y
    setOffset(currentScrollPos)
    if (offset < currentScrollPos!) {
      debounceNav(true)
    } else {
      debounceNav(false)
    }
  }

  return (
    <div className="-bg--color-black  ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        onScroll={onScroll}
        className="h-screen overflow-y-scroll scrollbar-hide"
        id="maincontainer"
      >
        <div className="relative">
          <Navbar navbar={navbar} />
          <Headerr />
          <AboutUs />
          <SpecialMenu />
          <Chef />
          <Intro />
          <Laurels />
          <Gallery />
          <FindUs />
          <Footer />

          <div
            id="pagee"
            className={`flex-end fixed right-[40%] bottom-[0%]
            z-[10] mb-[2rem] hidden 
          items-center justify-end space-x-2 -text--color-golden
           ${
             hidePage ? 'translate-y-96' : 'translate-y-0 '
           } transition-[300ms] md:inline-flex`}
          >
            <a
              href="#home"
              className="flex h-[20px] w-[20px]  items-center  justify-center rounded-full -bg--color-golden -text--color-black"
            >
              {' '}
              <RiNumber1 className=" h-[15px] w-[15px]" />
            </a>

            <a
              href="#about"
              className="flex h-[20px] w-[20px] items-center  justify-center rounded-full -bg--color-golden -text--color-black"
            >
              <RiNumber2 className=" h-[15px] w-[15px]" />
            </a>
            <a
              href="#menu"
              className="flex h-[20px] w-[20px] items-center  justify-center rounded-full -bg--color-golden -text--color-black"
            >
              {' '}
              <RiNumber3 className=" h-[15px] w-[15px]" />
            </a>
            <a
              href="#chef"
              className="flex h-[20px] w-[20px] items-center  justify-center rounded-full -bg--color-golden -text--color-black"
            >
              <RiNumber4 className=" h-[15px] w-[15px]" />
            </a>
            <a
              href="#intro"
              className="flex h-[20px] w-[20px] items-center  justify-center rounded-full -bg--color-golden -text--color-black"
            >
              {' '}
              <RiNumber5 className=" h-[15px] w-[15px]" />
            </a>
            <a
              href="#gallery"
              className="flex h-[20px] w-[20px] items-center  justify-center rounded-full -bg--color-golden -text--color-black"
            >
              {' '}
              <RiNumber6 className=" h-[15px] w-[15px]  " />
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
