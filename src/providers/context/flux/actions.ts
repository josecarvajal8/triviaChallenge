import {IContextState} from '../../../models/context';

export const setNewScore = (
  state: IContextState,
  payload: {correct: number; incorrect: number},
) => {
  return {
    ...state,
    answers: {
      ...payload,
    },
  };
};
