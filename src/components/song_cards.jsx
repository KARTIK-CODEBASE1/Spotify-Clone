import { useState } from 'react'

const songSections = [
  {
    title: 'Trending songs',
    items: [
      {
        title: 'National Treasure',
        artist: 'Drake',
        cover: '/cover-art/iceman2.jpg',
        audio: '/music/NationalTreasure.mp3',
      },
      {
        title: 'Billie Eilish, Khalid - lovely',
        artist: 'Billie Eilish',
        cover: '/cover-art/lovely.webp',
        audio: '/music/billie-eilish.mp3',
      },
      {
        title: 'Money Trees',
        artist: 'Kendrick Lamar',
        cover: '/cover-art/money_trees.jpg',
        audio: '/music/kendrick-lamar.mp3',
      },
      {
        title: 'BAD BUNNY x JHAY CORTEZ - DÁKITI',
        artist: 'Bad Bunny',
        cover: '/cover-art/bad_bunny.jpg',
        audio: '/music/bad-bunny.mp3',
      },
      {
        title: 'Taylor Swift - Shake It Off',
        artist: 'Taylor Swift',
        cover: '/cover-art/shake_it_off.png',
        audio: '/music/taylor-swift.mp3',
      },
      {
        title: 'The Weeknd - Blinding Lights',
        artist: 'The Weeknd',
        cover: '/cover-art/blinding_lights.png',
        audio: '/music/blinding-lights.mp3',
      },
      {
        title: 'The Kill 2',
        artist: 'Lex Amarni',
        cover: '/cover-art/the_kill_2.png',
        audio: '/music/the-kill-2.mp3',
      },
      {
        title: 'Under Your Spell',
        artist: 'Snow Strippers',
        cover: '/cover-art/under_your_spell.png',
        audio: '/music/under-your-spell.mp3',
      },
      {
        title: 'Ice - Super Slowed',
        artist: 'ZERTAL',
        cover: '/cover-art/ice_zertal.png',
        audio: '/music/ice-slowed.mp3',
      },
      {
        title: 'Love on me - Jtbazz',
        artist: 'Jtbazz',
        cover: '/cover-art/love_on_me.png',
        audio: '/music/love-on-me.mp3',
      },
      {
        title: 'No Pole',
        artist: 'Don Toliver',
        cover: '/cover-art/no_pole.png',
        audio: '/music/don-toliver-no-pole.mp3',
      },
      {
        title: 'ODETARI - KEEP UP',
        artist: 'Odetari',
        cover: '/cover-art/keep_up.png',
        audio: '/music/odetari-keep-up.mp3',
      },
    ],
  },
]

function SongCards({ playSong }) {
  const [showAll, setShowAll] = useState(false)



  return (
    <>
      {songSections.map((section) => (
        <section key={section.title}>
          <div className="flex items-end justify-between gap-4">
            <h2 className="ml-4 text-2xl font-extrabold text-white">
              {section.title}
            </h2>

            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="cursor-pointer pt-3 font-bold text-[#b3b3b3] transition duration-200 hover:text-white"
            >
              {showAll ? 'Show less' : 'Show all'}
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-6">
            {(showAll
              ? section.items
              : section.items.slice(0, 6)
            ).map((song) => (
              <article
                key={song.title}
                className="group flex flex-row gap-3 rounded-xl p-3 transition duration-200 hover:bg-[rgba(255,255,255,0.06)] md:flex-col"
              >
                <div className="relative">
                  <div
                    onClick={(event) => {

                      event.stopPropagation()

                      playSong(song)

                    }}
                    className="
                      h-16 w-16 shrink-0
                      cursor-pointer
                      overflow-hidden rounded-md
                      shadow-[0_18px_36px_rgba(0,0,0,0.34)]
                      md:h-auto md:w-auto
                      md:aspect-square
                    "
                  >
                    <img
                      src={song.cover}
                      alt={song.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <button
                    type="button"
                    aria-label={`Play ${song.title}`}
                    onClick={(event) => {

                      event.stopPropagation()

                      playSong(song)

                    }}
                    className="
                      absolute bottom-3 right-3
                      hidden h-14 w-14
                      translate-y-4
                      cursor-pointer
                      items-center justify-center
                      rounded-full
                      bg-[#1ed760]
                      text-black
                      opacity-0
                      shadow-[0_12px_24px_rgba(0,0,0,0.35)]
                      transition duration-300
                      group-hover:translate-y-0
                      group-hover:opacity-100
                      hover:scale-[1.03]
                      md:flex
                    "
                  >
                    <span className="ml-1">▶</span>
                  </button>
                </div>

                <div className="flex min-w-0 flex-col justify-center">
                  <h3 className="line-clamp-2 text-sm font-bold text-white md:mt-3 md:text-xl">
                    {song.title}
                  </h3>

                  <div className="mt-1 flex items-start gap-2 text-sm text-[#b3b3b3] md:mt-2 md:text-base">
                    <p className="line-clamp-2">{song.artist}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}


    </>
  )
}

export default SongCards