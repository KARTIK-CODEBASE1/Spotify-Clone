import { useState } from 'react'
import ArtistModal from './artistModal'
import Artists from './artists'
import FooterSection from './footerSection'
import PlayerBar from './playerbar'
import SongCards from './song_cards'
import useAudioPlayer from '../hooks/useAudioPlayer'

function CenterBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const {
    currentSong,
    isPlaying,
    selectedArtist,

    currentTime,
    duration,

    isPlayerOpen,
    isClosing,

    isLooping,
    setIsLooping,

    isArtistClosing,

    audioRef,

    setIsPlaying,
    setCurrentTime,
    setDuration,

    playSong,
    openArtist,
    closeArtist,
    closePlayer,

  } = useAudioPlayer()

  return (
    <div className="relative flex h-full min-h-0 min-w-0 flex-col">
      <main
        onScroll={(event) => setIsScrolled(event.currentTarget.scrollTop > 24)}
        className="relative flex-1 min-h-0 min-w-0 overflow-x-hidden overflow-y-auto rounded-[18px] bg-[#121212] sm:rounded-xl"
      >
        <div
          className={`pointer-events-none sticky top-0 z-0 h-0 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-90'
            }`}
          aria-hidden="true"
        >
          <div className="h-64 bg-[linear-gradient(180deg,rgba(75,51,136,0.95)_0%,rgba(49,36,89,0.82)_42%,rgba(18,18,18,0)_100%)]" />
        </div>

        <div className="relative z-10 px-3 pb-56 sm:px-5 sm:pb-52">
          <div
            className={`sticky top-0 z-20 -mx-3 px-3 pb-4 pt-4 sm:-mx-5 sm:px-5 sm:pt-5 transition-colors duration-300 ${isScrolled
                ? 'bg-[rgba(69,48,122,0.5)] backdrop-blur-sm'
                : 'bg-transparent'
              }`}
          />

          <div className="space-y-10 sm:space-y-14">
            <SongCards playSong={playSong} />
            <Artists
              openArtist={openArtist}
            />
          </div>

          <FooterSection />
        </div>

        <audio
          ref={audioRef}
          onTimeUpdate={() => {
            setCurrentTime(audioRef.current.currentTime)
          }}
          onLoadedMetadata={() => {
            setDuration(audioRef.current.duration)
          }}
          onEnded={() =>{

            setIsPlaying(false)

            setCurrentTime(0)

          }}
        />
      </main>

      {currentSong && isPlayerOpen && (
        <PlayerBar
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          duration={duration}
          isClosing={isClosing}
          closePlayer={closePlayer}
          isLooping={isLooping}
          setIsLooping={setIsLooping}
        />
      )}

      <ArtistModal
        selectedArtist={selectedArtist}
        isArtistClosing={isArtistClosing}
        closeArtist={closeArtist}
      />
    </div>
  )
}

export default CenterBar
