'use client'
import React, { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { navBarLinks } from '@/lib/blackOp'
import Button from '../blackOpButton/Button'
import BpIcon from '../bpIcons/BpIcon'

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false)
  const sideNavRef = useRef<HTMLUListElement | null>(null)

  return (
    <nav className='flex bg-black h-24 w-full relative justify-between items-center z-10'>
      <Link
        href={'/'}
        className='z-[11] fixed top-[16px] left-[4%] md:left-[2%]'
      >
        <Image
          src={'/logo.jpg'}
          alt='logo'
          width={100}
          height={50}
          className='max-w-full max-h-[50px] object-cover'
        />
      </Link>
      <div className='fixed z-[2] top-[12px] md:right-[2%]'>
        <ul className='hidden text-white md:inline-flex items-center'>
          {navBarLinks?.map(({ linkTitle, link }, index) => (
            <Link
              href={'/'}
              key={index}
              className='mr-5 text-[15px] link-transition'
            >
              {linkTitle}
            </Link>
          ))}
          <Link href={'/'}>
            <Button type='button'>Member Login</Button>
          </Link>
        </ul>
      </div>

      <div
        className={`md:hidden z-[2] fixed top-[16px] right-[20px] cursor-pointer`}
        onClick={() => setOpen((prev) => !prev)}
      >
        {!open && <BpIcon iconName='hamburgerIcon' />}
        {open && <BpIcon iconName='cancelIcon' />}
      </div>
      <ul
        ref={sideNavRef}
        className={`fixed w-[100vw] h-[100vh] bg-black flex flex-col lg:hidden top-[54px] left-0 z-20 p-[20px] ${
          !open ? '-translate-x-full' : ''
        } transition-transform duration-500 ease-in-out`}
      >
        {navBarLinks?.map(({ linkTitle, link }, index) => (
          <Link
            href={'/'}
            key={index}
            className='text-[15px] pb-4 text-white font-[600] list-none'
          >
            {linkTitle}
          </Link>
        ))}
        <Link href={'/'} className='mt-6'>
          <Button type='button'>Member Login</Button>{' '}
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
