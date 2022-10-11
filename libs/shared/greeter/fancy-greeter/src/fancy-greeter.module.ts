import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FancyGreeterComponent } from './fancy-greeter.component';
import {FancyModelModule} from '@kauppfbi-blogs/greeter/fancy-model';


@NgModule({
  declarations: [
    FancyGreeterComponent
  ],
  imports: [

    CommonModule,
    FancyModelModule,
  ],
  exports: [
    FancyGreeterComponent,
  ]
})
export class FancyGreeterModule { }
