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

function FooterSection() {
  return (
    <footer className="mt-20 border-t border-[#2a2a2a] text-[#b3b3b3]">
      <section className="grid gap-x-6 gap-y-8 pt-10 lg:grid-cols-5">
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
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#1f1f1f] text-sm font-bold transition duration-200 hover:bg-[#2a2a2a]"
          >
            <img
              className="h-5 w-5"
              style={iconFilter}
              src="/Svg/center-elements/instagram-svgrepo-com.svg"
              alt=""
            />
          </button>

          <button
            type="button"
            aria-label="Twitter"
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#1f1f1f] text-sm font-bold transition duration-200 hover:bg-[#2a2a2a]"
          >
            <img
              className="h-4 w-4"
              style={iconFilter}
              src="/Svg/center-elements/twitter-social-logotype-svgrepo-com.svg"
              alt=""
            />
          </button>

          <button
            type="button"
            aria-label="Facebook"
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#1f1f1f] text-sm font-bold transition duration-200 hover:bg-[#2a2a2a]"
          >
            <img
              className="h-7 w-7"
              style={iconFilter}
              src="/Svg/center-elements/facebook-svgrepo-com.svg"
              alt=""
            />
          </button>
        </div>
      </section>

      <div className="mt-8 border-t border-[#2a2a2a] pt-7 text-sm">
        Â© Spotify-Clone 2026
      </div>
    </footer>
  )
}

export default FooterSection
