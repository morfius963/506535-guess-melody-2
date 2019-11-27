export interface Props {
  isPlaying: boolean,
  isLoading: boolean,
  src: string,
  id: number,
  onPlayButtonClick: (id: number) => void,
  audioRef: {
    current: HTMLAudioElement
  }
}
