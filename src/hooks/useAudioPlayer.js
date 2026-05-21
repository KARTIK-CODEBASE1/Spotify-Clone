import { useEffect, useRef, useState } from 'react'

export default function useAudioPlayer() {
    const [currentSong, setCurrentSong] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [selectedArtist, setSelectedArtist] = useState(null)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [isPlayerOpen, setIsPlayerOpen] = useState(false)
    const [isClosing, setIsClosing] = useState(false)
    const [isLooping, setIsLooping] = useState(false)
    const [previousSong, setPreviousSong] = useState(null)
    const [previousTime, setPreviousTime] = useState(0)
    const [isArtistClosing, setIsArtistClosing] = useState(false)

    const audioRef = useRef(null)
    const audioContextRef = useRef(null)
    const sourceRef = useRef(null)
    const filterRef = useRef(null)
    const playbackRequestRef = useRef(0)

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
        const nextPlaybackRequest = playbackRequestRef.current + 1
        playbackRequestRef.current = nextPlaybackRequest

        if (!audioRef.current) return

        setCurrentSong(song)
        setCurrentTime(0)
        setDuration(0)

        await initializeAudioGraph()

        if (audioContextRef.current?.state === 'suspended') {
            await audioContextRef.current.resume()
        }

        const audioElement = audioRef.current

        audioElement.pause()
        audioElement.src = song.audio
        audioElement.currentTime = 0

        try {
            await audioElement.play()

            if (playbackRequestRef.current !== nextPlaybackRequest) return

            setIsPlaying(true)
            setIsPlayerOpen(true)
        } catch (error) {
            if (playbackRequestRef.current !== nextPlaybackRequest) return

            setIsPlaying(false)
            console.error('Unable to start playback:', error)
        }
    }

    const openArtist = async (artist) => {
        const isSameArtist = currentSong?.audio === artist.audio

        if (!isSameArtist) {
            if (currentSong && audioRef.current) {
                setPreviousSong(currentSong)
                setPreviousTime(audioRef.current.currentTime)
            }

            await playSong(artist)
        }

        setSelectedArtist(artist)
    }

    const closeArtist = async () => {
        setIsArtistClosing(true)

        setTimeout(async () => {
            setSelectedArtist(null)
            setIsArtistClosing(false)

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
        if (filterRef.current) {
            filterRef.current.frequency.value = selectedArtist ? 900 : 20000
        }

        if (audioRef.current) {
            audioRef.current.loop = isLooping || Boolean(selectedArtist)
        }
    }, [isLooping, selectedArtist])

    useEffect(() => {
        return () => {
            sourceRef.current?.disconnect()
            filterRef.current?.disconnect()
            audioContextRef.current?.close()
        }
    }, [])

    return {

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
    }
}

