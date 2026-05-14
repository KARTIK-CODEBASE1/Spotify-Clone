const iconFilter = { filter: 'brightness(0) invert(1)' }
const controlButtonClass = 'flex h-10 w-10 items-center justify-center rounded-full bg-[#242424] transition duration-200 hover:scale-[1.05] hover:bg-[#2f2f2f] cursor-pointer'

function PlayerBar({
    currentSong,
    isPlaying,
    setIsPlaying,
    audioRef,
    currentTime,
    setCurrentTime,
    duration,
    isClosing,
    closePlayer,
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

    const formatTime = (time) =>{
        if (!Number.isFinite(time)) {
            return '0:00'
        }

        const minutes = Math.floor(time/60)
        const seconds = Math.floor(time % 60)

        return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    return (
        <div className={`
                fixed bottom-0 left-0 right-0 z-50 
                border-t border-[#2a2a2a] 
                bg-[#181818] px-4 py-4 md:px-6

                ${isClosing
                   ? 'animate-[slideDown_0.35s_ease]'
                   : 'animate-[slideUp_0.35s_ease]'
                }
              `}
        >
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <div className="flex min-w-0 flex-1 items-center gap-4 md:gap-6">

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

                <div className="flex w-full flex-col items-center justify-center md:flex-1">

                    <div className="flex items-center gap-2">
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
                    <div className="mt-3 flex w-full md:max-w-xl items-center gap-3">
                        <span className="text-xs text-[#b3b3b3]">
                            {formatTime(currentTime)}
                        </span>
                        <input
                            type="range"
                            value={currentTime}
                            max={duration || 0}
                            min="0"
                            step='0.1'
                            onChange={(event) => {
                                const nextTime = Number(event.target.value)
                                audioRef.current.currentTime = nextTime
                                setCurrentTime(nextTime)
                            }}
                            className="h-1 flex-1 cursor-pointer appearance-none rounded-full bg-[#4d4d4d]"

                        />
                        <span className="text-xs text-[#b3b3b3]">
                            {formatTime(duration)}
                        </span>
                    </div>
                </div>

                <div className="flex-1 justify-end hidden md:flex">
                    <button
                        type="button"
                        onClick={closePlayer}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold text-[#b3b3b3] transition duration-200 hover:bg-[#242424] hover:text-white cursor-pointer hidden md:block"
                        aria-label="Close player"
                    >
                        X
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PlayerBar
