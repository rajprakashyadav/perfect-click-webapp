import { Action } from '@ngrx/store';

export enum RegisterActionTypes {
  UserRegister = '[Register] User Register',
}

export class UserRegister implements Action {
  readonly type = RegisterActionTypes.UserRegister;
}


export type RegisterActions = UserRegister;
