import React, { FC, ReactNode, useEffect, useState } from 'react'

interface carouselAutoSlideProp {
  carouselSlides: Array<{ url: string; info: string }>
}
const Carousel: FC<carouselAutoSlideProp> = ({ carouselSlides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const delay = 6000
  useEffect(() => {
    const timer = setTimeout(
      () =>
        setCurrentIndex((prev) =>
          prev === carouselSlides.length - 1 ? 0 : prev + 1
        ),
      delay
    )
    return () => clearTimeout(timer)
  }, [currentIndex])

  const goToIndex = (slideIndex: number) => setCurrentIndex(slideIndex)

  return (
    <div className='w-full m-auto px-1 relative group mt-10 md:pt-20'>
      <div
        style={{ backgroundImage: `url(${carouselSlides[currentIndex].url})` }}
        className='h-[204px] w-full rounded-lg'
      />
      <p>{carouselSlides[currentIndex].info}</p>
      <div className='flex top-4 justify-center gap-2 py-4'>
        {carouselSlides.map((_, slideIndex) => {
          return (
            <div key={slideIndex} className='text-2xl cursor-pointer'>
              <div
                className='w-[5px] h-[5px] rounded-full bg-white'
                onClick={() => goToIndex(slideIndex)}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Carousel
