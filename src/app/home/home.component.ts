import { Component, OnInit } from '@angular/core';
import { HeroService } from '../my-module/services/hero.service';
import {Hero} from '../../types/types'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  heroes: Hero[]

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }

}
