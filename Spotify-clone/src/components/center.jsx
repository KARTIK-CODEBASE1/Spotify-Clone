import { useState } from 'react'

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
        tag: 'E',
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

const artistSection = {
  title: 'Popular artists',
  items: [
    { name: 'Pritam', accent: 'from-[#5a4947] to-[#1b1b1b]' },
    { name: 'Arijit Singh', accent: 'from-[#3fa4d2] to-[#20304a]' },
    { name: 'Anirudh Ravichander', accent: 'from-[#ffbb74] to-[#bd5d2e]' },
    { name: 'Vishal-Shekhar', accent: 'from-[#d7d8de] to-[#64646e]' },
    { name: 'Sachin-Jigar', accent: 'from-[#9b8c86] to-[#2e2a28]' },
    { name: 'Atif Aslam', accent: 'from-[#f6f6f6] to-[#7d7d7d]' },
  ],
}

const footerSection = {
  content: [
    sec1 = {
      heading: 'Company',
      items: [
        'About',
        'Jobs',
        'For the Record'
      ]
    },
    sec2 = {
      heading: 'Communities',
      items: [
        'For Artists',
        'Developers',
        'Advertising',
        'Investors'
      ]
    },
  ]
}

function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
}

function CenterBar() {
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <main
      onScroll={(event) => setIsScrolled(event.currentTarget.scrollTop > 24)}
      className="relative min-h-0  overflow-y-auto rounded-xl bg-[#121212]"
    >
      <div
        className={`pointer-events-none sticky top-0 z-0 h-0 transition-opacity duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-90'
        }`}
        aria-hidden="true"
      >
        <div className="h-64 bg-[linear-gradient(180deg,rgba(75,51,136,0.95)_0%,rgba(49,36,89,0.82)_42%,rgba(18,18,18,0)_100%)]" />
      </div>

      <div className="relative z-10 px-5 pb-10">
        <div
          className={`sticky top-0 z-20 -mx-5 px-5 pb-4 pt-5 transition-colors duration-300 ${
            isScrolled
              ? 'bg-[rgba(69,48,122,0.96)] backdrop-blur-sm'
              : 'bg-transparent'
          }`}
        >
          <div className="h-4" />
        </div>

        <div className="space-y-14">
          {songSections.map((section) => (
            <section key={section.title}>
              <div className="flex items-end justify-between gap-4">
                <h2 className="text-2xl font-extrabold ml-4 text-white">
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
                        <div className="flex h-full w-full items-end justify-start bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.35))] p-4">

                        </div>
                      </div>

                      <button
                        type="button"
                        aria-label={`Play ${song.title}`}
                        className="absolute bottom-3 right-3 flex h-14 w-14 translate-y-4 items-center justify-center rounded-full bg-[#1ed760]  text-black opacity-0 shadow-[0_12px_24px_rgba(0,0,0,0.35)] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                      >
                        <span className="ml-1">▶</span>
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

          <section>
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl font-extrabold tracking-tight text-white">
                {artistSection.title}
              </h2>
              <button
                type="button"
                className="pt-3 font-bold text-[#b3b3b3] transition duration-200 hover:text-white"
              >
                Show all
              </button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
              {artistSection.items.map((artist) => (
                <article
                  key={artist.name}
                  className="group rounded-xl p-3 transition duration-200 hover:bg-[rgba(255,255,255,0.06)]"
                >
                  <div className="relative">
                    <div
                      className={`aspect-square overflow-hidden rounded-full bg-gradient-to-br ${artist.accent} shadow-[0_18px_36px_rgba(0,0,0,0.34)]`}
                    >
                      <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.24),transparent_45%)] text-5xl font-black text-white">
                        {getInitials(artist.name)}
                      </div>
                    </div>

                    <button
                      type="button"
                      aria-label={`Play ${artist.name}`}
                      className="absolute bottom-3 right-3 flex h-14 w-14 translate-y-4 items-center justify-center rounded-full bg-[#1ed760] text-xl text-black opacity-0 shadow-[0_12px_24px_rgba(0,0,0,0.35)] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <span className="ml-1">▶</span>
                    </button>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-white">{artist.name}</h3>
                  <p className="mt-2 text-lg text-[#b3b3b3]">Artist</p>
                </article>
              ))}
            </div>
          </section>
        </div>
        <footer>
        <section>
          <div className="hidden h-px w-full mt-9 bg-[#2a2a2a] lg:block" aria-hidden="true" />
          
          <div className="hidden h-px w-full mt-9 bg-[#2a2a2a] lg:block" aria-hidden="true" />
        </section>
        </footer>
      </div>
    </main>
  )
}

export default CenterBar
