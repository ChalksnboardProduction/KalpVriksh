import PhotoGallery from './PhotoGallery'
import VideoGallery from './VideoGallery'

const samplePhotos = [
  '/Rectangle 1019.png',
  '/Rectangle 1020.png',
  '/Rectangle 1021.png',
  '/Rectangle 1022.png',
]

const sampleVideos = [
  'https://youtu.be/8vi0iHsqcyw?si=tfNI3W53NXZpeK86',
  'https://youtu.be/b3ibs3Uuag8?si=Hfozxkyh4eegdhgK',
  'https://youtu.be/A5ZDkbWzPCU?si=_cl4Ovr049eczfcF',
  'https://youtube.com/shorts/Su0e8aQVDfk?si=2FfBw_9pOusxQdEr',
]

export default function CampusLife({ photos = samplePhotos, videos = sampleVideos }) {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Campus Life</h2>
        <p className="text-sm md:text-base text-gray-600 mt-2">Explore the vibrant and enriching environment that our students experience every day</p>
      </div>

      <div className="flex flex-col gap-8">
        <PhotoGallery images={photos} />
        <VideoGallery videos={videos} />
      </div>
    </section>
  )
}
