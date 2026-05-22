const iconFilter = { filter: 'brightness(0) invert(1)' }

const libraryCards = [
  {
    title: 'Create your first playlist',
    description: "It's easy, we'll help you",
    action: 'Create playlist',
  },
]

const footerLinks = [
  {
    label: 'Legal',
    href: 'https://www.spotify.com/in-en/legal/end-user-agreement/',
  },
  {
    label: 'Safety & Privacy Center',
    href: 'https://www.spotify.com/in-en/safetyandprivacy/',
  },
  {
    label: 'Privacy Policy',
    href: 'https://www.spotify.com/in-en/legal/privacy-policy/',
  },
  {
    label: 'Cookies',
    href: 'https://www.spotify.com/in-en/legal/cookies-policy/',
  },
  {
    label: 'About Ads',
    href: 'https://www.spotify.com/in-en/legal/privacy-policy/#s3',
  },
  {
    label: 'Accessibility',
    href: 'https://www.spotify.com/in-en/accessibility/',
  },
]

function LeftSidebar() {
  return (
    <aside className="flex h-full min-h-0 flex-col overflow-hidden rounded-xl bg-[#121212]">
      <div className="flex items-center justify-between px-4 pb-3 pt-4">
        <span className="text-[1.1rem] font-extrabold text-white">Your Library</span>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Create playlist"
            className="flex h-10 w-25 cursor-pointer gap-2 font-bold text-sm shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] transition duration-200 hover:bg-[#2a2a2a]"
          >
            <img
              className="h-5 w-5"
              style={iconFilter}
              src="/Svg/sidebar-elements/plus-large-svgrepo-com.svg"
              alt=""
            /><span>Create</span>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden px-1 pb-72">
        <div className="space-y-2">
          {libraryCards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl bg-[#1f1f1f] px-5 py-5"
            >
              <h2 className="text-lg font-extrabold text-white">{card.title}</h2>
              <p className="mt-2 text-sm font-medium text-white/90">{card.description}</p>
              <button
                type="button"
                className="mt-5 cursor-pointer rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black transition duration-200 hover:scale-[1.02]"
              >
                {card.action}
              </button>
            </article>
          ))}
        </div>

        <div className="px-4 pt-10">
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[#b3b3b3]">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer transition duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="mt-5 flex cursor-pointer items-center gap-3 rounded-full border border-[#727272] py-1 pl-2 pr-[14px] text-sm font-bold text-white transition duration-200 hover:border-white hover:scale-[1.03]"
          >
            <img
              className="h-5 w-5"
              style={iconFilter}
              src="/Svg/sidebar-elements/world-svgrepo-com.svg"
              alt=""
            />
            <span>English</span>
          </button>
        </div>
      </div>
    </aside>
  )
}

export default LeftSidebar
