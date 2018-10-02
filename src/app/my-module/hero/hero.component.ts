import { Component, OnInit } from '@angular/core';
import {Hero,Post} from '../../../types/types'
import { HeroService } from '../services/hero.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroes: Hero[];
  posts: Post[];
  posts$: Observable<Post[]>;



  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
    this.posts$ = this.heroService.getPosts();



  }

}
