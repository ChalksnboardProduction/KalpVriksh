import EnquireButton from './EnquireButton'

export default function HeroSection() {
  return (
    <main className="relative min-h-screen h-screen text-white flex items-center overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/KalpvrikshTRIM.webm"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(57, 109, 150, 0.85) 0%, rgba(0, 0, 0, 0.55) 100%)',
        }}
      />

      <div className="relative z-10 max-w-5xl px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-24 flex flex-col gap-4 sm:gap-6 md:gap-8">
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
          <p
            className="text-white/80"
            style={{
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 5vw, 64px)',
              lineHeight: '110%',
              letterSpacing: '0%',
            }}
          >
            Welcome to
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 6vw, 64px)',
              lineHeight: '110%',
              letterSpacing: '0%',
            }}
          >
            Kalp Vriksh Public School
          </h1>
        </div>

        <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-3xl leading-relaxed">
          Growing minds, sparking curiosity, and painting the canvas of knowledge –
          where every question is a brushstroke and every child an artist in the
          masterpiece of learning.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 md:gap-6 mt-2 sm:mt-0">
          <EnquireButton />

          <button
            className="flex items-center justify-center gap-2 sm:gap-3 text-white font-semibold border border-white/60 rounded-full px-4 sm:px-5 h-11 bg-white/10 backdrop-blur hover:bg-white/20 transition-colors text-sm sm:text-base"
          >
            <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border border-white/60 bg-white/10 flex-shrink-0">
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
    </main>
  )
}

