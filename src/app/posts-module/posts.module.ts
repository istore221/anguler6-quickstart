import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import {PostsRoutingModule  } from "./posts-routing.module";


@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  declarations: [PostComponent]
})
export class PostsModule { }
