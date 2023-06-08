'use client'

import Link from "next/link"
import { useEffect, useRef, useState } from "react";
import PageWidth from "./PageWidth";

interface NavbarProps {
  navigationItems: {
    label: string;
    href: string | null;
  }[];
  logoUrl: string;
}

const Navbar = ({ navigationItems, logoUrl }: NavbarProps) => {
  const navbarRef = useRef<HTMLDivElement>(null)

  const [showMobileNav, setShowMobileNav] = useState(false)
  useEffect(() => {

    const navbar = navbarRef.current
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 64) {
        navbar?.classList.replace('bg-transparent', 'bg-white')
        navbar?.classList.replace('text-white', 'text-black')
        navbar?.classList.replace('py-2', 'py-0')
        navbar?.classList.add('shadow-md')
      } else {
        navbar?.classList.replace('bg-white', 'bg-transparent')
        navbar?.classList.replace('text-black', 'text-white')
        navbar?.classList.replace('py-0', 'py-2')
        navbar?.classList.remove('shadow-md')
      }
    })
  }, [])

  return (
    <header ref={navbarRef} className="w-full fixed top-0 bg-transparent py-2 z-50 text-white transition-all duration-700">
      <PageWidth className="px-4 flex justify-between items-center py-4 gap-10">
        <div className="cursor-pointer">
          <img src={logoUrl} alt="logo" className="h-16 w-auto" />
        </div>
        <ul className="hidden lg:flex flex-1 gap-8">
          {navigationItems?.map(({ label, href }) => (
            <li key={label} className="hover:opacity-100 opacity-70 transition-opacity">
              <Link href={href || ''}>{label}</Link>
            </li>
          ))}
        </ul>
        <button className="hidden lg:block bg-primary py-3 px-6 rounded-full text-white shadow hover:opacity-70 transition-opacity duration-500">Contact us</button>
        <button onClick={() => setShowMobileNav(prev => !prev)} className="border border-primary px-2 py-4 flex flex-col justify-center relative lg:!hidden rounded-md">
          <div className={`absolute ${showMobileNav ? 'rotate-45' : 'translate-y-2'} border border-primary w-6 transition-all duration-500`}></div>
          <div className={`border ${showMobileNav ? 'opacity-0' : ''} border-primary w-6 transition-all duration-500`}></div>
          <div className={`absolute ${showMobileNav ? 'rotate-[135deg]' : '-translate-y-2'} border border-primary w-6 transition-all duration-500`}></div>
        </button>
      </PageWidth>
      <div className={`${showMobileNav ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'} grid page-width transition-all duration-500 lg:hidden px-10`}>
        <ul className={`flex flex-col flex-1 text-[18px] justify-end gap-2 overflow-hidden`}>
          {navigationItems?.map(({ label, href }) => (
            <li className={`leading-[1.5] text-black first:pt-4`} key={label}>
              <Link href={href || '#'}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>

    </header>
  )
}

export default Navbar