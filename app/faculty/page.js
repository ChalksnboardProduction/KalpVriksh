import Image from 'next/image'

export default function FacultyPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/e8c59c47ad8ad183438650455e986e52edef5af0.jpg"
            alt="Kalp Vriksh Public School Faculty"
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

        {/* Content Overlay - Centered */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8 text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6" style={{ fontFamily: 'sans-serif' }}>
            Guiding Minds, Building Futures
          </h1>
        </div>
      </section>

      {/* Faculty & Staff Section - White Background */}
      <section className="w-full bg-white pt-12 md:pt-16 pb-4 md:pb-6">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8" style={{ color: '#396D96', fontFamily: 'sans-serif' }}>
            Faculty & Staff
          </h2>
          <div className="space-y-4 md:space-y-6">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
              With over 170 dedicated teachers, including PGTs, TGTs, and specialists, our faculty brings experience, care, and consistency to the classroom. Many serve as long-term mentors and role models, supported by ongoing training and collaboration.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
              Beyond teaching, 270+ non-teaching staff handle administration, operations, and logistics, ensuring a smooth, safe environment. Together, this well-coordinated team fosters academic excellence, personal growth, and a strong school culture that empowers every student to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section - Blue-Grey Background with Rounded Right Corners */}
      <section className="w-full bg-white pt-4 md:pt-6 relative pb-8 md:pb-12">
        <div 
          className="w-full md:w-[85%] lg:w-[75%] py-12 md:py-16 px-6 md:px-8 lg:px-12"
          style={{ 
            backgroundColor: '#396D96',
            borderTopRightRadius: '0px',
            borderBottomRightRadius: '140px',
          }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8" style={{ fontFamily: 'sans-serif' }}>
            A Team That Teaches Together,<br />Grows Together
          </h2>
          <p className="text-white text-base md:text-lg leading-relaxed max-w-4xl" style={{ fontFamily: 'sans-serif' }}>
            Kalp Vriksh's academic framework brings together grade coordinators, class teachers, and subject specialists in seamless coordination – ensuring every classroom is guided, every lesson well-planned, and every student supported.
          </p>
        </div>
        {/* Bottom Border Line */}
        <div className="absolute bottom-0 left-0 w-full h-px" style={{ backgroundColor: '#2B5271' }}></div>
      </section>
    </div>
  )
}

