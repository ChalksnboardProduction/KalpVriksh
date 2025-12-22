import Image from 'next/image'

export default function CampusTourPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/campus/f2d8a52ff0a5be6e1419eef89b19185d04d1e66b.jpg"
            alt="Campus Life"
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
            Campus Life
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Mission Statement */}
          <div className="mb-12 md:mb-16">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-5xl mx-auto text-center" style={{ fontFamily: 'sans-serif' }}>
              At Kalp Vriksh, we believe that true education goes beyond books – it transforms thought, character, and perspective. In times when the world faces uncertainty, our campus stands as a sanctuary of hope, stability, and growth. Inspired by the Indian spirit of wisdom and resilience, we aim to awaken young minds to think freely, act with purpose, and carry forward the essence of Bhartiyata – the Indian way of thought and living.
            </p>
          </div>

          {/* Classrooms Section */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#396D96', fontFamily: 'sans-serif' }}>
              Classrooms
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/campus/0d56f99c234361643a1940101a1d77db44b1b5a6.jpg"
                  alt="Classroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/campus/0d6ddefa867760786bb0feeb5c46147baaae2173.jpg"
                  alt="Classroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/campus/0e5f3c45604e00f0b446960f51c32016b8b734c1.jpg"
                  alt="Classroom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Classroom Activities Section */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#396D96', fontFamily: 'sans-serif' }}>
              Classroom Activities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/campus/134b197a1f7e00606363268632257187fa19ec9c.jpg"
                  alt="Classroom Activity"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/campus/7055967551fd938f2e4e1e8750607db64b0f15aa.jpg"
                  alt="Classroom Activity"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/campus/8167b9b81427644200700b9886a684a0fabf859d.jpg"
                  alt="Classroom Activity"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Labs Section */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#396D96', fontFamily: 'sans-serif' }}>
              Labs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/campus/a4cbfa027b66744cc48b734a8082adcf9ffbe5a3.jpg"
                  alt="Lab"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/campus/b22edd3cd2bfbe843705e8740733a8cddb95dc1d.jpg"
                  alt="Lab"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/campus/c003196030d9bb8a8f0819b33e04d7e79bab8ca3.jpg"
                  alt="Lab"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Sports & Outdoor Activities Section */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#396D96', fontFamily: 'sans-serif' }}>
              Sports & Outdoor Activities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/campus/f3e2bff1db0f2a019ae229c377f659a17cd4aa69.jpg"
                  alt="Sports Activity"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/campus/f79518217f0b2de2888b25cb78552fb7707d145a.jpg"
                  alt="Sports Activity"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/campus/f9dd7845c671a72e2b6c26ad64576df9d2801098.jpg"
                  alt="Sports Activity"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

