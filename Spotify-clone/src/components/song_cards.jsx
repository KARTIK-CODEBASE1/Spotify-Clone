const songSections = [
  {
    title: 'Trending songs',
    items: [
      {
        title: 'WOW (From "Hai Jawani Toh Ishq Hona...")',
        subtitle: 'Harrdy Sandhu, Tanishk Bagchi, Kiran Bajwa, Gill...',
        accent: 'from-[#1774ff] via-[#00a6ff] to-[#1d2f8f]',
      },
      {
        title: 'Boom Shaka',
        subtitle: 'KR$NA, Dhanda Nyoliwala',
        accent: 'from-[#4f4f4f] via-[#181818] to-[#000000]',
      },
      {
        title: 'Aitbaar (From "Chand Mera Dil")',
        subtitle: 'Sachin-Jigar, Faheem Abdullah, Amitabh...',
        accent: 'from-[#ffcf8c] via-[#b57d58] to-[#28435f]',
      },
      {
        title: 'Inaam (Ft. Badshah)',
        subtitle: 'Jasleen Royal, Badshah, Ansh Chahal',
        accent: 'from-[#f0bf60] via-[#8f5d48] to-[#3f2639]',
      },
      {
        title: 'Dil Waale Chor (From "Pati Patni Aur Woh...")',
        subtitle: 'Rochak Kohli, Shreya Ghoshal, Aditya Rikhari,...',
        accent: 'from-[#f7a7f7] via-[#eb6fb6] to-[#f0b85d]',
      },
      {
        title: 'Top Fella',
        subtitle: 'Karan Aujla, Mxrci',
        accent: 'from-[#625b4f] via-[#211d1a] to-[#090909]',
      },
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

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
            {section.items.map((song) => (
              <article
                key={song.title}
                className="group rounded-xl p-3 transition duration-200 hover:bg-[rgba(255,255,255,0.06)]"
              >
                <div className="relative">
                  <div
                    className={`aspect-square overflow-hidden rounded-md bg-gradient-to-br ${song.accent} shadow-[0_18px_36px_rgba(0,0,0,0.34)]`}
                  >
                    <div className="flex h-full w-full items-end justify-start bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.35))] p-4" />
                  </div>

                  <button
                    type="button"
                    aria-label={`Play ${song.title}`}
                    className="absolute bottom-3 right-3 flex h-14 w-14 translate-y-4 cursor-pointer items-center justify-center rounded-full bg-[#1ed760] text-black opacity-0 shadow-[0_12px_24px_rgba(0,0,0,0.35)] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:scale-[1.03]"
                  >
                    <span className="ml-1 ">▶</span>
                  </button>
                </div>

                <h3 className="mt-3 line-clamp-2 text-1xl font-bold text-white">
                  {song.title}
                </h3>

                <div className="mt-2 flex items-start gap-2 text-l text-[#b3b3b3]">
                  {song.tag ? (
                    <span className="mt-1 inline-flex h-6 min-w-6 items-center justify-center rounded bg-[#b3b3b3] px-1 text-sm font-bold text-[#121212]">
                      {song.tag}
                    </span>
                  ) : null}
                  <p className="line-clamp-2">{song.subtitle}</p>
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
