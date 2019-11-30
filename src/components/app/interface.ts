import * as React from "react";
import {QuestionArtist, QuestionGenre} from "../../types";

type Question = QuestionArtist | QuestionGenre;

export interface Props {
  questions: Question[],
  questionStep: number,
  mistakes: number,
  isLoading: boolean,
  renderScreen: (question : Question) => React.ReactElement,
  resetGame: () => void,
  loadQuestions: () => void
};