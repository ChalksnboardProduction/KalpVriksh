import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/about/image 5.png"
            alt="Kalp Vriksh Public School Building"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Dark Blue Gradient Overlay - covers bottom two-thirds */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(57, 109, 150, 0.95) 0%, rgba(57, 109, 150, 0.9) 20%, rgba(57, 109, 150, 0.7) 40%, rgba(57, 109, 150, 0.4) 60%, rgba(57, 109, 150, 0.1) 80%, transparent 100%)'
          }}
        />

        {/* Content Overlay - positioned in lower portion */}
        <div className="relative z-10 h-full flex flex-col items-center justify-end pb-16 md:pb-20 px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6" style={{ fontFamily: 'sans-serif' }}>
            About Kalp Vriksh Public School
          </h1>
          
          <p className="text-white text-base md:text-lg lg:text-xl max-w-4xl mx-auto mb-8 md:mb-10 leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
            Growing minds, sparking curiosity, and painting the canvas of knowledge - where every question is a brushstroke and every child an artist in the masterpiece of learning.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex items-center gap-4 sm:gap-6 justify-center">
            {/* Enquire Button */}
            <button
              className="text-white font-semibold"
              style={{
                backgroundColor: '#FFB606',
                borderRadius: '999px',
                padding: '12px 24px',
                transition: 'all 200ms ease-out',
              }}
            >
              Enquire
            </button>

            {/* Campus Tour Button */}
            <button
              className="flex items-center gap-3 text-white font-semibold border border-white/60 rounded-full px-4 sm:px-5 h-11 bg-white/10 backdrop-blur hover:bg-white/20 transition-colors"
            >
              <span className="w-8 h-8 flex items-center justify-center rounded-full border border-white/60 bg-white/10">
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 1.75L11.5 8L2.5 14.25V1.75Z"
                    fill="white"
                  />
                </svg>
              </span>
              Campus Tour
            </button>
          </div>
        </div>
      </section>

      {/* About Info Section */}
      <section className="w-full bg-white py-8 md:py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* School Name */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#396D96' }}>
            Kalp Vriksh Public School
          </h2>

          {/* School Description */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-0 max-w-4xl mx-auto text-center">
            Scholars Rosary is a group of four Co-Ed CBSE schools offering K-12 education with a focus on growth, values, and innovation. Blending modern learning with cultural roots, we shape confident, well-rounded individuals ready for a dynamic world. Located at 6 Km. Stone, Village Bohar, Rohtak, Haryana (124001), we welcome inquiries at 91-8930122222 or via email at sredu_society@yahoo.com
          </p>
        </div>
      </section>

      {/* Vision and Mission Section - Full Width */}
      <section className="w-full py-8 md:py-10" style={{ backgroundColor: 'rgba(245,250,255,1)' }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Our Vision */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#396D96' }}>
                  Our Vision
                </h3>
                <Image 
                  src="/about/Mask group.svg" 
                  alt="Vision Icon" 
                  width={32} 
                  height={32}
                  className="flex-shrink-0"
                />
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                For us equality matters. Each and every student is entitled to the attention which he individually requires and deserves. These specially trained faculty members equipped with the most technologically advanced classrooms and digital libraries have the caliber to cater to the needs of all the students jointly and severally.
              </p>
            </div>

            {/* Our Mission */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#396D96' }}>
                  Our Mission
                </h3>
                <Image 
                  src="/about/Mask group.png" 
                  alt="Mission Icon" 
                  width={32} 
                  height={32}
                  className="flex-shrink-0"
                />
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                Our mission is not only limited to produce high scoring academically sound students but it also expands to achieve the goal of carving out a better individual and an ideal citizen of the nation from our students. We wish to contribute to the noble cause of developing our precious nation by giving to its citizens who are an asset and who have the potential to unlock the new levels of excellence and prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chairwoman Section - Same as home page */}
      <section className="w-full py-6 md:py-8" style={{ backgroundColor: '#396D96' }}>
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
            {/* Left Column - Image */}
            <div className="w-full md:w-[45%] flex-shrink-0 md:-ml-16">
              <div 
                className="relative w-full aspect-square bg-white rounded-tl-[80px] rounded-br-[80px] overflow-hidden"
              >
                <Image 
                  src="/about/image 7.png"
                  alt="Director"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="w-full md:w-[55%] text-white">
              <h2 className="text-lg md:text-xl font-bold mb-1">Director</h2>
              <h3 className="text-sm md:text-base font-normal mb-4">Name</h3>
              
              <div className="text-xs md:text-sm leading-relaxed space-y-2 md:space-y-3">
                <p>
                  <span className="font-bold">Dear Parents, Guardians, and Students,</span> Every individual is distinctive, and learning to teach is an art in itself. Just as no two fingerprints are alike, we believe that every child is born unique. Each student has their own pace of learning and grasping concepts, and therefore, one way of teaching does not fit all. At Kalpavriksh Public School, we focus on teaching the way children learn, rather than forcing them to learn in a predefined manner. Education should encourage true understanding rather than mere information retention. While the accumulation of knowledge strengthens memory, true comprehension is built on conceptual clarity. Schools are not just assembly lines of syllabus and exams; they should invigorate students' lives and help them develop the resilience and skills to lead a successful future. Our approach goes beyond academics, fostering life skills, values, and habits that prepare students for life's challenges. With this, I extend my heartfelt prayers and best wishes to every student, teacher, and staff member. May our school continue to reach new heights of excellence and be a guiding light in the journey of knowledge and self-discovery. Learn today and lead tomorrow! Chairwoman, Kalpavriksh Public School Learn today, lead tomorrow!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

