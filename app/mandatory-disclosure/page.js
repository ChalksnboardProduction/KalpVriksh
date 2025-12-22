import Image from 'next/image'

export default function MandatoryDisclosurePage() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/2082841d57d14a44d4977f7da7a545c74ab71daf.jpg"
            alt="Kalp Vriksh Public School Interior"
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white" style={{ fontFamily: 'sans-serif' }}>
            Mandatory Public Disclosure
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* General Information */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#396D96', fontFamily: 'sans-serif' }}>
              General Information
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800" style={{ fontFamily: 'sans-serif' }}>Sr. No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800" style={{ fontFamily: 'sans-serif' }}>Information</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800" style={{ fontFamily: 'sans-serif' }}>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">1</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">NAME OF THE SCHOOL</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">KALPVRIKSH PUBLIC SCHOOL</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">2</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">AFFILIATION NO. (IF APPLICABLE)</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">-</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">3</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">SCHOOL CODE (IF APPLICABLE)</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">4</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">COMPLETE ADDRESS WITH PIN CODE</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">-</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">5</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">PRINCIPAL NAME</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">6</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">PRINCIPAL QUALIFICATION</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">-</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">7</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">SCHOOL EMAIL ID</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">kalpvrikshschool@gmail.com</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">8</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">CONTACT DETAILS</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">+91-89301-4500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Teaching Staff */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#396D96', fontFamily: 'sans-serif' }}>
              Teaching Staff
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800" style={{ fontFamily: 'sans-serif' }}>Sr. No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800" style={{ fontFamily: 'sans-serif' }}>Information</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800" style={{ fontFamily: 'sans-serif' }}>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">1</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">PRINCIPAL NAME & QUALIFICATION</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">2</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">PRINCIPAL QUALIFICATION</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">-</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">3</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">TOTAL NO. OF TEACHERS</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">4</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">PGT</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">-</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">5</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">TGT</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">6</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">PRT</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">-</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">7</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">TEACHER SECTION RATIO</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Documents and Information */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#396D96', fontFamily: 'sans-serif' }}>
              Documents and Information
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800" style={{ fontFamily: 'sans-serif' }}>Sr. No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800" style={{ fontFamily: 'sans-serif' }}>Information</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800" style={{ fontFamily: 'sans-serif' }}>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">1</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Affiliation letter</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">
                      <a href="#" className="text-[#396D96] hover:underline">Click here</a>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">2</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">No-Objection Certificate</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">
                      <a href="#" className="text-[#396D96] hover:underline">Click here</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">3</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Recognition Letter</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">
                      <a href="#" className="text-[#396D96] hover:underline">Click here</a>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">4</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Building/Safety Certificate</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">
                      <a href="#" className="text-[#396D96] hover:underline">Click here</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">5</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Fire Safety Certificate</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">
                      <a href="#" className="text-[#396D96] hover:underline">Click here</a>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">6</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Sanitation/Health and Sanitation Certificate</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">
                      <a href="#" className="text-[#396D96] hover:underline">Click here</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">7</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Water Health and Sanitation Certificate</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">
                      <a href="#" className="text-[#396D96] hover:underline">Click here</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Result and Academics */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#396D96', fontFamily: 'sans-serif' }}>
              Result and Academics
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800" style={{ fontFamily: 'sans-serif' }}>Sr. No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800" style={{ fontFamily: 'sans-serif' }}>Information</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800" style={{ fontFamily: 'sans-serif' }}>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">1</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">NAME OF THE SCHOOL</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">
                      <a href="#" className="text-[#396D96] hover:underline">Click here</a>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">2</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">AFFILIATION NO. (IF APPLICABLE)</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">
                      <a href="#" className="text-[#396D96] hover:underline">Click here</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">3</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">SCHOOL CODE (IF APPLICABLE)</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">
                      <a href="#" className="text-[#396D96] hover:underline">Click here</a>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">4</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">COMPLETE ADDRESS WITH PIN CODE</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">
                      <a href="#" className="text-[#396D96] hover:underline">Click here</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">5</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">PRINCIPAL NAME</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">
                      <a href="#" className="text-[#396D96] hover:underline">Click here</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* School Infrastructure */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#396D96', fontFamily: 'sans-serif' }}>
              School Infrastructure
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800" style={{ fontFamily: 'sans-serif' }}>Sr. No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800" style={{ fontFamily: 'sans-serif' }}>Information</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800" style={{ fontFamily: 'sans-serif' }}>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">1</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTS)</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">2</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">NO. AND SIZE OF THE CLASS ROOMS (IN SQUARE MTS)</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">-</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">3</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQUARE MTS)</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">4</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">INTERNET FACILITY</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">-</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">5</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">NO. OF GIRLS TOILET</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">6</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">NO. OF BOYS TOILET</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">-</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">7</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

