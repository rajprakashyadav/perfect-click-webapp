
import { RegisterActions, RegisterActionTypes } from '../actions/register.actions';

export const registerFeatureKey = 'register';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: RegisterActions): State {
  switch (action.type) {

    case RegisterActionTypes.UserRegister:
      return state;

    default:
      return state;
  }
}
