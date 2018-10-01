import { Injectable } from '@angular/core';
import {Hero} from '../../../types/types'


export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return [{hero_id:1,hero:'Superman'},{hero_id:2,hero:'Bat Man'}] ;
  }
}
