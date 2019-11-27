import React from "react";
import {QuestionArtist, Song} from "../../types";

export interface Props {
  questions: QuestionArtist,
  screenIndex: number,
  onAnswer: (asnwerValue: string, answerTime: number) => void,
  renderPlayer: (song: Song, id: number) => React.ReactElement,
  resetActivePlayerValue: () => void
}
