import React, { ReactNode } from 'react'

const Button = ({
  children,
  type,
  className,
  secondary,
}: {
  children: ReactNode
  type: 'button' | 'submit'
  className?: string
  secondary?: boolean
}) => {
  return (
    <button
      type={type}
      className={` outline-none ${
        secondary
          ? 'bg-secondaryShadow border-secondary border border-solid text-white'
          : 'border-none bg-white'
      } text-[15px] font-semibold rounded-md px-2.5 py-2 text-black ${className} hover:border-secondary justify-center items-center}`}
    >
      {children}
    </button>
  )
}

export default Button
