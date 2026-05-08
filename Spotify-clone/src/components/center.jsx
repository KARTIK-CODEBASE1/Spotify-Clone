import { useState } from 'react'
const iconFilter = { filter: 'brightness(0) invert(1)' }

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

const artistSection = {
  title: 'Popular artists',
  items: [
    { name: 'Bad Bunny', image: '/Artist-cover/badbunny.webp', accent: 'from-[#8f8f8f] to-[#2f2f2f]' },
    { name: 'Taylor Swift', image: '/Artist-cover/taylor_swift.webp', accent: 'from-[#3fa4d2] to-[#20304a]' },
    { name: 'The Weeknd', image: '/Artist-cover/theWeeknd.webp', accent: 'from-[#ffbb74] to-[#bd5d2e]' },
    { name: 'Drake', image: '/Artist-cover/Drake.jpg', accent: 'from-[#d7d8de] to-[#64646e]' },
    { name: 'Billie Eilish', image: '/Artist-cover/billie_eilish.webp', accent: 'from-[#9b8c86] to-[#2e2a28]' },
    { name: 'Kendrick Lamar', image: '/Artist-cover/kendrick_lamar.webp', accent: 'from-[#f6f6f6] to-[#7d7d7d]' },
  ],
}

const footerSection = {
  content: [
    {
      heading: 'Company',
      items: [
        'About',
        'Jobs',
        'For the Record',
      ],
    },
    {
      heading: 'Communities',
      items: [
        'For Artists',
        'Developers',
        'Advertising',
        'Investors',
        'Vendors',
      ],
    },
    {
      heading: 'Useful Links',
      items: [
        'Support',
        'Free Mobile App',
        'Popular by Country',
        'Import your music',
      ]
    },
    {
      heading: 'Spotify Plans',
      items: [
        'Premium Lite',
        'Premium Standard',
        'Premium Platinum',
        'Premium Student',
        'Spotify Free',
      ]
    }
  ],
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
        className={`pointer-events-none sticky top-0 z-0 h-0 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-90'
          }`}
        aria-hidden="true"
      >
        <div className="h-64 bg-[linear-gradient(180deg,rgba(75,51,136,0.95)_0%,rgba(49,36,89,0.82)_42%,rgba(18,18,18,0)_100%)]" />
      </div>

      <div className="relative z-10 px-5 pb-10">
        <div
          className={`sticky top-0 z-20 -mx-5 px-5 pb-4 pt-5 transition-colors duration-300 ${isScrolled
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
                        <div className="flex h-full w-full items-end justify-start bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.35))] p-4" />
                      </div>

                      <button
                        type="button"
                        aria-label={`Play ${song.title}`}
                        className="absolute hover:scale-[1.03] cursor-pointer bottom-3 right-3 flex h-14 w-14 translate-y-4 items-center justify-center rounded-full bg-[#1ed760]  text-black opacity-0 shadow-[0_12px_24px_rgba(0,0,0,0.35)] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
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
                      {artist.image ? (
                        <img
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
          </section>
        </div>
        <footer className="mt-20 border-t border-[#2a2a2a] text-[#b3b3b3]">
          <section className="grid gap-x-6 gap-y-8 pt-10 sm:grid-cols-2 lg:grid-cols-5">
            {footerSection.content.map((group) => (
              <div key={group.heading}>
                <h3 className="text-base font-bold text-white">{group.heading}</h3>
                <div className="mt-4 space-y-2 text-sm ">
                  {group.items.map((item) => (
                    <p className='hover:text-white cursor-pointer' key={item}>{item}</p>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex gap-4">
              <button
                type="button"
                aria-label="Instagram"
                className="flex h-10 w-10 gap-1 font-bold text-sm shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] transition duration-200 hover:bg-[#2a2a2a]"
              >
                <img
                  className="h-5 w-5"
                  style={iconFilter}
                  src="/center-elements/instagram-svgrepo-com.svg"
                  alt=""
                />
              </button>

              <button
                type="button"
                aria-label="Twitter"
                className="flex h-10 w-10 gap-1 font-bold text-sm shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] transition duration-200 hover:bg-[#2a2a2a]"
              >
                <img
                  className="h-4 w-4"
                  style={iconFilter}
                  src="/center-elements/twitter-social-logotype-svgrepo-com.svg"
                  alt=""
                />
              </button>

              <button
                type="button"
                aria-label="Facebook"
                className="flex h-10 w-10 gap-1 font-bold text-sm shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] transition duration-200 hover:bg-[#2a2a2a]"
              >
                <img
                  className="h-5 w-5"
                  style={iconFilter}
                  src="/center-elements/facebook-svgrepo-com.svg"
                  alt=""
                />
              </button>
            </div>
          </section>
          <footer className="mt-8 border-t border-[#2a2a2a] text-[#b3b3b3]">
              <div className='mt-7 text-sm'>
                ©2026 Spotify-Clone
              </div>
          </footer>
        </footer>
      </div>
    </main>
  )
}

export default CenterBar
