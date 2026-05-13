const iconFilter = { filter: 'brightness(0) invert(1)' }
const controlButtonClass = 'flex h-10 w-10 items-center justify-center rounded-full bg-[#242424] transition duration-200 hover:scale-[1.05] hover:bg-[#2f2f2f] cursor-pointer'

function PlayerBar({
    currentSong,
    isPlaying,
    setIsPlaying,
    audioRef,
    currentTime,
    duration,
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

    console.log("where : ", currentTime)
    console.log("total duration: ", duration)

    const formatTime = (time) =>{
        const minutes = Math.floor(time/60)
        const seconds = Math.floor(time % 60)

        return `${minutes} : ${seconds}`
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 h-34 border-t border-[#2a2a2a] bg-[#181818] px-6 animate-[slideUp_0.35s_ease]">
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

                <div className="flex flex-col items-center">

                    <div className="flex items-center shrink-0 gap-2">
                        <button
                            type="button"
                            className={controlButtonClass}
                            aria-label="Previous"
                        >
                            <img
                                className="h-5 w-5 scale-[1.08]"
                                style={iconFilter}
                                src="/Svg/player-controls/previous-button.svg"
                                alt="Previous"
                            />
                        </button>
                        <button
                            type="button"
                            onClick={togglePlay}
                            className={controlButtonClass}
                            aria-label={isPlaying ? 'Pause' : 'Play'}
                        >
                            {isPlaying ? (
                                <img
                                    className="h-5 w-5"
                                    style={iconFilter}
                                    src="/Svg/player-controls/pause.svg"
                                    alt="pause"
                                />
                            ) : (
                                <img
                                    className="h-5 w-5"
                                    style={iconFilter}
                                    src="/Svg/player-controls/play.svg"
                                    alt="Play"
                                />

                            )}
                        </button>
                        <button
                            type="button"
                            className={controlButtonClass}
                            aria-label="Next"
                        >
                            <img
                                className="h-5 w-5"
                                style={iconFilter}
                                src="/Svg/player-controls/next-button.svg"
                                alt="Next"
                            />
                        </button>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-xs text-[#b3b3b3]">
                            {formatTime(currentTime)}
                        </span>
                        <input
                            type="range"
                            value={currentTime}
                            max={duration}
                            step='0.1'
                            onChange={(event) => {
                                audioRef.current.currentTime = event.target.value
                                setCurrentTime(event.target.value)
                            }}
                            className="w-96"

                        />
                        <span className="text-xs text-[#b3b3b3]">
                            {formatTime(duration)}
                        </span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerBar
