import React, { useState, useEffect } from 'react'
import BpIcon from '../bpIcons/BpIcon'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      {isVisible && (
        <p
          className='fixed flex justify-center items-center bottom-5 right-5 bg-secondary w-8 h-8 cursor-pointer rounded-full'
          onClick={scrollToTop}
        >
          <BpIcon iconName='upArrowIcon' />
        </p>
      )}
    </div>
  )
}

export default ScrollToTopButton
