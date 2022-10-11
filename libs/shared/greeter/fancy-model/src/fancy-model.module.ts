import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FancyModelComponent } from './fancy-model.component';



@NgModule({
  declarations: [
    FancyModelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FancyModelComponent
  ]
})
export class FancyModelModule { }
