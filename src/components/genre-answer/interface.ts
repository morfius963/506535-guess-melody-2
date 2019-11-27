import React from "react";
import {AnswerGenre} from "../../types";
import {SyntheticEvent} from "react";

export interface Props {
  id: number,
  answer: AnswerGenre,
  checkboxChangeHandler: (evt: SyntheticEvent) => void,
  children: React.ReactElement
}
