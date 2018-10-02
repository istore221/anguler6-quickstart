import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import {HeroService} from './services/hero.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [HeroComponent],
  exports: [
    HeroComponent
  ],
  providers: [
  ]
})
export class MyModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MyModule,
      providers: [ HeroService ]
    }
  }
}
