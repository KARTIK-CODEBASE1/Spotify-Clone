function ArtistModal({
  selectedArtist,
  isArtistClosing,
  closeArtist,
}) {
  if (!selectedArtist) return null

  return (
    <div
      className="
        fixed inset-0 z-[100]
        flex items-center justify-center
        pb-10
        bg-[rgba(0,0,0,0.55)]
        backdrop-blur-md
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
            blur-xl
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
            blur-md
            bg-[linear-gradient(130deg,#1db954,#7c3aed,#2563eb,#1db954)]
            bg-[length:300%_300%]
            animate-[artistBorderFlow_8s_ease_infinite]
          "
        />

        <div
          className="
            relative z-10
            h-[500px]
            w-[800px]
            rounded-2xl
            bg-[linear-gradient(180deg,#262626_0%,#181818_100%)]
            shadow-[0_20px_80px_rgba(0,0,0,0.65)]
          "
        >
          <div className="flex h-full">
            <div className="flex w-[40%] items-center justify-center">
              <img
                src={selectedArtist.image}
                alt=""
                className="
                  h-full
                  w-[320px]
                  rounded-2xl
                  object-cover
                "
              />
            </div>

            <div
              className="
                flex flex-1 flex-col justify-center
                px-10
              "
            >
              <h2 className="text-5xl font-black text-white">
                {selectedArtist.name}
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#b3b3b3]">
                Artist biography will appear here.
              </p>
            </div>
          </div>

          <button
            onClick={closeArtist}
            className="
              absolute
              right-4
              top-4
              flex h-10 w-10
              items-center justify-center
              rounded-full
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
  )
}

export default ArtistModal
