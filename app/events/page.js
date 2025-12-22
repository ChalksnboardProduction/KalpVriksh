import Image from 'next/image'

export default function EventsPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/events/73718237f23ebd8032d6e7075e431b828817a716.jpg"
            alt="Events and Celebrations"
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
            Events and Celebrations
          </h1>
        </div>
      </section>

      {/* Annual Function Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#396D96', fontFamily: 'sans-serif' }}>
            Annual Function
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-8" style={{ fontFamily: 'sans-serif' }}>
            Sports, yoga, fitness sessions, and health education programs.
          </p>
          
          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative w-full h-[200px] md:h-[280px] rounded-lg overflow-hidden">
              <Image
                src="/events/1487e727a4c31e19026475151406f463d72b5c0d.jpg"
                alt="Annual Function - Sports Activity"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-[200px] md:h-[280px] rounded-lg overflow-hidden">
              <Image
                src="/events/42d777e4d5369eac34fb00f1bd3f9d7c3a5dbe05.jpg"
                alt="Annual Function - Yoga Activity"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Class Room Activities Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#396D96', fontFamily: 'sans-serif' }}>
            Class Room Activities
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-8" style={{ fontFamily: 'sans-serif' }}>
            Visual arts, music, dance, theatre, and literary activities.
          </p>
          
          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative w-full h-[200px] md:h-[280px] rounded-lg overflow-hidden">
              <Image
                src="/events/d6a36d6ad4eb6cf881a54acd42ebd8560df5e249.jpg"
                alt="Class Room Activities - Music"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-[200px] md:h-[280px] rounded-lg overflow-hidden">
              <Image
                src="/events/f5ca7954f4be43adb32b54deda00f33d2053520c.jpg"
                alt="Class Room Activities - Arts"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

