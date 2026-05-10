const songSections = [
  {
    title: 'Trending songs',
    items: [
      {
        title: 'DRAKE - WHAT DID I MISS',
        artist: 'Drake',
        accent: 'from-[#1774ff] via-[#00a6ff] to-[#1d2f8f]',
      },
      {
        title: 'Billie Eilish, Khalid - lovely',
        artist: 'Billie Eilish',
        accent: 'from-[#4f4f4f] via-[#181818] to-[#000000]',
      },
      {
        title: 'Money Trees',
        artist: 'Kendrick Lamar',
        accent: 'from-[#ffcf8c] via-[#b57d58] to-[#28435f]',
      },
      {
        title: 'BAD BUNNY x JHAY CORTEZ - DÁKITI',
        artist: 'Bad Bunny',
        accent: 'from-[#f0bf60] via-[#8f5d48] to-[#3f2639]',
      },
      {
        title: 'Taylor Swift - Shake It Off',
        artist: 'Taylor Swift',
        accent: 'from-[#f7a7f7] via-[#eb6fb6] to-[#f0b85d]',
      },
      {
        title: 'The Weeknd - Blinding Lights',
        artist: 'The Weeknd',
        accent: 'from-[#625b4f] via-[#211d1a] to-[#090909]',
      },
      {
        title: 'The Kill 2',
        artist: 'Lex Amarni',
        accent: 'from-[#1774ff] via-[#00a6ff] to-[#1d2f8f]',
      },
      {
        title: 'Under Your Spell',
        artist: 'Snow Strippers',
        accent: 'from-[#4f4f4f] via-[#181818] to-[#000000]',
      },
      {
        title: 'Ice - Super Slowed',
        artist: 'ZERTAL',
        accent: 'from-[#ffcf8c] via-[#b57d58] to-[#28435f]',
      },
      {
        title: 'Love on me - Jtbazz',
        artist: 'Jtbazz',
        accent: 'from-[#abcf5c] via-[#d57d58] to-[#58635f]',
      },
      {
        title: 'No-Pole',
        artist: 'Don Toliver',
        accent: 'from-[#625b4f] via-[#211d1a] to-[#090909]',
      },
      {
        title: 'ODETARI - KEEP UP',
        artist: 'Odetari',
        accent: 'from-[#4f4f4f] via-[#181818] to-[#000000]',
      }
    ],
  },
]

function SongCards() {
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
              className="pt-3 font-bold text-[#b3b3b3] transition duration-200 hover:text-white"
            >
              Show all
            </button>
          </div>

          <div className="mt-8 grid gap-4 grid-cols-1 xl:grid-cols-3 2xl:grid-cols-6">
            {section.items.map((song) => (
              <article
                key={song.title}
                className="group flex flex-row gap-3 rounded-xl p-3 transition duration-200 hover:bg-[rgba(255,255,255,0.06)] md:flex-col"
              >
                <div className="relative">
                  <div
                    className={`
                      h-16 w-16 shrink-0
                      md:h-auto md:w-auto
                      md:aspect-square 
                      overflow-hidden rounded-md 
                      bg-gradient-to-br ${song.accent} 
                      shadow-[0_18px_36px_rgba(0,0,0,0.34)]`}
                  >
                    <div className="flex h-full w-full items-end justify-start bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.35))] p-4" />
                  </div>

                  <button
                    type="button"
                    aria-label={`Play ${song.title}`}
                    className="
                            absolute bottom-3 right-3
                            hidden md:flex
                            h-14 w-14
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
                            hover:scale-[1.03]"
                  >
                    <span className="ml-1">▶</span>
                  </button>
                </div>

                <div className="flex flex-col justify-center min-w-0">

                  <h3 className="line-clamp-2 text-sm font-bold text-white md:mt-3 md:text-xl">
                    {song.title}
                  </h3>

                  <div className="mt-1 flex items-start gap-2 text-sm text-[#b3b3b3] md:mt-2 md:text-base">
                    {song.tag ? (
                      <span className="mt-1 inline-flex h-6 min-w-6 items-center justify-center rounded bg-[#b3b3b3] px-1 text-sm font-bold text-[#121212]">
                        {song.tag}
                      </span>
                    ) : null}

                    <p className="line-clamp-2">{song.artist}</p>
                  </div>

                </div>
              </article>
            ))}
          </div>
        </section >
      ))
      }
    </>
  )
}

export default SongCards
