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

function Artists() {
  return (
    <section>
      <div className="flex items-end justify-between gap-4 ">
        <h2 className="text-2xl font-extrabold tracking-tight text-white">
          {artistSection.title}
        </h2>
      </div>

      <div className="mt-8 grid gap-3 grid-cols-2 md:grid-cols-3 xl:grid-cols-6 ">
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
  )
}

export default Artists
