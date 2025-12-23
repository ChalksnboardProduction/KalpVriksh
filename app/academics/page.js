import Image from 'next/image'
import EnquireButton from '../../components/EnquireButton'

export default function AcademicsPage() {
  return (
    <div className="w-full">
      {/* Hero Section with Background Image - Full Screen */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/academics/49785b8d9412c1ac4140abe14005aa303657b502.jpg"
            alt="Kalp Vriksh Public School Classroom"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Dark Overlay for text readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.2) 100%)'
          }}
        />

        {/* Content Overlay - Quote Text */}
        <div className="relative z-10 h-full flex flex-col items-start justify-end pb-24 md:pb-32 px-4 md:px-8">
          <div className="max-w-2xl text-left">
            <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed font-bold mb-4" style={{ fontFamily: 'sans-serif' }}>
              &quot;At Kalp Vriksh Public School, we believe education goes beyond textbooks.
            </p>
            <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed font-bold" style={{ fontFamily: 'sans-serif' }}>
              Our academic framework nurtures curiosity, creativity, and critical thinking — helping each child grow into a confident learner.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#396D96', fontFamily: 'sans-serif' }}>
            Curriculum
          </h2>

          {/* Introductory Paragraph */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-10" style={{ fontFamily: 'sans-serif' }}>
            For us equality matters. Each and every student is entitled to the attention which he individually requires and deserves. These specially trained faculty members equipped with the most technologically advanced classrooms and digital libraries have the caliber to cater to the needs of all the students jointly and severally.
          </p>

          {/* Curriculum Sections */}
          <div className="space-y-8 md:space-y-10 mb-12">
            {/* Primary */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#396D96', fontFamily: 'sans-serif' }}>
                Primary
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                These are the formative years of a child&apos;s life. We focus on activity-based learning, experience, experimentation, exploration, and educational trips. Our curriculum is designed to foster intellectual, emotional, physical, social, and aesthetic development. We integrate academics with co-curricular activities and sports to instill good values.
              </p>
            </div>

            {/* Middle School */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#396D96', fontFamily: 'sans-serif' }}>
                Middle School
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                Students start feeling at home in school and are eager for new learning. Our lessons are designed to stimulate interests and imagination. We offer a well-balanced programme that promotes physical as well as mental activity and a healthy lifestyle. Students enjoy reading through visits to the extensive library, art classes for creativity, and participation in sports. Our teachers work on polishing their social skills and identity building. The curriculum aims for better academic performance and fostering positive attitudes.
              </p>
            </div>

            {/* Senior Secondary School */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#396D96', fontFamily: 'sans-serif' }}>
                Senior Secondary School
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                Students start feeling at home in school and are eager for new learning. Our lessons are designed to stimulate interests and imagination. We offer a well-balanced programme that promotes physical as well as mental activity and a healthy lifestyle. Students enjoy reading through visits to the extensive library, art classes for creativity, and participation in sports. Our teachers work on polishing their social skills and identity building. The curriculum aims for better academic performance and fostering positive attitudes.
              </p>
            </div>
          </div>

          {/* Bottom Section - Download Link and Enquire Button */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200">
            <a href="#" className="text-lg font-semibold hover:underline" style={{ color: '#396D96', fontFamily: 'sans-serif' }}>
              Download Class Wise Curriculum
            </a>
            <EnquireButton />
          </div>
        </div>
      </section>

      {/* Teaching Methodology Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#396D96', fontFamily: 'sans-serif' }}>
            Teaching Methodology
          </h2>

          {/* Introductory Paragraph */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8" style={{ fontFamily: 'sans-serif' }}>
            Our school, Kalp Vriksh, is founded on the belief that learning is a deeply personalized journey. We cultivate an inclusive and stimulating environment where curiosity is celebrated, and young learners are provided with boundless opportunities to explore, discover, and develop their full potential without limitations.
          </p>

          {/* Methodology Points */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-[#396D96] flex-shrink-0 mt-1"></div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                <strong>Collaborative Planning:</strong> Our educators utilize dedicated time for cross-disciplinary collaboration to design lessons that are integrated, relevant, and engaging.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-[#396D96] flex-shrink-0 mt-1"></div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                We prioritize high standards, focusing on fewer concepts with greater depth to ensure true mastery and critical thinking, not just rote memorization.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-[#396D96] flex-shrink-0 mt-1"></div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                We empower students through a self-initiated work and learning process, encouraging ownership and internal motivation in their educational path.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-[#396D96] flex-shrink-0 mt-1"></div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                Implementation of multi-disciplinary, project-based learning with a global focus, allowing students to apply theoretical knowledge to real-world challenges.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-[#396D96] flex-shrink-0 mt-1"></div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                Lessons are structured to actively engage students in higher-level thinking skills such as analyzing, evaluating, and creating, moving beyond basic recall.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-[#396D96] flex-shrink-0 mt-1"></div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                Subjects are intentionally linked and taught through common themes and integrated projects, showing the interconnectedness of knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Examination & Evaluation Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#396D96', fontFamily: 'sans-serif' }}>
            Examination & Evaluation
          </h2>

          {/* Introductory Paragraph */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6" style={{ fontFamily: 'sans-serif' }}>
            As per CBSE guidelines, Continuous and Comprehensive Evaluation (CCE) is followed for all examinations from Classes I to X. This evaluation system refers to a curricular initiative with assessment covering all aspects of development. It aims to shift emphasis from examination centric rote learning to a more holistic approach to education, and intends to encourage and improve class-room discussions for meaningful learning as the fear of tests is removed. Hence, evaluation becomes a positive input towards improving the teaching and learning process and not as a fear or deterrent.
          </p>

          {/* Additional Paragraphs */}
          <div className="space-y-6">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
              The evaluation is divided into two parts - formative assessment, accounting for 40% and summative assessment, accounting for 60%. The students are tested for both scholastic and co-curricular excellence. The report card reflects not only the scholastic aspects, but also personality attributes, behaviour, interests, attitudes, values and proficiency in indoor as well as outdoor co-curricular activities. Due to a continuous review, learning difficulties are identified regularly and suitable solutions are employed to improve performance. Also it provides flexibility to plan an academic schedule without the restriction of a very rigid timeline of the education board.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
              The formative assessment is a continuous process all through the session, carried out by teachers to monitor progress in the classroom, in an effective manner. The regular descriptive feedback helps students gauge and improve their performance. Areas of evaluation include oral questions, conversational skills, projects, assignments, quizzes, and research work.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
              The summative assessment, on the other hand, is carried out at the end of the term to measure how much a student has learnt through the course of the year. The test papers for academic subjects include multiple-choice questions, short answer questions and long answer questions and are graded. The co-scholastic areas on which the students are judged include life skills (critical thinking skills, social skills and emotional skills), attitude towards teachers, schoolmates, school programs and the environment, values, literary and creative skills, and performance in clubs and sports.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

