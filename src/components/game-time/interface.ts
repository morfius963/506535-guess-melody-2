export interface Props {
  time: number,
  onTimeEnd: () => void,
  onTimeUpdate: () => void,
  registrateTimer: (id: number) => void,
}
