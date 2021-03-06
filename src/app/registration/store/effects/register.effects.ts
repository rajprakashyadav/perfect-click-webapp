import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { RegisterActionTypes, RegisterActions } from '../actions/register.actions';



@Injectable()
export class RegisterEffects {


  @Effect()
  loadRegisters$ = this.actions$.pipe(
    ofType(RegisterActionTypes.UserRegister),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<RegisterActions>) {}

}
