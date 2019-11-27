import {SyntheticEvent} from "react";

export interface Props {
  formSubmitHandler: (evt: SyntheticEvent ) => void,
  userInputHandler: (evt: SyntheticEvent ) => void
}
