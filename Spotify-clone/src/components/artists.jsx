import { useRef, useState } from 'react'

const artistSection = {
  title: 'Popular artists',
  items: [
    { name: 'Bad Bunny', image: '/Artist-cover/badbunny.webp', audio: '/music/bad-bunny.mp3'},
    { name: 'Taylor Swift', image: '/Artist-cover/taylor_swift.webp', audio: '/music/taylor-swift.mp3'},
    { name: 'The Weeknd', image: '/Artist-cover/theWeeknd.webp',audio: '/music/blinding-lights.mp3'},
    { name: 'Drake', image: '/Artist-cover/Drake.jpg', audio: '/music/drake-what-did-i-miss.mp3'},
    { name: 'Billie Eilish', image: '/Artist-cover/billie_eilish.webp', audio: '/music/billie-eilish.mp3'},
    { name: 'Kendrick Lamar', image: '/Artist-cover/kendrick_lamar.webp',audio: '/music/kendrick-lamar.mp3'},
  ],
}

function Artists() {
  const [currentSong, setCurrentSong] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)
  
    const audioRef = useRef(null)
  
    const playSong = (song) => {
      setCurrentSong(song)
  
      audioRef.current.src = song.audio
  
      audioRef.current.play()
  
      setIsPlaying(true)
    }
  return (
    <section>
      <div className="flex items-end justify-between gap-4 ">
        <h2 className="text-2xl font-extrabold tracking-tight text-white">
          {artistSection.title}
        </h2>
      </div>

      <div className="mt-8 grid gap-3 grid-cols-2 md:grid-cols-3 xl:grid-cols-6 ">
        {artistSection.items.map((artist) => (
          <article
            key={artist.name}
            className="group rounded-xl p-3 transition duration-200 hover:bg-[rgba(255,255,255,0.06)]"
          >
            <div className="relative">
              <div
                className={`
                      aspect-square
                      overflow-hidden
                      rounded-full
                      border-2
                      border-transparent
                      shadow-[0_18px_36px_rgba(0,0,0,0.34)]
                      transition duration-200
                      group-hover:border-white
                      cursor-pointer
                  `}
              >
                {artist.image ? (
                  <img
                    onClick={() => playSong(artist)}
                    src={artist.image}
                    alt={artist.name}

                    className="h-full w-full object-cover"
                  />
                ) : null}
              </div>
            </div>

            <h3 className="mt-4 text-2xl font-bold text-white">{artist.name}</h3>
            <p className="mt-2 text-lg text-[#b3b3b3]">Artist</p>
          </article>
        ))}
      </div>
      <audio ref={audioRef} />
    </section>
    
  )
 }

export default Artists
