import { useEffect, useState } from "react"

function ArtistModal({
  selectedArtist,
  isArtistClosing,
  closeArtist,
}) {
  const [artistBio, setArtistBio] = useState('')
  const [artistTags, setArtistTags] = useState([])
  const [listeners, setListeners] = useState('')

  useEffect(() => {
    if (!selectedArtist) return
    const fetchArtistInfo = async () => {
      const response = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${selectedArtist.name}&api_key=${import.meta.env.VITE_LASTFM_API_KEY}&format=json`
      )
      const data = await response.json()

      const cleanBio =
        data.artist.bio.summary
          .replace(/<a[^>]*>.*?<\/a>/g, '')
          .replace(/<\/?[^>]+(>|$)/g, '')
          .trim()
      setArtistBio(cleanBio.slice(0, 220) + '...')
      setArtistTags(data.artist.tags.tag)
      setListeners(data.artist.stats.listeners)

    }


    fetchArtistInfo()

  }, [selectedArtist])

  if (!selectedArtist) return null

  return (
    <div
      className="
        fixed inset-0 z-[100]
        flex items-center justify-center
        p-3 pb-3
        bg-[linear-gradient(130deg,rgba(29,185,84,0.12),rgba(124,58,237,0.12),rgba(37,99,235,0.12),rgba(29,185,84,0.08))]
        backdrop-blur-md
        md:pb-10
        md:bg-[rgba(0,0,0,0.55)]
      "
    >
      <div
        className={`
          relative
          ${isArtistClosing
            ? 'animate-[artistModalDown_0.3s_ease]'
            : 'animate-[artistModalUp_0.3s_ease]'
          }
        `}
      >
        <div
          className="
            absolute
            -inset-1
            rounded-[28px]
            opacity-70
            blur-lg
            animate-[artistGlow_10s_linear_infinite]
            bg-[conic-gradient(from_0deg,#1db954,#7c3aed,#1db954,#2563eb,#1db954)]
          "
        />

        <div
          className="
            absolute
            -inset-[2px]
            rounded-[28px]
            opacity-80
            blur-sm
            bg-[linear-gradient(130deg,#1db954,#7c3aed,#2563eb,#1db954)]
            bg-[length:300%_300%]
            animate-[artistBorderFlow_8s_ease_infinite]
          "
        />

        <div
          className="
            relative z-10
            h-full
            max-h-[calc(100dvh-1.5rem)]
            w-full
            overflow-y-auto 
            rounded-[28px]
            md:h-[500px]
            md:w-[800px]
            md:rounded-2xl
            bg-[linear-gradient(180deg,#262626_0%,#181818_100%)]
            shadow-[0_20px_80px_rgba(0,0,0,0.65)]
          "
        >
          <div className="flex flex-col md:h-full md:flex-row">
            <div className="flex justify-center pt-20 md:w-[40%] md:items-center md:pt-0">
              <img
                src={selectedArtist.image}
                alt=""
                className="
                  h-[240px]
                  w-[240px]
                  md:h-full
                  md:w-[320px]
                  sm:h-[280px]
                  sm:w-[280px]

                  rounded-2xl
                  object-cover
                "
              />
            </div>

            <div
              className="
                flex flex-1 flex-col justify-center
                px-5 py-7 md:px-10 md:py-0
              "
            >

              <h2 className="text-4xl font-black text-white sm:text-5xl">
                {selectedArtist.name}
              </h2>

              <p className="mt-3 text-sm text-[#b3b3b3]">
                {Number(listeners).toLocaleString()} listeners
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                {artistTags.slice(0, 4).map((tag) => (

                  <span
                    key={tag.name}
                    className="
                        rounded-full
                        bg-[#242424]
                        px-3 py-1
                        text-sm
                        text-white
                    "
                  >
                    {tag.name}
                  </span>

                ))}

              </div>

              <p
                className="
                    mt-6
                    text-sm
                    leading-6
                    text-[#d1d1d1]
                    sm:text-[15px]
                    sm:leading-7
                    "
              >
                {artistBio}
              </p>

            </div>

            <button
              onClick={closeArtist}
              className="
              absolute
              right-4
              top-4
              z-20

              flex h-11 w-11
              bg-[rgba(0,0,0,0.45)]
              items-center justify-center
              rounded-full
              backdrop-blur-sm
              text-xl font-bold text-white
              transition duration-200
              hover:bg-[#2a2a2a]
              cursor-pointer
            "
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistModal
