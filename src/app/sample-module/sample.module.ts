import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlaComponent } from './bla/bla.component';
import {SampleRoutingModule  } from "./sample-routing.module";

@NgModule({
  imports: [
    CommonModule,
    SampleRoutingModule
  ],
  declarations: [BlaComponent]
})
export class SampleModule { }
