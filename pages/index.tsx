import Head from 'next/head'
import useClock from '../hooks/useClock'
import moment from 'moment'
import React from 'react'
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
export default function Home() {
  const time = useClock()
  // console.log(moment(time.toString()), 'time')
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div>
          <Navbar />
          <Headerr />
          <AboutUs />
          <SpecialMenu />
          <Chef />
          <Intro />
          <Laurels />
          <Gallery />
          <FindUs />
          <Footer />
        </div>
      </main>

      
    </div>
  )
}
