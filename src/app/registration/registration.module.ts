import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromRegister from './store/reducers/register.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffects } from './store/effects/register.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromRegister.registerFeatureKey, fromRegister.reducer),
    EffectsModule.forFeature([RegisterEffects])
  ]
})
export class RegistrationModule { }
