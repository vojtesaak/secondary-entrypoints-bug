import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleGreeterComponent } from './simple-greeter.component';
import {FancyGreeterModule} from '@kauppfbi-blogs/greeter/fancy-greeter';
import {FancyModelModule} from '@kauppfbi-blogs/greeter/fancy-model';


@NgModule({
  declarations: [
    SimpleGreeterComponent
  ],
  imports: [
    CommonModule,
    FancyGreeterModule,
    FancyModelModule,
  ],
  exports: [
    SimpleGreeterComponent,
  ]
})
export class SimpleGreeterModule { }
