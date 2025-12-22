"use client"

import Image from 'next/image'
import { useRef, useState } from 'react'

// Extract YouTube video ID from various URL formats
function getYouTubeId(url) {
  if (!url) return null
  
  // Handle youtu.be format
  const shortMatch = url.match(/youtu\.be\/([^?&]+)/)
  if (shortMatch) return shortMatch[1]
  
  // Handle youtube.com/watch format
  const watchMatch = url.match(/[?&]v=([^?&]+)/)
  if (watchMatch) return watchMatch[1]
  
  // Handle youtube.com/shorts format
  const shortsMatch = url.match(/\/shorts\/([^?&]+)/)
  if (shortsMatch) return shortsMatch[1]
  
  return null
}

// Get YouTube thumbnail URL
function getYouTubeThumbnail(videoId) {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
}

export default function VideoGallery({ videos = [] }) {
  const ref = useRef(null)
  const [selectedVideo, setSelectedVideo] = useState(null)
  
  const scroll = (dir) => {
    if (!ref.current) return
    ref.current.scrollBy({ left: dir * 360, behavior: 'smooth' })
  }

  const handleVideoClick = (videoUrl) => {
    const videoId = getYouTubeId(videoUrl)
    if (videoId) {
      setSelectedVideo(videoId)
    }
  }

  const closeModal = () => {
    setSelectedVideo(null)
  }

  return (
    <>
      <div className="w-full mt-6 md:mt-0">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Video Gallery</h3>
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

        <div ref={ref} className="flex gap-4 overflow-x-hidden py-2">
          {videos.map((v, i) => {
            const videoUrl = typeof v === 'string' ? v : v.url || v.thumb
            const videoId = getYouTubeId(videoUrl)
            const thumbnail = videoId ? getYouTubeThumbnail(videoId) : (typeof v === 'object' ? v.thumb : null)
            
            return (
              <div 
                key={i} 
                onClick={() => handleVideoClick(videoUrl)}
                className="min-w-[320px] md:min-w-[380px] rounded-lg overflow-hidden bg-white/5 relative cursor-pointer hover:scale-105 transition-transform"
              >
                {thumbnail && (
                  <div className="relative w-[320px] md:w-[380px] h-[200px] md:h-[220px]">
                    <Image 
                      src={thumbnail} 
                      alt={`video-${i}`} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/80 flex items-center justify-center text-blue-700 font-bold shadow-lg">▶</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white text-xl font-bold"
            >
              ×
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video player"
            />
          </div>
        </div>
      )}
    </>
  )
}
