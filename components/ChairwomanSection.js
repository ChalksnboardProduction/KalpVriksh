"use client"

import Image from 'next/image'

export default function ChairwomanSection() {
  return (
    <section className="w-full py-6 md:py-8" style={{ backgroundColor: '#396D96' }}>
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
          {/* Left Column - Image */}
          <div className="w-full md:w-[45%] flex-shrink-0 md:-ml-16">
            <div 
              className="relative w-full aspect-square bg-white rounded-tl-[80px] rounded-br-[80px] overflow-hidden"
            >
              <Image 
                src="/image 8 (1).png"
                alt="Chairwoman"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="w-full md:w-[55%] text-white">
            <h2 className="text-lg md:text-xl font-bold mb-1">Chairwomen</h2>
            <h3 className="text-sm md:text-base font-normal mb-4">Name</h3>
            
            <div className="text-xs md:text-sm leading-relaxed space-y-2 md:space-y-3">
              <p>
                <span className="font-bold">Dear Parents, Guardians, and Students,</span> Every individual is distinctive, and learning to teach is an art in itself. Just as no two fingerprints are alike, we believe that every child is born unique. Each student has their own pace of learning and grasping concepts, and therefore, one way of teaching does not fit all. At Kalpavriksh Public School, we focus on teaching the way children learn, rather than forcing them to learn in a predefined manner. Education should encourage true understanding rather than mere information retention. While the accumulation of knowledge strengthens memory, true comprehension is built on conceptual clarity. Schools are not just assembly lines of syllabus and exams; they should invigorate students&apos; lives and help them develop the resilience and skills to lead a successful future. Our approach goes beyond academics, fostering life skills, values, and habits that prepare students for life&apos;s challenges. With this, I extend my heartfelt prayers and best wishes to every student, teacher, and staff member. May our school continue to reach new heights of excellence and be a guiding light in the journey of knowledge and self-discovery. Learn today and lead tomorrow! Chairwoman, Kalpavriksh Public School Learn today, lead tomorrow!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

