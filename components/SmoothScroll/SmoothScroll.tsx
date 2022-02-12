import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Scrollbar from 'smooth-scrollbar'

const options = {
  damping: 0.07,
}

const SmoothScroll = () => {
  useEffect(() => {
    Scrollbar.init(document.getElementById("maincontainer")!, options)
  })

  return null
}

SmoothScroll.propTypes = {}

export default SmoothScroll
