import React, { useState, useRef, ReactNode } from 'react'
import BpIcon from '../bpIcons/BpIcon'

const Accordion = ({
  answer,
  question,
}: {
  answer: ReactNode
  question: string
}) => {
  const [isPlus, setIsPlus] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const toggleIcon = () => {
    setIsPlus((prev) => !prev)
  }

  const getContentHeight = () => {
    if (contentRef.current) {
      return isPlus ? contentRef.current.scrollHeight + 'px' : '0'
    }
    return '0'
  }

  return (
    <div
      id='faq'
      className='py-3 shadow-lg px-4 rounded-xl w-fit mb-6 text-left'
    >
      <div
        onClick={toggleIcon}
        className='flex items-center justify-between cursor-pointer'
      >
        <div className='flex items-center justify-between w-full'>
          <p className='font-semibold '>{question}</p>
          {!isPlus && <BpIcon iconName='addIcon' />}
          {isPlus && <BpIcon iconName='minusIcon' />}
        </div>
      </div>
      <div
        ref={contentRef}
        style={{
          maxHeight: getContentHeight(),
          overflow: 'hidden',
          transition: 'max-height 0.2s ease-in-out',
        }}
      >
        <div className='mt-4'>{answer}</div>
      </div>
    </div>
  )
}

export default Accordion
