import { useState } from "react"

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
    isLooping,
    setIsLooping,
}) {

    const [isSkippingForward, setIsSkippingForward] = useState(false)

    const [isSkippingBackward, setIsSkippingBackward] = useState(false)

    const [touchStart, setTouchStart] = useState(0)

    const progress = (currentTime / duration) * 100

    const togglePlay = () => {

        if (isPlaying) {
            audioRef.current.pause()
            setIsPlaying(false)
        } else {
            audioRef.current.play()
            setIsPlaying(true)
        }
    }

    const skipForward = () => {

        setIsSkippingForward(true)

        audioRef.current.currentTime += 5

        setCurrentTime(audioRef.current.currentTime)

        setTimeout(() => {
            setIsSkippingForward(false)
        }, 500)
    }

    const skipBackward = () => {

        setIsSkippingBackward(true)

        audioRef.current.currentTime -= 5

        setCurrentTime(audioRef.current.currentTime)

        setTimeout(() => {
            setIsSkippingBackward(false)
        }, 500)
    }

    const formatTime = (time) => {
        if (!Number.isFinite(time)) {
            return '0:00'
        }

        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)

        return `${minutes} : ${seconds.toString().padStart(2, '0')}`
    }

    const toogleLoop = () => {

        audioRef.current.loop = !isLooping

        setIsLooping(!isLooping)
    }

    return (
        <div
            className={`
                    fixed bottom-0 left-0 right-0 z-50 
                    border-t border-[#2a2a2a] 
                    bg-[#181818] px-4 py-4 md:px-6

                    ${isClosing
                                ? 'animate-[slideDown_0.35s_ease]'
                                : 'animate-[slideUp_0.35s_ease]'
                    }
            `}

            onTouchStart={(event) => {
                setTouchStart(event.touches[0].clientY)
            }}

            onTouchEnd={(event) => {

                const touchEnd = event.changedTouches[0].clientY

                const distance = touchEnd - touchStart

                if (distance > 120) {
                    closePlayer()
                }

            }}
        >
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <div className="flex min-w-0 flex-1 items-center gap-4 md:gap-6">

                    {currentSong && (
                        <div className="relative h-14 w-14">

                            <img
                                src={currentSong.cover || currentSong.image}
                                alt=""
                                className="h-full w-full rounded object-cover"
                            />

                            <div
                                className="
                                        absolute
                                        -bottom-2
                                        -right-2

                                        flex items-center justify-center

                                        h-12 w-12

                                        rounded-full                                        
                                        border border-[#333]

                                        bg-black

                                        animate-[spinDisk_4s_linear_infinite]
                                    "

                                style={{
                                    animationPlayState: isPlaying ? 'running' : 'paused'
                                }}
                            >

                                <img
                                    src={currentSong.cover || currentSong.image}
                                    alt=""
                                    className="h-10 w-10 rounded-full object-cover"
                                />

                                <div
                                    className="
                                            absolute
                                            h-2.5 w-2.5
                                            rounded-full
                                            border border-[#666]
                                            bg-black
                                    "
                                />

                            </div>

                        </div>
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
                            className={`
                                ${controlButtonClass} 
                                ${isSkippingBackward
                                    ? 'bg-[#1db954] shadow-[0_0_18px_rgba(29,185,84,0.45)]'
                                    : 'bg-[#242424]'
                                }
                                `}
                            aria-label="Previous"
                            onClick={skipBackward}
                        >
                            <img
                                className="h-6 w-6 scale-[1.08]"
                                style={iconFilter}
                                src="/Svg/player-controls/backward_5.svg"
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
                            className={`
                                     ${controlButtonClass}
                                     ${isSkippingForward
                                    ? 'bg-[#1db954] shadow-[0_0_18px_rgba(29,185,84,0.45)]'
                                    : 'bg-[#242424]'
                                }
                                `}
                            aria-label="Next"
                            onClick={skipForward}
                        >
                            <img
                                className="h-6 w-6"
                                style={iconFilter}
                                src="/Svg/player-controls/forward_5.svg"
                                alt="Next"
                            />
                        </button>

                        <button
                            type="button"

                            className={`
                                ml-6 flex h-10 w-10
                                items-center justify-center rounded-full
                                transition duration-200
                                hover:scale-[1.05] hover:bg-[#2f2f2f] cursor-pointer
                                ${isLooping
                                    ? 'bg-[#1db954] shadow-[0_0_18px_rgba(29,185,84,0.45)]'
                                    : 'bg-[#242424]'
                                }
                            `}
                            aria-label="Next"
                            onClick={toogleLoop}
                        >
                            <img
                                className="h-6 w-6 "
                                style={iconFilter}
                                src="/Svg/player-controls/loop.svg"
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
                            style={{
                                background: `linear-gradient(
                                        to right,
                                      #1db954 ${progress}%,
                                      #ffffff ${progress}%
                                )`
                            }}
                            className="custom-slider h-1 flex-1 cursor-pointer appearance-none rounded-full"

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
        </div >
    )
}

export default PlayerBar
