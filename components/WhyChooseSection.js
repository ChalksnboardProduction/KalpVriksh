import Image from 'next/image'
import Link from 'next/link'
import StatsStrip from './StatsStrip'

const cards = [
  {
    title: 'Experienced Faculty',
    body:
      'With KVPS, we ensure that your children get specialized attention through best teaching methods. Our teachers are well trained in line with the New Education Policy and impart theoretical as well as pragmatic knowledge.',
    cta: 'Our Faculty',
    accent: '#FFB606',
    bg: '/Rectangle 1016 (1).png',
    align: 'left',
  },
  {
    title: 'State-of-the-Art Infrastructure',
    body:
      'The campus boasts state-of-the-art smart classrooms, specialized STEM labs, and spacious sports facilities. This ensures a stimulating environment fit for 21st century discovery, supporting collaborative and advanced learning across all subjects.',
    cta: 'Campus Tour',
    accent: '#FFB606',
    bg: '/Rectangle 1016 (2).png',
    align: 'right',
  },
  {
    title: 'Vibrant Community Life',
    body:
      'We cultivate an inclusive, dynamic environment where every student finds their niche. Frequent cultural celebrations, festivals, and parent-teacher engagements foster a strong sense of belonging, active alumni relations, and greater student success.',
    cta: 'See Events',
    accent: '#FFB606',
    bg: '/Rectangle 1016.png',
    align: 'left',
  },
  {
    title: 'Holistic Development',
    body:
      'We have inculcated modern and scientific technology including interactive classrooms, digital libraries, science laboratories, robotics and computer laboratories.',
    cta: 'Our Facilities',
    accent: '#FFB606',
    bg: '/Rectangle 1016 (3).png',
    align: 'right',
  },
]

export default function WhyChooseSection() {
  return (
    <>
      <section
        className="relative overflow-hidden bg-[#2B5271] text-white px-4 sm:px-6 md:px-8 lg:px-16 pt-12 sm:pt-16 pb-0"
        style={{
          backgroundImage: `url("/image 11.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
      <div className="relative max-w-6xl lg:max-w-7xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-8">
        <div className="space-y-2 sm:space-y-3 max-w-5xl lg:max-w-6xl px-2 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Why Choose Kalp Vriksh?</h2>
          <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed">
            Choose Kalpvriksh Public School for its commitment to holistic development, a progressive curriculum,
            dedicated faculty, cutting-edge facilities, and innovative programs, providing students with a well-rounded
            education and preparing them for future success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_1fr] gap-4 sm:gap-6 md:gap-8 lg:gap-0 xl:gap-0 items-end w-full">
          <div className="grid gap-4 sm:gap-6 lg:gap-6 xl:gap-8 lg:-mr-8 xl:-mr-12">
            <Card key={cards[0].title} {...cards[0]} isFirst={true} isSecond={false} />
            <Card key={cards[2].title} {...cards[2]} isFirst={false} isSecond={true} />
          </div>

          <div className="relative hidden lg:flex justify-center items-end order-1 lg:order-none lg:-mx-8 xl:-mx-12 z-20 self-end">
            <div className="relative w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] xl:w-[340px] aspect-[3/5] flex items-end transform-gpu origin-bottom scale-y-[1.24]">
              <Image
                src="/NO BG 1.png"
                alt="Kalp Vriksh student"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>

          <div className="grid gap-4 sm:gap-6 lg:gap-6 xl:gap-8 lg:-ml-8 xl:-ml-12">
            <Card key={cards[1].title} {...cards[1]} isThird={true} isFourth={false} />
            <Card key={cards[3].title} {...cards[3]} isThird={false} isFourth={true} />
          </div>
        </div>
      </div>
      </section>

      <StatsStrip />
    </>
  )
}

function Card({ title, body, cta, accent, bg, align = 'left', isFirst = false, isSecond = false, isThird = false, isFourth = false }) {
  return (
    <div
      className={`relative w-full text-gray-800 px-6 sm:px-7 md:px-8 py-6 sm:py-7 md:py-10 flex flex-col justify-start gap-3 sm:gap-4 md:gap-5 lg:gap-6 h-[280px] sm:h-[300px] md:h-[380px] lg:h-[340px] ${
        align === 'right' ? 'text-right items-end' : 'text-left items-start'
      } overflow-hidden ${isFirst ? 'bg-white md:bg-transparent' : ''} ${isSecond || isThird || isFourth ? 'bg-white' : ''} ${isFirst ? 'md:rounded-br-[160px]' : ''} ${isSecond ? 'md:rounded-tr-[160px] md:rounded-bl-[0]' : ''} ${isThird ? 'md:rounded-bl-[160px]' : ''} ${isFourth ? 'md:rounded-tl-[160px]' : ''}`}
    >
        <div
          className={`absolute inset-0 pointer-events-none ${isFirst ? 'md:rounded-br-[160px]' : ''} ${isSecond ? 'md:rounded-tr-[160px] md:rounded-bl-[0]' : ''} ${isThird ? 'md:rounded-bl-[160px]' : ''} ${isFourth ? 'md:rounded-tl-[160px]' : ''}`}
        style={{
          backgroundImage: isSecond || isThird || isFourth ? 'none' : `url("${bg}")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative space-y-2 sm:space-y-3 md:space-y-4 z-10 flex flex-col h-full">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold">{title}</h3>
        <p className="text-xs sm:text-sm leading-relaxed text-gray-700 mb-2 sm:mb-3 md:mb-6 flex-grow">{body}</p>
        {cta === 'Our Faculty' ? (
          <Link
            href="/faculty"
            className={`text-xs sm:text-sm font-semibold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-lg w-fit shadow-sm hover:opacity-90 transition-opacity mt-auto ${
              align === 'right' ? 'ml-auto' : ''
            }`}
            style={{
              backgroundColor: accent,
              color: '#1F2937',
            }}
          >
            {cta}
          </Link>
        ) : cta === 'See Events' ? (
          <Link
            href="/events"
            className={`text-xs sm:text-sm font-semibold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-lg w-fit shadow-sm hover:opacity-90 transition-opacity mt-auto ${
              align === 'right' ? 'ml-auto' : ''
            }`}
            style={{
              backgroundColor: accent,
              color: '#1F2937',
            }}
          >
            {cta}
          </Link>
        ) : cta === 'Campus Tour' ? (
          <Link
            href="/campus-tour"
            className={`text-xs sm:text-sm font-semibold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-lg w-fit shadow-sm hover:opacity-90 transition-opacity mt-auto ${
              align === 'right' ? 'ml-auto' : ''
            }`}
            style={{
              backgroundColor: accent,
              color: '#1F2937',
            }}
          >
            {cta}
          </Link>
        ) : (
          <button
            className={`text-xs sm:text-sm font-semibold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-lg w-fit shadow-sm hover:opacity-90 transition-opacity mt-auto ${
              align === 'right' ? 'ml-auto' : ''
            }`}
            style={{
              backgroundColor: accent,
              color: '#1F2937',
            }}
          >
            {cta}
          </button>
        )}
      </div>
    </div>
  )
}

