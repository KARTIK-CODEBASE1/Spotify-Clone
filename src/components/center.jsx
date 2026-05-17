import { useEffect, useRef, useState } from 'react'
import ArtistModal from './artistModal'
import Artists from './artists'
import FooterSection from './footerSection'
import PlayerBar from './playerbar'
import SongCards from './song_cards'

function CenterBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentSong, setCurrentSong] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedArtist, setSelectedArtist] = useState(null)
  const audioRef = useRef(null)
  const audioContextRef = useRef(null)
  const sourceRef = useRef(null)
  const filterRef = useRef(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isPlayerOpen, setIsPlayerOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [isLooping, setIsLooping] = useState(false)
  const [previousSong, setPreviousSong] = useState(null)
  const [previousTime, setPreviousTime] = useState(0)
  const [isArtistClosing, setIsArtistClosing] = useState(false)

  const initializeAudioGraph = async () => {
    if (!audioRef.current || filterRef.current) return

    const AudioContextClass = window.AudioContext || window.webkitAudioContext

    if (!AudioContextClass) return

    const audioContext = new AudioContextClass()
    const source = audioContext.createMediaElementSource(audioRef.current)
    const filter = audioContext.createBiquadFilter()

    filter.type = 'lowpass'
    filter.frequency.value = 20000

    source.connect(filter)
    filter.connect(audioContext.destination)

    audioContextRef.current = audioContext
    sourceRef.current = source
    filterRef.current = filter
  }

  const playSong = async (song) => {
    setCurrentSong(song)

    await initializeAudioGraph()

    if (audioContextRef.current?.state === 'suspended') {
      await audioContextRef.current.resume()
    }

    audioRef.current.src = song.audio
    audioRef.current.play()
    setIsPlaying(true)
    setIsPlayerOpen(true)
  }

  const openArtist = async (artist) => {
    const isSameArtist = currentSong?.audio === artist.audio

    if (!isSameArtist && currentSong) {
      setPreviousSong(currentSong)
      setPreviousTime(audioRef.current.currentTime)
      await playSong(artist)
    }

    setSelectedArtist(artist)
    audioRef.current.loop = true
  }

  const closeArtist = async () => {
    setIsArtistClosing(true)

    setTimeout(async () => {
      setSelectedArtist(null)
      setIsArtistClosing(false)
      audioRef.current.loop = false

      if (previousSong) {
        await playSong(previousSong)
        audioRef.current.currentTime = previousTime
        setPreviousSong(null)
      }
    }, 300)
  }

  const closePlayer = () => {
    setIsClosing(true)

    setTimeout(() => {
      audioRef.current.pause()
      setIsPlaying(false)
      setIsPlayerOpen(false)
      setIsClosing(false)
    }, 300)
  }

  useEffect(() => {
    if (!filterRef.current) return

    if (selectedArtist) {
      filterRef.current.frequency.value = 900
      if (audioRef.current) {
        audioRef.current.loop = true
      }
    } else {
      filterRef.current.frequency.value = 20000
      if (audioRef.current) {
        audioRef.current.loop = false
      }
    }
  }, [selectedArtist])

  useEffect(() => {
    return () => {
      sourceRef.current?.disconnect()
      filterRef.current?.disconnect()
      audioContextRef.current?.close()
    }
  }, [])

  return (
    <div className="relative flex h-screen flex-col">
      <main
        onScroll={(event) => setIsScrolled(event.currentTarget.scrollTop > 24)}
        className="relative flex-1 min-h-0 overflow-y-auto rounded-xl bg-[#121212]"
      >
        <div
          className={`pointer-events-none sticky top-0 z-0 h-0 transition-opacity duration-300 ${
            isScrolled ? 'opacity-100' : 'opacity-90'
          }`}
          aria-hidden="true"
        >
          <div className="h-64 bg-[linear-gradient(180deg,rgba(75,51,136,0.95)_0%,rgba(49,36,89,0.82)_42%,rgba(18,18,18,0)_100%)]" />
        </div>

        <div className="relative z-10 px-5 pb-52 mb:pb-32">
          <div
            className={`sticky top-0 z-20 -mx-5 px-5 pb-4 pt-5 transition-colors duration-300 ${
              isScrolled
                ? 'bg-[rgba(69,48,122,0.5)] backdrop-blur-sm'
                : 'bg-transparent'
            }`}
          />

          <div className="space-y-14">
            <SongCards playSong={playSong} />
            <Artists
              playSong={playSong}
              openArtist={openArtist}
              currentSong={currentSong}
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
