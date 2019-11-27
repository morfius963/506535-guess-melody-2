export interface Props {
  mistakes: number,
  time: number,
  onTimeUpdate: () => void,
  onTimeEnd: () => void,
  resetGame: () => void,
  registrateTimer: (id: number) => void,
}
