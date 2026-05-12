const iconFilter = { filter: 'brightness(0) invert(1)' }

function PlayerBar({
    currentSong,
    isPlaying,
    setIsPlaying,
    audioRef,
}) {

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause()
            setIsPlaying(false)
        } else {
            audioRef.current.play()
            setIsPlaying(true)
        }
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 h-34 border-t border-[#2a2a2a] bg-[#181818] px-6">
            <div className="flex h-full items-center justify-between">
                <div className="flex min-w-0 items-center gap-6">

                    {currentSong && (
                        <img
                            src={currentSong.cover || currentSong.image}
                            alt=''
                            className="h-14 w-14 rounded object-cover"
                        />
                    )}

                    {currentSong && (
                        <div className="min-w-0">
                            <h3 className="truncate font-black text-white">
                                {currentSong.title || currentSong.name}
                            </h3>

                            <p className="truncate text-sm text-[#b3b3b3]">
                                {currentSong.artist || 'Artist'}
                            </p>
                        </div>
                    )}

                </div>

                <div className="flex items-center shrink-0 gap-2">
                    < img
                        className="h-5 w-5 cursor-pointer font-black"
                        style={iconFilter}
                        src="/Svg/player-controls/previous-button.svg"
                        alt="Previous"
                    ></img>
                    <button
                        onClick={togglePlay}
                        className="flex h-10 w-10 items-center justify-center rounded-full cursor-pointer"
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                    >


                        {isPlaying ? (
                            <img
                                className="h-5 w-5 ml-0.5"
                                style={iconFilter}
                                src="/Svg/player-controls/pause.svg"
                                alt="pause"
                            ></img>
                        ) : (
                            <img
                                className="h-5 w-5 ml-0.5"
                                style={iconFilter}
                                src="/Svg/player-controls/play.svg"
                                alt="Play"
                            ></img>

                        )}
                    </button>
                    <img className="h-5 w-5 cursor-pointer"
                        style={iconFilter}
                        src="/Svg/player-controls/next-button.svg"
                        alt="Next"
                    ></img>
                </div>

            </div>
        </div>
    )
}

export default PlayerBar