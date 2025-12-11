export default function HeroSection() {
  return (
    <main
      className="min-h-screen text-white flex items-center"
      style={{
        backgroundImage:
          'linear-gradient(90deg, #2b5271 0%, #0f2538 45%, #02060a 100%)',
      }}
    >
      <div className="max-w-5xl px-6 sm:px-10 lg:px-20 py-16 md:py-24 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <p
            className="text-white/80"
            style={{
              width: '828px',
              maxWidth: '100%',
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '64px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }}
          >
            Welcome to
          </p>
          <h1
            style={{
              width: '828px',
              maxWidth: '100%',
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '64px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }}
          >
            Kalp Vriksh Public School
          </h1>
        </div>

        <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed">
          Growing minds, sparking curiosity, and painting the canvas of knowledge –
          where every question is a brushstroke and every child an artist in the
          masterpiece of learning.
        </p>

        <div className="flex items-center gap-4 sm:gap-6">
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
    </main>
  )
}

