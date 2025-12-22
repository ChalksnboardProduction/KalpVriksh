'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function AdmissionPage() {
  const [openAccordion, setOpenAccordion] = useState('eligibility')
  const [openFAQ, setOpenFAQ] = useState(null)
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/admission/Rectangle 1050.png"
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

        {/* Content Overlay - Centered */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8 text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 md:mb-8" style={{ fontFamily: 'sans-serif' }}>
            Admissions Open 2026-2027
          </h1>
          
          {/* Descriptive Tagline */}
          <p className="text-white text-base md:text-lg lg:text-xl max-w-4xl mx-auto mb-8 md:mb-10 leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
            Growing minds, sparking curiosity, and painting the canvas of knowledge - where every question is a brushstroke and every child an artist in the masterpiece of learning.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center">
            {/* Apply Now Button */}
            <button
              className="text-white font-semibold px-8 py-3 rounded-full transition-all hover:opacity-90"
              style={{
                backgroundColor: '#FFB606',
                fontFamily: 'sans-serif'
              }}
            >
              Apply Now
            </button>

            {/* Download Brochure Button */}
            <button
              className="text-gray-800 font-semibold px-8 py-3 rounded-full bg-white border border-gray-300 transition-all hover:bg-gray-50"
              style={{
                fontFamily: 'sans-serif'
              }}
            >
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Our Admission Process Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-12" style={{ color: '#396D96', fontFamily: 'sans-serif' }}>
            Our Admission Process
          </h2>

          {/* Process Steps */}
          <div className="space-y-0">
            {/* Step 1 */}
            <div className="flex items-start gap-4 md:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/admission/mdi_text-box-edit-outline.svg"
                    alt="Form Icon"
                    width={56}
                    height={56}
                    className="w-full h-full"
                  />
                </div>
                <div className="w-0.5 h-12 md:h-16 bg-gray-300 mt-2"></div>
              </div>
              <div className="flex-1 pt-2 pb-6 md:pb-8">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                  Step 1: Fill out the online inquiry form to receive more information and connect with our admission team
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4 md:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/admission/mdi_text-box-edit-outline.svg"
                    alt="Form Icon"
                    width={56}
                    height={56}
                    className="w-full h-full"
                  />
                </div>
                <div className="w-0.5 h-12 md:h-16 bg-gray-300 mt-2"></div>
              </div>
              <div className="flex-1 pt-2 pb-6 md:pb-8">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                  Step 1: Fill out the online inquiry form to receive more information and connect with our admission team
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4 md:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/admission/mynaui_academic-hat.svg"
                    alt="Graduation Cap Icon"
                    width={56}
                    height={56}
                    className="w-full h-full"
                  />
                </div>
                <div className="w-0.5 h-12 md:h-16 bg-gray-300 mt-2"></div>
              </div>
              <div className="flex-1 pt-2 pb-6 md:pb-8">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                  Step 1: Fill out the online inquiry form to receive more information and connect with our admission team
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/admission/lucide_mail-check.svg"
                  alt="Mail Icon"
                  width={56}
                  height={56}
                  className="w-full h-full"
                />
              </div>
              <div className="flex-1 pt-2">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                  Step 1: Fill out the online inquiry form to receive more information and connect with our admission team
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Information Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-12" style={{ color: '#396D96', fontFamily: 'sans-serif' }}>
            Key Information
          </h2>

          {/* Accordion Items */}
          <div className="space-y-4">
            {/* Eligibility Criteria */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenAccordion(openAccordion === 'eligibility' ? null : 'eligibility')}
                className="w-full flex items-center justify-between p-4 md:p-6 text-left"
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-800" style={{ fontFamily: 'sans-serif' }}>
                  Eligibility Criteria
                </h3>
                <div className={`transform transition-transform ${openAccordion === 'eligibility' ? 'rotate-180' : ''}`}>
                  <Image
                    src="/admission/nrk_arrow-dropdown.svg"
                    alt="Dropdown Arrow"
                    width={24}
                    height={24}
                  />
                </div>
              </button>
              {openAccordion === 'eligibility' && (
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                    Step 1: Fill out the online inquiry form to receive more information and connect with our admission team
                  </p>
                </div>
              )}
            </div>

            {/* Required Documents */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenAccordion(openAccordion === 'documents' ? null : 'documents')}
                className="w-full flex items-center justify-between p-4 md:p-6 text-left"
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-800" style={{ fontFamily: 'sans-serif' }}>
                  Required Documents
                </h3>
                <div className={`transform transition-transform ${openAccordion === 'documents' ? 'rotate-180' : ''}`}>
                  <Image
                    src="/admission/nrk_arrow-dropdown.svg"
                    alt="Dropdown Arrow"
                    width={24}
                    height={24}
                  />
                </div>
              </button>
              {openAccordion === 'documents' && (
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                    Please submit the following documents: Birth certificate, Previous school records, Medical certificate, and Passport size photographs.
                  </p>
                </div>
              )}
            </div>

            {/* Fees Structure */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenAccordion(openAccordion === 'fees' ? null : 'fees')}
                className="w-full flex items-center justify-between p-4 md:p-6 text-left"
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-800" style={{ fontFamily: 'sans-serif' }}>
                  Fees Structure
                </h3>
                <div className={`transform transition-transform ${openAccordion === 'fees' ? 'rotate-180' : ''}`}>
                  <Image
                    src="/admission/nrk_arrow-dropdown.svg"
                    alt="Dropdown Arrow"
                    width={24}
                    height={24}
                  />
                </div>
              </button>
              {openAccordion === 'fees' && (
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                    For detailed fee structure and payment plans, please contact our admission office or download the fee brochure.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Admission Enquiry Form Section */}
      <section className="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0">
          <Image
            src="/admission/image 11.png"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-sm"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8">
          {/* Header */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-8 md:mb-12" style={{ fontFamily: 'sans-serif' }}>
            Admission Enquiry
          </h2>

          {/* Form Card */}
          <div className="bg-white rounded-lg md:rounded-xl p-6 md:p-8 lg:p-10 shadow-2xl">
            <form className="space-y-6">
              {/* Two Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Name of Child */}
                  <div>
                    <label className="block text-gray-800 font-semibold mb-2" style={{ fontFamily: 'sans-serif' }}>
                      Name of Child
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#396D96] focus:border-transparent"
                      style={{ fontFamily: 'sans-serif' }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-800 font-semibold mb-2" style={{ fontFamily: 'sans-serif' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#396D96] focus:border-transparent"
                      style={{ fontFamily: 'sans-serif' }}
                    />
                  </div>

                  {/* Select Gender */}
                  <div>
                    <label className="block text-gray-800 font-semibold mb-2" style={{ fontFamily: 'sans-serif' }}>
                      Select Gender
                    </label>
                    <div className="relative">
                      <select
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#396D96] focus:border-transparent appearance-none bg-white"
                        style={{ fontFamily: 'sans-serif' }}
                      >
                        <option value="">Enter Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Select Class */}
                  <div>
                    <label className="block text-gray-800 font-semibold mb-2" style={{ fontFamily: 'sans-serif' }}>
                      Select Class
                    </label>
                    <div className="relative">
                      <select
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#396D96] focus:border-transparent appearance-none bg-white"
                        style={{ fontFamily: 'sans-serif' }}
                      >
                        <option value="">Seeking Admission for Class</option>
                        <option value="nursery">Nursery</option>
                        <option value="kg">KG</option>
                        <option value="1">Class 1</option>
                        <option value="2">Class 2</option>
                        <option value="3">Class 3</option>
                        <option value="4">Class 4</option>
                        <option value="5">Class 5</option>
                        <option value="6">Class 6</option>
                        <option value="7">Class 7</option>
                        <option value="8">Class 8</option>
                        <option value="9">Class 9</option>
                        <option value="10">Class 10</option>
                        <option value="11">Class 11</option>
                        <option value="12">Class 12</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-gray-800 font-semibold mb-2" style={{ fontFamily: 'sans-serif' }}>
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#396D96] focus:border-transparent"
                      style={{ fontFamily: 'sans-serif' }}
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Parent's Name */}
                  <div>
                    <label className="block text-gray-800 font-semibold mb-2" style={{ fontFamily: 'sans-serif' }}>
                      Parent's Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter parent's name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#396D96] focus:border-transparent"
                      style={{ fontFamily: 'sans-serif' }}
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-gray-800 font-semibold mb-2" style={{ fontFamily: 'sans-serif' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(XXX) XXX-XXXX"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#396D96] focus:border-transparent"
                      style={{ fontFamily: 'sans-serif' }}
                    />
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className="block text-gray-800 font-semibold mb-2" style={{ fontFamily: 'sans-serif' }}>
                      Date of Birth
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        placeholder="mm/dd/yyyy"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#396D96] focus:border-transparent"
                        style={{ fontFamily: 'sans-serif' }}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* City/Village */}
                  <div>
                    <label className="block text-gray-800 font-semibold mb-2" style={{ fontFamily: 'sans-serif' }}>
                      City/Village
                    </label>
                    <input
                      type="text"
                      placeholder="City/Village"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#396D96] focus:border-transparent"
                      style={{ fontFamily: 'sans-serif' }}
                    />
                  </div>
                </div>
              </div>

              {/* Apply Now Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="text-white font-bold px-12 py-4 rounded-lg transition-all hover:opacity-90"
                  style={{
                    backgroundColor: '#FFB606',
                    fontFamily: 'sans-serif'
                  }}
                >
                  Apply Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-12" style={{ color: '#396D96', fontFamily: 'sans-serif' }}>
            Frequently Asked Questions
          </h2>

          {/* FAQ Accordion Items */}
          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 'ratio' ? null : 'ratio')}
                className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-800" style={{ fontFamily: 'sans-serif' }}>
                  What is the student-teacher ratio at our school?
                </h3>
                <div className={`transform transition-transform flex-shrink-0 ml-4 ${openFAQ === 'ratio' ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openFAQ === 'ratio' && (
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                    We maintain an optimal student-teacher ratio to ensure personalized attention. Our average ratio is approximately 25:1, allowing our educators to focus on individual student needs and provide quality education.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 'scholarships' ? null : 'scholarships')}
                className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-800" style={{ fontFamily: 'sans-serif' }}>
                  Are scholarships available for students?
                </h3>
                <div className={`transform transition-transform flex-shrink-0 ml-4 ${openFAQ === 'scholarships' ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openFAQ === 'scholarships' && (
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                    Yes, we offer various scholarship programs for meritorious students and those in need of financial assistance. Please contact our admission office for detailed information about eligibility criteria and application procedures.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 'documents' ? null : 'documents')}
                className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-800" style={{ fontFamily: 'sans-serif' }}>
                  What documents are required at the time of admission?
                </h3>
                <div className={`transform transition-transform flex-shrink-0 ml-4 ${openFAQ === 'documents' ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openFAQ === 'documents' && (
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                    Required documents include: Birth certificate, Previous school records and transfer certificate, Medical certificate, Passport size photographs, and Aadhaar card (if applicable). Please refer to the "Required Documents" section in Key Information for a complete list.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

