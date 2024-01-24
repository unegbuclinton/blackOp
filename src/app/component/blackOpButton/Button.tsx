import React, { ReactNode } from 'react'

const Button = ({
  children,
  type,
  className,
}: {
  children: ReactNode
  type: 'button' | 'submit'
  className?: string
}) => {
  return (
    <button
      type={type}
      className={`${className} outline-none text-[15px] font-semibold rounded-md px-2.5 py-2 bg-white text-black border-none justify-center items-center}`}
    >
      {children}
    </button>
  )
}

export default Button
