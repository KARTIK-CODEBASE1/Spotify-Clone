import { useState } from 'react'

const shortcutKeys = ['Ctrl', 'Shift', 'L']
const iconFilter = { filter: 'brightness(0) invert(1)' }
const hamburgerPrimaryLinks = [
  'Log in',
  'Sign up',
]
const hamburgerSecondaryLinks = [
  'Premium',
  'Help',
  'Download',
  'Privacy',
  'Terms'
]


function Navbar() {
  const [searchQuery, setSearchQuery] = useState('')
  const showClearButton = searchQuery.trim() !== ''
  const showShortcuts = !showClearButton
  const [isMenueOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="px-2 py-2">
      <nav className="flex flex-wrap items-center justify-between ">
        <div className="flex flex-wrap items-center gap-4">

          <div className="flex items-center gap-1">
            <img
              className="h-12 w-12 shrink-0"
              style={iconFilter}
              src="/Svg/navbar-elements/spotify-logo.svg"
              alt="Spotify"
            />

            <span className="font-black tracking-tight md:hidden">
              Spotify
            </span>
          </div>

          <button
            type="button"
            aria-label="Home"
            className=" hidden md:flex flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] transition duration-200 hover:bg-[#2b2b2b]"
          >
            <img
              className="h-6 w-6"
              style={iconFilter}
              src="/Svg/navbar-elements/home-solid-svgrepo-com.svg"
              alt=""
            />
          </button>

          <div className="group/search hidden md:flex flex h-12 min-w-0 flex-1 items-center gap-3 rounded-full border border-transparent bg-[#1f1f1f] px-4 transition duration-200 hover:bg-[#2b2b2b] focus-within:border-[#5a5a5a] focus-within:bg-[#2b2b2b] sm:min-w-[320px] lg:w-[560px]">
            <button
              type="button"
              aria-label="Search"
              className="flex shrink-0 items-center justify-center"
            >
              <img
                className="h-[26px] w-[26px] opacity-70 transition duration-200 group-hover/search:opacity-100 group-focus-within/search:opacity-100"
                style={iconFilter}
                src="/Svg/navbar-elements/search-icon.svg"
                alt=""
              />
            </button>

            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="What do you want to play?"
              aria-label="What do you want to play?"
              className="min-w-0  flex-1 bg-transparent text-base font-medium text-white outline-none placeholder:text-[#b3b3b3] [&::-webkit-search-cancel-button]:appearance-none"
            />

            {showShortcuts ? (
              <div
                aria-hidden="true"
                className="ml-auto hidden items-center gap-1.5 group-hover/search:flex group-focus-within/search:flex"
              >
                {shortcutKeys.map((key) => (
                  <span
                    key={key}
                    className="inline-flex h-7 min-w-8 items-center justify-center rounded-md border border-[#727272] px-2 text-xs text-[#e6e6e6]"
                  >
                    {key}
                  </span>
                ))}
              </div>
            ) : (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setSearchQuery('')}
                className="flex shrink-0 items-center justify-center"
              >
                <img
                  className="h-[26px] w-[26px] opacity-90 transition duration-200 hover:scale-[1.05]"
                  style={iconFilter}
                  src="/Svg/navbar-elements/close-icon.svg"
                  alt=""
                />
              </button>
            )}

            <div className="h-6 w-px shrink-0 bg-[#727272]" aria-hidden="true" />

            <button
              type="button"
              aria-label="Browse"
              className="flex shrink-0 items-center justify-center"
            >
              <img
                className="h-[26px] w-[26px] opacity-70 transition duration-200 cursor-pointer hover:scale-[1.05] hover:opacity-100 group-focus-within/search:opacity-100"
                style={iconFilter}
                src="/Svg/navbar-elements/browse-icon.svg"
                alt=""
              />
            </button>
          </div>
        </div>

        <div className="flex hidden md:flex flex-wrap items-center gap-5 text-sm  font-bold text-[#b3b3b3]">
          <button
            type="button"
            className="transition duration-200 hover:text-white"
          >
            Premium
          </button>

          <button
            type="button"
            className="transition duration-200 hover:text-white"
          >
            Support
          </button>

          <button
            type="button"
            className="transition duration-200 hover:text-white"
          >
            Download
          </button>


          <div className="hidden h-6 w-[2px] bg-white lg:block" aria-hidden="true" />

          <button
            type="button"
            className="flex items-center gap-2 transition duration-200 hover:text-white"
          >
            <img
              className="h-5 w-5"
              style={iconFilter}
              src="/Svg/navbar-elements/install-option-svgrepo-com.svg"
              alt=""
            />
            <span>Install App</span>
          </button>

          <button
            type="button"
            className="transition duration-200 hover:text-white"
          >
            Sign up
          </button>

          <button
            type="button"
            className="rounded-full bg-white px-8 py-2 text-base font-bold text-black transition duration-200 hover:scale-[1.02]"
          >
            Log in
          </button>
        </div>
        <div className="flex items-center gap-6 md:hidden">

          <button
            type="button"
            onClick={() =>
              window.open(
                'https://play.google.com/store/apps/details?id=com.spotify.music',
                '_blank'
              )
            }
            className="rounded-full bg-white px-3 py-0.5 text-base font-bold text-black"
          >
            Open App
          </button>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <img
              className="h-6 w-6 shrink-0"
              style={iconFilter}
              src="/Svg/navbar-elements/hamburger-svgrepo-com.svg"
              alt=""
            />
          </button>

          {
            isMenueOpen && (
              <div className='fixed inset-0 z-40 bg-black/70'
                onClick={() => setIsMenuOpen(false)}
              >
              </div>
            )
          }

          <div
            className={`
              fixed top-0 right-0
              h-full w-[280px]
              bg-[#121212]
              z-50
              transform transition-transform duration-300
              ${isMenueOpen ? 'translate-x-0' : 'translate-x-full'}
              `}
          >
            <div className='flex justify-end'>
              <button
                onClick={() => setIsMenuOpen(false)}
                className='text-white text-2xl'
              >
                <img
                  className="h-8 w-8 mt-2 mr-5 shrink-0 "
                  style={iconFilter}
                  src="/Svg/navbar-elements/close-icon.svg"
                  alt=""
                />

              </button>
            </div>


            <div className='flex flex-col gap-4 text-1xl text-white mt-5  ml-5 mb-8 font-black'>
              {hamburgerPrimaryLinks.map((link) => (
                <span key={link}>{link}</span>
              ))}
            </div>
            <div className="h-[2px] w-[15px] ml-5 bg-white" aria-hidden="true" />
            <div className='flex flex-col gap-4 text-[12px] font-black text-white mt-8 ml-5'>
              {hamburgerSecondaryLinks.map((link) => (
                <span key={link}>{link}</span>
              ))}
            </div>
          </div>

        </div>

      </nav>
    </header>
  )
}

export default Navbar
