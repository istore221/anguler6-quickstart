import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MyModule} from './my-module/my-module.module';
import {HeroService} from './my-module/services/hero.service';
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import {SampleModule} from './sample-module/sample.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyModule.forRoot(),
    SampleModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
