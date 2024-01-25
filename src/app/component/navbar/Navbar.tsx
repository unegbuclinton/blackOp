'use client'
import React, { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { navBarLinks } from '@/lib/blackOp'
import Button from '../blackOpButton/Button'
import BpIcon from '../bpIcons/BpIcon'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false)
  const sideNavRef = useRef<HTMLUListElement | null>(null)
  const pathname = usePathname()
  const changeLogo = pathname === '/catalyst'
  return (
    <nav className='flex fixed bg-black h-20 w-full px-4 justify-between items-center z-10'>
      <Link href={'/'} onClick={() => setOpen(false)} className='z-[11] '>
        {!changeLogo && (
          <Image
            src={'/logo.jpg'}
            alt='logo'
            width={100}
            height={50}
            className='max-w-full max-h-[50px] object-cover'
          />
        )}
        {changeLogo && (
          <Image
            src={'/catalystLogo.png'}
            alt='logo'
            width={100}
            height={50}
            className='max-w-full max-h-[50px] object-cover'
          />
        )}
      </Link>
      <div className=''>
        <ul className='hidden text-white md:inline-flex items-center'>
          {navBarLinks?.map(({ linkTitle, link }, index) => (
            <Link
              href={link}
              key={index}
              className='mr-5 text-[15px] link-transition hover:text-secondary'
            >
              {linkTitle}
            </Link>
          ))}
          <a href={'http://blackops.circle.so/'}>
            <Button className='' type='button'>
              Member Login
            </Button>
          </a>
        </ul>
      </div>

      <div
        className={`md:hidden z-[2] cursor-pointer`}
        onClick={() => setOpen((prev) => !prev)}
      >
        {!open && <BpIcon iconName='hamburgerIcon' />}
        {open && <BpIcon iconName='cancelIcon' />}
      </div>
      <ul
        ref={sideNavRef}
        className={`fixed w-[100vw] h-[100vh] bg-black flex flex-col lg:hidden top-[63px] left-0 z-20 p-4 pl-[28px] ${
          !open ? '-translate-x-full' : ''
        } transition-transform duration-500 ease-in-out`}
      >
        {navBarLinks?.map(({ linkTitle, link }, index) => (
          <Link
            href={link}
            key={index}
            onClick={() => setOpen(false)}
            className='text-[15px] pb-4 text-white font-[600] list-none'
          >
            {linkTitle}
          </Link>
        ))}
        <a href={'http://blackops.circle.so/'}>
          <Button type='button'>Member Login</Button>{' '}
        </a>
      </ul>
    </nav>
  )
}

export default Navbar
