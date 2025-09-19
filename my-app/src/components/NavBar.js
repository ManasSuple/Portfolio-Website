import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'} className='ml-4'>About</Link>
            <Link href={'/projects'} className='ml-4'>Contact</Link>
            <Link href={'/certificates'} className='ml-4'>Certificates</Link>
        </nav>
        <Logo />
        <nav>
            <Link href="/" target={"_blank"}>Twitter</Link>
            <Link href="/" target={"_blank"}>Twitter</Link>
            <Link href="/" target={"_blank"}>Twitter</Link>
            <Link href="/" target={"_blank"}>Twitter</Link>
            <Link href="/" target={"_blank"}>Twitter</Link>
        </nav>
    </header>
  )
}

export default NavBar