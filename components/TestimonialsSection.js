"use client"

import { useState } from 'react'

const testimonials = [
  {
    quote: "Choosing Kalpvrish for our son, Rohan, was the right decision. The school's focus on academics and character development is commendable. We appreciate the positive impact it has had on Rohan's overall growth.",
    name: "Pradeep Sarkar",
    role: "Parent"
  },
  {
    quote: "We're thrilled with Kalpvrish! Our son, Arjun, loves going to school, and we see a remarkable improvement in his learning and confidence. Kudos to Kalpvrish for creating a wonderful educational experience!",
    name: "Pradeep Sarkar",
    role: "Parent"
  },
  {
    quote: "Kalpvrish has been an excellent choice for our daughter. The teachers are dedicated and the curriculum is well-structured. We're very happy with her progress.",
    name: "Priya Sharma",
    role: "Parent"
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const visibleTestimonials = testimonials.slice(currentIndex * 2, currentIndex * 2 + 2)
  const totalSlides = Math.ceil(testimonials.length / 2)

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#396D96' }}>
            What Parents Say
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            We are proud of the community we've built. Hear from the families who are part of our journey.
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 border-2 relative"
                style={{
                  borderColor: '#A8C5E0',
                  borderTopLeftRadius: '80px',
                  borderTopRightRadius: '0',
                  borderBottomLeftRadius: '0',
                  borderBottomRightRadius: '80px',
                }}
              >
                <div className="text-center">
                  <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed max-w-md mx-auto">
                    {testimonial.quote}
                  </p>
                  <div className="w-96 h-0.5 bg-gray-300 mx-auto mb-6"></div>
                  <div>
                    <p className="font-bold text-gray-800 text-base md:text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="transition-all"
                style={{
                  backgroundColor: currentIndex === index ? '#396D96' : '#D1D5DB',
                  width: currentIndex === index ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

