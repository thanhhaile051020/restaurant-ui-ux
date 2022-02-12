import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'

const overscrollOptions = {
  enable: true,
  effect: 'bounce',
  damping: 0.15,
  maxOverscroll: 150,
}

const options = {
  damping: 0.07,
  plugin: {
    overscroll: { ...overscrollOptions },
  },
}

const SmoothScroll = () => {
  useEffect(() => {
    Scrollbar.use(OverscrollPlugin)
    Scrollbar.init(document.getElementById('maincontainer')!, options)

    return () => {
      if (Scrollbar)
        Scrollbar.destroy(document.getElementById('maincontainer')!)
    }
  }, [])

  return null
}

SmoothScroll.propTypes = {}

export default SmoothScroll
