'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('images')
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/campus/ad558fe793db8c0cd670aa7819f9be57ba46f60e.jpg"
            alt="Gallery"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Dark Overlay for text readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2) 100%)'
          }}
        />

        {/* Content Overlay - Left Aligned, Bottom Positioned */}
        <div className="relative z-10 h-full flex flex-col items-start justify-end px-4 md:px-8 pb-12 md:pb-16">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: 'sans-serif' }}>
            Gallery
          </h1>
        </div>
      </section>

      {/* Gallery Content Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Tab Navigation - Segmented Control */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="flex w-fit rounded-lg overflow-hidden border border-gray-300" style={{ fontFamily: 'sans-serif' }}>
            <button
              onClick={() => setActiveTab('images')}
              className={`px-6 md:px-8 py-3 font-bold transition-all ${
                activeTab === 'images'
                  ? 'text-white'
                  : 'text-black bg-white'
              }`}
              style={{
                backgroundColor: activeTab === 'images' ? '#3B5F7D' : 'white',
                fontFamily: 'sans-serif'
              }}
            >
              Images
            </button>
            <div className="w-px bg-gray-300"></div>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 md:px-8 py-3 font-bold transition-all ${
                activeTab === 'videos'
                  ? 'text-white'
                  : 'text-black bg-white'
              }`}
              style={{
                backgroundColor: activeTab === 'videos' ? '#3B5F7D' : 'white',
                fontFamily: 'sans-serif'
              }}
            >
              Videos
            </button>
            </div>
          </div>

          {/* Images Tab Content */}
          {activeTab === 'images' && (
            <div className="space-y-12 md:space-y-16">
              {/* Sports & Activities Section */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#396D96', fontFamily: 'sans-serif' }}>
                  Sports & Activities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative w-full h-[200px] md:h-[250px] rounded-lg overflow-hidden">
                    <Image
                      src="/campus/0d56f99c234361643a1940101a1d77db44b1b5a6.jpg"
                      alt="Sports & Activities"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-full h-[200px] md:h-[250px] rounded-lg overflow-hidden">
                    <Image
                      src="/campus/0d6ddefa867760786bb0feeb5c46147baaae2173.jpg"
                      alt="Sports & Activities"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-full h-[200px] md:h-[250px] rounded-lg overflow-hidden">
                    <Image
                      src="/campus/0e5f3c45604e00f0b446960f51c32016b8b734c1.jpg"
                      alt="Sports & Activities"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Diwali Celebrations Section */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#396D96', fontFamily: 'sans-serif' }}>
                  Diwali Celebrations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative w-full h-[200px] md:h-[250px] rounded-lg overflow-hidden">
                    <Image
                      src="/campus/134b197a1f7e00606363268632257187fa19ec9c.jpg"
                      alt="Diwali Celebrations"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-full h-[200px] md:h-[250px] rounded-lg overflow-hidden">
                    <Image
                      src="/campus/7055967551fd938f2e4e1e8750607db64b0f15aa.jpg"
                      alt="Diwali Celebrations"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-full h-[200px] md:h-[250px] rounded-lg overflow-hidden">
                    <Image
                      src="/campus/8167b9b81427644200700b9886a684a0fabf859d.jpg"
                      alt="Diwali Celebrations"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Classes Section */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#396D96', fontFamily: 'sans-serif' }}>
                  Classes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative w-full h-[200px] md:h-[250px] rounded-lg overflow-hidden">
                    <Image
                      src="/campus/a4cbfa027b66744cc48b734a8082adcf9ffbe5a3.jpg"
                      alt="Classes"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-full h-[200px] md:h-[250px] rounded-lg overflow-hidden">
                    <Image
                      src="/campus/b22edd3cd2bfbe843705e8740733a8cddb95dc1d.jpg"
                      alt="Classes"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-full h-[200px] md:h-[250px] rounded-lg overflow-hidden">
                    <Image
                      src="/campus/c003196030d9bb8a8f0819b33e04d7e79bab8ca3.jpg"
                      alt="Classes"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Campus Section */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#396D96', fontFamily: 'sans-serif' }}>
                  Campus
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative w-full h-[200px] md:h-[250px] rounded-lg overflow-hidden">
                    <Image
                      src="/campus/f3e2bff1db0f2a019ae229c377f659a17cd4aa69.jpg"
                      alt="Campus"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-full h-[200px] md:h-[250px] rounded-lg overflow-hidden">
                    <Image
                      src="/campus/f79518217f0b2de2888b25cb78552fb7707d145a.jpg"
                      alt="Campus"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-full h-[200px] md:h-[250px] rounded-lg overflow-hidden">
                    <Image
                      src="/campus/f9dd7845c671a72e2b6c26ad64576df9d2801098.jpg"
                      alt="Campus"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Videos Tab Content */}
          {activeTab === 'videos' && (
            <div className="text-center py-12">
              <p className="text-gray-600" style={{ fontFamily: 'sans-serif' }}>
                Videos coming soon...
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

