"use client"

import Image from 'next/image'
import { useRef } from 'react'

export default function PhotoGallery({ images = [] }) {
  const ref = useRef(null)
  const scroll = (dir) => {
    if (!ref.current) return
    const isMobile = window.innerWidth < 768
    // Scroll by one image width + gap (16px)
    const scrollAmount = isMobile 
      ? ref.current.offsetWidth - 16 
      : (ref.current.offsetWidth / 3) + (16 / 3)
    ref.current.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' })
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Photo Gallery</h3>
        <div className="flex gap-2">
          <button onClick={() => scroll(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
              <rect width="38" height="38" rx="19" transform="matrix(-1 0 0 1 38 0)" fill="#396D96" fillOpacity="0.4"/>
              <path d="M24.2954 11.1425L22.6155 9.46417L13.4654 18.6111C13.3179 18.7576 13.2009 18.9319 13.121 19.1239C13.0411 19.3159 13 19.5218 13 19.7297C13 19.9376 13.0411 20.1435 13.121 20.3355C13.2009 20.5275 13.3179 20.7018 13.4654 20.8483L22.6155 30L24.2938 28.3217L15.7058 19.7321L24.2954 11.1425Z" fill="white"/>
            </svg>
          </button>
          <button onClick={() => scroll(1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
              <rect width="38" height="38" rx="19" fill="#396D96"/>
              <path d="M13.7046 11.1425L15.3845 9.46417L24.5346 18.6111C24.6821 18.7576 24.7991 18.9319 24.879 19.1239C24.9589 19.3159 25 19.5218 25 19.7297C25 19.9376 24.9589 20.1435 24.879 20.3355C24.7991 20.5275 24.6821 20.7018 24.5346 20.8483L15.3845 30L13.7062 28.3217L22.2942 19.7321L13.7046 11.1425Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>

      <div ref={ref} className="flex gap-4 overflow-x-scroll no-scrollbar py-2">
        {images.map((src, i) => (
          <div key={i} className="min-w-[calc(100%-16px)] md:min-w-[calc(33.333%-10.67px)] rounded-lg overflow-hidden bg-white/5">
            <div className="relative w-full h-[250px] md:h-[280px]">
              <Image src={src} alt={`gallery-${i}`} fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
