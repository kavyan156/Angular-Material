import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatRadioModule,
  MatAutocompleteModule,
  MatSliderModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  MatListModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  exports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatListModule,
    MatIconModule
  ]
})
export class MaterialModule {}
