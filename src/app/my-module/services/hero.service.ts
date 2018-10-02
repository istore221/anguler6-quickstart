import { Injectable } from '@angular/core';
import {Hero,Post} from '../../../types/types'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class HeroService {

  constructor(private http: HttpClient) { }

  getHeroes(): Hero[] {
    return [{hero_id:1,hero:'Superman'},{hero_id:2,hero:'Bat Man'}] ;
  }

  getPosts(): Observable<Post[]> {

    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");

  }





}
