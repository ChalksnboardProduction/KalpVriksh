import Image from 'next/image'

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
    align: 'left',
  },
  {
    title: 'Vibrant Community Life',
    body:
      'We cultivate an inclusive, dynamic environment where every student finds their niche. Frequent cultural celebrations, festivals, and parent-teacher engagements foster a strong sense of belonging, active alumni relations, and greater student success.',
    cta: 'See Events',
    accent: '#FFB606',
    bg: '/Rectangle 1016.png',
    align: 'right',
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
    <section
      className="relative overflow-hidden bg-[#2B5271] text-white px-4 md:px-8 lg:px-16 pt-16 pb-0"
      style={{
        backgroundImage: `url("/image 11.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative max-w-6xl lg:max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
        <div className="space-y-3 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Kalp Vriksh?</h2>
          <p className="text-sm md:text-base text-white/90">
            Choose Kalpvriksh Public School for its commitment to holistic development, a progressive curriculum,
            dedicated faculty, cutting-edge facilities, and innovative programs, providing students with a well-rounded
            education and preparing them for future success.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center w-full">
          <div className="grid gap-6 lg:gap-8">
            {cards.slice(0, 2).map((card, idx) => (
              <Card key={card.title} {...card} isFirst={idx === 0} isSecond={idx === 1} />
            ))}
          </div>

          <div className="relative hidden md:flex justify-center">
            <div
              className="absolute inset-0 pointer-events-none"
              
            />
              <div className="relative w-[240px] sm:w-[280px] md:w-[320px] lg:w-[340px] aspect-[3/5] flex items-end md:transform-gpu md:origin-bottom md:scale-y-[1.24] md:translate-y-12 md:z-10">
              <Image
                src="/NO BG 1.png"
                alt="Kalp Vriksh student"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>

          <div className="grid gap-6 lg:gap-8">
            {cards.slice(2).map((card, idx) => (
              <Card key={card.title} {...card} isThird={idx === 0} isFourth={idx === 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Card({ title, body, cta, accent, bg, align = 'left', isFirst = false, isSecond = false, isThird = false, isFourth = false }) {
  return (
    <div
      className={`relative w-full text-gray-800 px-8 py-8 flex flex-col justify-center lg:gap-6 h-[280px] md:h-[300px] lg:h-[320px] ${
        align === 'right' ? 'text-right items-end' : 'text-left items-start'
      }  overflow-hidden ${isFirst ? 'md:rounded-br-[90px]' : ''} ${isSecond ? 'md:rounded-tr-[90px]' : ''} ${isThird ? 'md:rounded-bl-[90px]' : ''} ${isFourth ? 'md:rounded-tl-[90px]' : ''}`}
    >
        <div
          className={`absolute inset-0 pointer-events-none ${isFirst ? 'md:rounded-br-[90px]' : ''} ${isSecond ? 'md:rounded-tr-[90px]' : ''} ${isThird ? 'md:rounded-bl-[90px]' : ''} ${isFourth ? 'md:rounded-tl-[90px]' : ''}`}
        style={{
          backgroundImage: `url("${bg}")`,
          backgroundSize: '120% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative space-y-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-700">{body}</p>
        <button
          className={`text-sm font-semibold px-4 py-2 rounded-full w-fit shadow-sm ${
            align === 'right' ? 'ml-auto' : ''
          }`}
          style={{
            backgroundColor: accent,
            color: '#1F2937',
          }}
        >
          {cta}
        </button>
      </div>
    </div>
  )
}

