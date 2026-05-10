import { useState } from 'react'
import Artists from './artists'
import SongCards from './song_cards'

const iconFilter = { filter: 'brightness(0) invert(1)' }

const footerSection = {
  content: [
    {
      heading: 'Company',
      items: ['About', 'Jobs', 'For the Record'],
    },
    {
      heading: 'Communities',
      items: ['For Artists', 'Developers', 'Advertising', 'Investors', 'Vendors'],
    },
    {
      heading: 'Useful Links',
      items: ['Support', 'Free Mobile App', 'Popular by Country', 'Import your music'],
    },
    {
      heading: 'Spotify Plans',
      items: [
        'Premium Lite',
        'Premium Standard',
        'Premium Platinum',
        'Premium Student',
        'Spotify Free',
      ],
    },
  ],
}

function CenterBar() {
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <main
      onScroll={(event) => setIsScrolled(event.currentTarget.scrollTop > 24)}
      className="relative min-h-0 overflow-y-auto rounded-xl bg-[#121212]"
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
          <SongCards />
          <Artists />
        </div>

        <footer className="mt-20 border-t border-[#2a2a2a] text-[#b3b3b3]">
          <section className="grid gap-x-6 gap-y-8 pt-10 sm:grid-cols-2 lg:grid-cols-5">
            {footerSection.content.map((group) => (
              <div key={group.heading}>
                <h3 className="text-base font-bold text-white">{group.heading}</h3>
                <div className="mt-4 space-y-2 text-sm">
                  {group.items.map((item) => (
                    <p key={item} className="cursor-pointer hover:text-white">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex gap-4">
              <button
                type="button"
                aria-label="Instagram"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] text-sm font-bold transition duration-200 hover:bg-[#2a2a2a]"
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
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] text-sm font-bold transition duration-200 hover:bg-[#2a2a2a]"
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
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] text-sm font-bold transition duration-200 hover:bg-[#2a2a2a]"
              >
                <img
                  className="h-7 w-7"
                  style={iconFilter}
                  src="/center-elements/facebook-svgrepo-com.svg"
                  alt=""
                />
              </button>
            </div>
          </section>

          <div className="mt-8 border-t border-[#2a2a2a] pt-7 text-sm">
            © Spotify-Clone 2026
          </div>
        </footer>
      </div>
    </main>
  )
}

export default CenterBar
