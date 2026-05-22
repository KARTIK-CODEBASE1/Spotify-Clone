const iconFilter = { filter: 'brightness(0) invert(1)' }

const footerSection = {
  content: [
    {
      heading: 'Company',
      items: [
        { label: 'About', href: 'https://www.spotify.com/in-en/about-us/contact/' },
        { label: 'Jobs', href: 'https://www.lifeatspotify.com/' },
        { label: 'For the Record', href: 'https://newsroom.spotify.com/' },
      ],
    },
    {
      heading: 'Communities',
      items: [
        { label: 'For Artists', href: 'https://artists.spotify.com/' },
        { label: 'Developers', href: 'https://developer.spotify.com/' },
        { label: 'Advertising', href: 'https://ads.spotify.com/en-IN/' },
        { label: 'Investors', href: 'https://investors.spotify.com/' },
        { label: 'Vendors', href: 'https://www.spotify.com/in-en/for-vendors/' },
      ],
    },
    {
      heading: 'Useful Links',
      items: [
        { label: 'Support', href: 'https://support.spotify.com/in-en/' },
        {
          label: 'Free Mobile App',
          href: 'https://play.google.com/store/apps/details?id=com.spotify.music',
        },
        { label: 'Popular by Country', href: 'https://open.spotify.com/genre' },
        { label: 'Import your music', href: 'https://support.spotify.com/in-en/article/local-files/' },
      ],
    },
    {
      heading: 'Spotify Plans',
      items: [
        { label: 'Premium Lite', href: 'https://www.spotify.com/in-en/premium/' },
        { label: 'Premium Standard', href: 'https://www.spotify.com/in-en/premium/' },
        { label: 'Premium Platinum', href: 'https://www.spotify.com/in-en/premium/' },
        { label: 'Premium Student', href: 'https://www.spotify.com/in-en/student/' },
        { label: 'Spotify Free', href: 'https://www.spotify.com/in-en/free/' },
      ],
    },
  ],
}

function FooterSection() {
  return (
    <footer className="mt-16 border-t border-[#2a2a2a] text-[#b3b3b3] sm:mt-20">
      <section className="grid gap-x-6 gap-y-8 pt-10 lg:grid-cols-5">
        {footerSection.content.map((group) => (
          <div key={group.heading}>
            <h3 className="text-base font-bold text-white">{group.heading}</h3>
            <div className="mt-4 space-y-2 text-sm">
              {group.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block cursor-pointer hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ))}

        <div className="flex gap-4 md:justify-start">
          <a
            href="https://www.instagram.com/spotify/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#1f1f1f] text-sm font-bold transition duration-200 hover:bg-[#2a2a2a]"
          >
            <img
              className="h-5 w-5"
              style={iconFilter}
              src="/Svg/center-elements/instagram-svgrepo-com.svg"
              alt=""
            />
          </a>

          <a
            href="https://x.com/spotify"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#1f1f1f] text-sm font-bold transition duration-200 hover:bg-[#2a2a2a]"
          >
            <img
              className="h-4 w-4"
              style={iconFilter}
              src="/Svg/center-elements/twitter-social-logotype-svgrepo-com.svg"
              alt=""
            />
          </a>

          <a
            href="https://www.facebook.com/Spotify"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#1f1f1f] text-sm font-bold transition duration-200 hover:bg-[#2a2a2a]"
          >
            <img
              className="h-7 w-7"
              style={iconFilter}
              src="/Svg/center-elements/facebook-svgrepo-com.svg"
              alt=""
            />
          </a>
        </div>
      </section>

      <div className="mt-8 border-t border-[#2a2a2a] pb-4 pt-7 text-sm">
        SONIQUE 2026
      </div>
    </footer>
  )
}

export default FooterSection
