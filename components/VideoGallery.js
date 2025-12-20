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
            <button onClick={() => scroll(-1)} className="p-2 rounded-full bg-white/10 text-white">
              ◀
            </button>
            <button onClick={() => scroll(1)} className="p-2 rounded-full bg-white/10 text-white">
              ▶
            </button>
          </div>
        </div>

        <div ref={ref} className="flex gap-4 overflow-x-auto no-scrollbar py-2">
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
