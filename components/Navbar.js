'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="px-4 md:px-6 py-4" style={{ backgroundColor: '#2B5271' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and School Name */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-12 h-12 md:w-16 md:h-16 relative flex-shrink-0">
            <Image
              src="/image 1.png"
              alt="Kalp Vriksh Public School Logo"
              width={64}
              height={64}
              className="rounded-full object-contain"
            />
          </div>
          <h1 
            className="text-white whitespace-nowrap"
            style={{
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }}
          >
            Kalp Vriksh Public School
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link href="/" className="text-white hover:text-yellow-300 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-yellow-300 transition-colors">
            About
          </Link>
          <Link href="/academics" className="text-white hover:text-yellow-300 transition-colors">
            Academics
          </Link>
          <Link href="/admission" className="text-white hover:text-yellow-300 transition-colors">
            Admission
          </Link>
          <Link href="/gallery" className="text-white hover:text-yellow-300 transition-colors">
            Gallery
          </Link>
          <Link href="/mandatory-disclosure" className="text-white hover:text-yellow-300 transition-colors">
            Mandatory Disclosure
          </Link>
        </div>

        {/* Desktop Enquire Button */}
        <button 
          className="hidden lg:block text-white font-semibold"
          style={{
            backgroundColor: '#FFB606',
            width: '122px',
            height: '44px',
            borderRadius: '29px',
            paddingTop: '10px',
            paddingRight: '30px',
            paddingBottom: '10px',
            paddingLeft: '30px',
            gap: '10px',
            transition: 'all 300ms ease-out',
          }}
        >
          Enquire
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
          <div className="flex flex-col gap-4 pt-4">
            <Link
              href="/"
              className="text-white hover:text-yellow-300 transition-colors px-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-yellow-300 transition-colors px-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/academics"
              className="text-white hover:text-yellow-300 transition-colors px-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Academics
            </Link>
            <Link
              href="/admission"
              className="text-white hover:text-yellow-300 transition-colors px-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Admission
            </Link>
            <Link
              href="/gallery"
              className="text-white hover:text-yellow-300 transition-colors px-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/mandatory-disclosure"
              className="text-white hover:text-yellow-300 transition-colors px-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Mandatory Disclosure
            </Link>
            <button 
              className="text-white font-semibold mt-2"
              style={{
                backgroundColor: '#FFB606',
                width: '122px',
                height: '44px',
                borderRadius: '29px',
                paddingTop: '10px',
                paddingRight: '30px',
                paddingBottom: '10px',
                paddingLeft: '30px',
                gap: '10px',
                transition: 'all 300ms ease-out',
              }}
            >
              Enquire
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

