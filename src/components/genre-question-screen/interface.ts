import {SyntheticEvent} from "react";
import {QuestionGenre, AnswerGenre} from "../../types";

export interface Props {
  questions: QuestionGenre,
  screenIndex: number,
  userAnswer: boolean[],
  onChange: (evt: SyntheticEvent) => void,
  resetUserAnswer: () => void,
  resetActivePlayerValue: () => void,
  onAnswer: (userAnswer: boolean[], answerTime: number) => void,
  renderPlayer: (song: AnswerGenre, id: number) => React.ReactElement,
}
