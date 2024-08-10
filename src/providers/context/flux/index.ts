import {CONTEXT_TYPES} from './types';
import {setNewScore} from './actions';
import {IContextState, IScore} from '../../../models/context';

const reducers: Record<string, any> = {
  [CONTEXT_TYPES.UPDATE_SCORE]: (state: IContextState, payload: IScore) =>
    setNewScore(state, payload),
  DEFAULT: (state: IContextState) => state,
};

export default function reducer(
  state: IContextState,
  action: {type: CONTEXT_TYPES | 'DEFAULT'; payload: IScore | unknown},
) {
  const {type = 'DEFAULT', payload = null} = {...action};
  return type ? reducers[type](state, payload) : reducers.DEFAULT(state);
}
